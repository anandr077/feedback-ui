import { filter, flatMap, includes, map } from 'lodash';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import {
  saveAnswer
} from '../../../service.js';
import { getComments } from './functions';

import {
  updateFeedbackRange
} from '../../../service';


export const createDebounceFunction = (submission, setSubmission, pageMode, comments, setIsSavingAnswer) => (answer) => {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return {
      debounceTime: 2000,
      onDebounce: handleDebounce(comments, submission, setSubmission, answer, setIsSavingAnswer),
    };
  }
  return {
    debounceTime: 0,
    onDebounce: console.log,
  };
};
const handleDebounce = (comments, submission, setSubmission, answer, setIsSavingAnswer) => (contents, highlights) => {
  setIsSavingAnswer(true)
  const highlightsWithCommentIds = Object.keys(highlights).map(key => ({
    commentId: key,
    range: highlights[key][0].range
  }));
  saveAnswer(submission.id, answer.serialNumber, {
    answer: contents,
    highlights: highlightsWithCommentIds
  }).then((updatedSubmission) => {
    setSubmission(updatedSubmission);
    setIsSavingAnswer(false)
  });
};
