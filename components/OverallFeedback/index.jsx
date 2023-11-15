import { useState, useRef } from 'react';
import { isTabletView } from '../ReactiveRender';
import {
  FeedbackContainer,
  Heading,
  FeedbackBox,
  TextArea,
  AudioContainer,
  RecordingIndicator,
  Audio,
  ButtonContainer,
  Button,
  DeleteBtn,
  DeleteAudio,
} from './style';
import { useEffect } from 'react';
import DeleteIcon from '../../static/icons/delete-purple-icon.svg';

const mimeType = 'audio/webm';

const OverallFeedback = ({ pageMode }) => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  let recordTimeout = useRef(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [feedback, setFeedback] = useState('');
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

  useEffect(() => {
    console.log('the audio is ', audio, feedback);
  }, [audio, feedback]);

  const deleteAudio = () => {
    setAudio(null);
    setRecordingStatus('inactive');
  };

  return (
    <FeedbackContainer>
      <Heading>General Feedback</Heading>
      <FeedbackBox>
        <TextArea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          readOnly={pageMode === 'DRAFT'}
        ></TextArea>
        <AudioContainer>
          {pageMode !== 'DRAFT' && (
            <ButtonContainer>
              {!permission && !audio ? (
                <Button onClick={getMicrophonePermission}>+ Voice Note</Button>
              ) : null}
              {recordingStatus === 'inactive' && permission && !audio ? (
                <Button onClick={startRecording}>Start Recording</Button>
              ) : recordingStatus === 'recording' ? (
                <Button onClick={stopRecording}>Stop Recording</Button>
              ) : null}
              {recordingStatus === 'recording' && <RecordingIndicator />}
            </ButtonContainer>
          )}
          {audio ? (
            <>
              <Audio src={audio} controls isTablet={isTablet} />
              {pageMode !== 'DRAFT' && (
                <DeleteBtn>
                  <DeleteAudio src={DeleteIcon} onClick={deleteAudio} />
                </DeleteBtn>
              )}
            </>
          ) : null}
        </AudioContainer>
      </FeedbackBox>
    </FeedbackContainer>
  );
};

export default OverallFeedback;
