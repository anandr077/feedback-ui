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


export const createDebounceFunction = (submission, setSubmission, pageMode, comments, setComments) => (answer) => {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return {
      debounceTime: 2000,
      onDebounce: handleDebounce(comments, setComments, submission, setSubmission, answer),
    };
  }
  return {
    debounceTime: 0,
    onDebounce: console.log,
  };
};
const handleDebounce = (comments, setComments, submission, setSubmission, answer) => (contents, highlights) => {
  const highlightsWithCommentIds = Object.keys(highlights).map(key => ({
    commentId: key,
    range: highlights[key][0].range
  }));
  saveAnswer(submission.id, answer.serialNumber, {
    answer: contents,
    highlights: highlightsWithCommentIds
  }).then((updatedSubmission) => {
    setSubmission(updatedSubmission);
    setComments(updatedSubmission.comments?.filter((c) => c.type !== 'MARKING_CRITERIA'));
    // return updateCommentsRange(submission, comments, setComments)(answer, highlights);
  });
};
