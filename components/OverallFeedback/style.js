import styled from 'styled-components';

export const FeedbackContainer = styled.div`

`

export const Heading = styled.h1`
  
`

export const FeedbackBox = styled.div`

`

export const TextArea = styled.textarea`

`

export const RecordingText = styled.div`
 @keyframes wave {
    0%, 60%, 100% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-3px);
    }
  }
  
  .wave-letter {
    display: inline-block;
    animation: wave 600ms ease-in-out;
    animation-iteration-count: infinite;
  }
`