import React from 'react';
import { useState, useRef } from 'react';
import {
  AudioContainer,
  AudioFeedbackTitle,
  ButtonContainer,
  Button,
  Audio,
  DeleteBtn,
  DeleteAudio,
  RecordingIndicator,
  GeneratedAudio,
  AudioIcon,
} from './audioRecorder';
import { isTabletView } from '../ReactiveRender';
import DeleteIcon from '../../static/icons/delete-purple-icon.svg';

const mimeType = 'audio/webm';

const AudioRecorder = ({
  handleAudioFeedbackRecorded,
  handleDelete,
  initialAudio,
}) => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  let recordTimeout = useRef(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(
    initialAudio ? URL.createObjectURL(initialAudio) : null
  );

  const isTablet = isTabletView();

  const handleRecording = async () => {
    if (!permission || !stream) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        setPermission(true);
        setStream(streamData);
        startRecording(streamData);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      startRecording(stream);
    }
  };

  const startRecording = (streamData) => {
    setRecordingStatus('recording');
    const media = new MediaRecorder(streamData, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        localAudioChunks.push(event.data);
        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
      }
    };
    setAudioChunks(localAudioChunks);

    clearTimeout(recordTimeout.current);
    recordTimeout.current = setTimeout(stopRecording, 300000);
  };

  const stopRecording = () => {
    clearTimeout(recordTimeout.current);
    setRecordingStatus('inactive');
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      setAudioChunks((prevChunks) => {
        const audioBlob = new Blob(prevChunks, { type: mimeType });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudio(audioUrl);
        handleAudioFeedbackRecorded(audioBlob);
        return [];
      });
    };
  };


  const deleteAudio = () => {
    setAudio(null);
    setRecordingStatus('inactive');
    handleDelete();
  };

  return (
    <AudioContainer>
      {
        <ButtonContainer>
          {recordingStatus === 'inactive' && !audio ? (
          <Button onClick={handleRecording}>
            + Add Audio <AudioIcon />
          </Button>
        ) : recordingStatus === 'recording' ? (
          <Button onClick={stopRecording}>Stop Recording</Button>
        ) : null}
        {recordingStatus === 'recording' && <RecordingIndicator />}
        </ButtonContainer>
      }
      {audio ? (
        <GeneratedAudio>
          <Audio
            src={audio}
            controls
            controlsList="nodownload"
            isTablet={isTablet}
          />

          <DeleteBtn>
            <DeleteAudio src={DeleteIcon} onClick={deleteAudio} />
          </DeleteBtn>
        </GeneratedAudio>
      ) : null}
    </AudioContainer>
  );
};

export default AudioRecorder;
