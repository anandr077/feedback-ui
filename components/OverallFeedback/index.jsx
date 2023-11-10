import { useState, useRef } from 'react';
import { FeedbackContainer, Heading, FeedbackBox, TextArea, RecordingText } from './style';

const mimeType = 'audio/webm';

const OverallFeedback = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  let recordTimeout = useRef(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

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
    }, 60000);
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
        alert(err.message);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  };

  const recordingIndicator = 'Recording...'.split('').map((letter, index) => (
    <span
      key={index}
      className="wave-letter"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {letter}
    </span>
  ));

  return (
    <FeedbackContainer>
      <Heading>Overall Feedback</Heading>
      <FeedbackBox>
        <TextArea></TextArea>
        <main>
          <div className="audio-controls">
            {!permission ? (
              <button onClick={getMicrophonePermission} type="button">
                Get Microphone
              </button>
            ) : null}
            {/* {recordingStatus === "recording" && (
          <div className="recording-indicator">Recording...</div>
        )} */}
            {recordingStatus === 'recording' && <RecordingText>{recordingIndicator}</RecordingText>}
            {recordingStatus === 'inactive' && permission ? (
              <button onClick={startRecording} type="button">
                Start Recording
              </button>
            ) : recordingStatus === 'recording' ? (
              <button onClick={stopRecording} type="button">
                Stop Recording
              </button>
            ) : null}
          </div>
          {audio ? <audio src={audio} controls /> : null}
        </main>
      </FeedbackBox>
    </FeedbackContainer>
  );
};

export default OverallFeedback;
