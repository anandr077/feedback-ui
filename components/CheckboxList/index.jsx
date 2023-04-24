import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalBlack16px
} from "../FeedbacksComponents/../../styledMixins";
import CustomCheckbox from "../../CustomCheckbox";
import OptionRemark from "../FeedbacksComponents/OptionRemark";
import { saveAnswer } from "../../service";
import OptionRemark from "../FeedbacksComponents/OptionRemark";
export const CheckboxList = ({
  submission,
  question,
  pageMode,
  handleChangeText,
}) => {
  const answerOptions =
    submission.answers &&
    submission.answers[question.serialNumber - 1]?.answer?.selectedOptions
      ? submission.answers[
          question.serialNumber - 1
        ].answer.selectedOptions.map((option) => option.serialNumber)
      : [];
  const [selectedOptions, setSelectedOptions] = useState(answerOptions);

  useEffect(() => {
    handleSaveMCQAnswer(
      submission,
      question,
      handleChangeText,
      selectedOptions
    );
  }, [selectedOptions]);

  return mcqAnswerFrame(
    question,
    pageMode,
    selectedOptions,
    setSelectedOptions
  );
};
const handleCheckboxChange = (setSelectedOptions) => (event) => {
  const optionId = Number(event.target.value);
  if (event.target.checked) {
    setSelectedOptions((prevState) => [...prevState, optionId]);
  } else {
    setSelectedOptions((prevState) =>
      prevState.filter((option) => option !== optionId)
    );
  }
};
const handleSaveMCQAnswer = (
  submission,
  question,
  handleChangeText,
  answers
) => {
  const checked = question.options
    .map((option) => {
      const id =
        "mcq_" + question.serialNumber + "_" + option.optionSerialNumber;
      return {
        serialNumber: option.optionSerialNumber,
        option: option.option,
        checked: answers.includes(option.optionSerialNumber),
      };
    })
    .filter((answer) => {
      return answer.checked === true;
    });
  console.log("checked " + JSON.stringify(checked));
  handleChangeText("Saving...", false);
  saveAnswer(submission.id, question.serialNumber, {
    question: question.question,
    selectedOptions: checked,
  }).then((_) => {
    handleChangeText("All changes saved", true);
  });
};
const mcqAnswerFrame = (
  question,
  pageMode,
  selectedOptions,
  setSelectedOptions
) => {
  const options = question.options.map((option) => {
    const checked = selectedOptions.includes(option.optionSerialNumber);
    const isCorrect = option.isCorrect === checked;
    return (
      <>
        {pageMode === "REVIEW" || pageMode === "CLOSED" ? (
          <ReviewCheckBoxContainer>
            {" "}
            <OptionCotainer>
              <CustomCheckbox checked={checked} disabled />{" "}
              <OptionText>{option.option}</OptionText>{" "}
            </OptionCotainer>
            <OptionRemarkContainer>
              <OptionRemark isCorrect={isCorrect} />
            </OptionRemarkContainer>
          </ReviewCheckBoxContainer>
        ) : (
          <OptionCotainer>
            <CustomCheckbox
              value={option.optionSerialNumber}
              checked={selectedOptions.includes(option.optionSerialNumber)}
              onChange={handleCheckboxChange(setSelectedOptions)}
            />
            <OptionText>{option.option}</OptionText>{" "}
          </OptionCotainer>
        )}
      </>
    );
  });
  return <OptionsRoot>{options}</OptionsRoot>;
};
export default CheckboxList;

const ReviewCheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const OptionRemarkContainer = styled.div`
  display: flex;
  padding-left: 0.5em;
  padding-bottom: 0.75em;
`;

const OptionsRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const OptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

const OptionText = styled.div`
  ${IbmplexsansNormalBlack16px}
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;
