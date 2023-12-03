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

  const startRecording = async () => {
    setRecordingStatus('recording');
    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return;
      if (event.data.size === 0) return;
      if (event.data.size > 0) {
        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
      }
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);

    clearTimeout(recordTimeout.current);

    recordTimeout.current = setTimeout(() => {
      if (
        mediaRecorder.current &&
        mediaRecorder.current.state === 'recording'
      ) {
        stopRecording();
      }
    }, 300000);
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

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(edivrr.message);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  const deleteAudio = () => {
    setAudio(null);
    setRecordingStatus('inactive');
    handleDelete();
  };

  return (
    <AudioContainer>
      <AudioFeedbackTitle>Audio Feedback</AudioFeedbackTitle>
      {
        <ButtonContainer>
          {!permission && !audio ? (
            <Button onClick={getMicrophonePermission}>
              + Audio Feedback <AudioIcon></AudioIcon>
            </Button>
          ) : null}
          {recordingStatus === 'inactive' && permission && !audio ? (
            <Button onClick={startRecording}>Start Recording</Button>
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
