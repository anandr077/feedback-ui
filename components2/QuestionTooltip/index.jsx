import React, { useRef, useState, useEffect } from 'react'
import {
    TitleImage,
    TooltipContainer,
    TooltipText
} from './style'
import questionMark from '../../static/img/question-mark.svg';

const QuestionTooltip = ({text}) => {
  const tooltipRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (tooltipRef.current) {
      const tooltipTop = tooltipRef.current.getBoundingClientRect().top;
      setIsSticky(tooltipTop <= 80);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TooltipContainer>
        <TitleImage src={questionMark} />
        <TooltipText isSticky={isSticky} ref={tooltipRef}>
            {text}
        </TooltipText>
    </TooltipContainer>
  )
}

export default QuestionTooltip