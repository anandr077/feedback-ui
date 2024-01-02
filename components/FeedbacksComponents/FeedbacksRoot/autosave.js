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


export const createDebounceFunction = (submission, pageMode, comments, setComments) => (answer) => {
  if (pageMode === 'DRAFT' || pageMode === 'REVISE') {
    return {
      debounceTime: 2000,
      onDebounce: handleDebounce(comments, setComments, submission, answer),
    };
  }
  return {
    debounceTime: 0,
    onDebounce: console.log,
  };
};
const handleDebounce = (comments, setComments, submission, answer) => (contents, highlights) => {
  handleChangeText('Saving...', false);
  saveAnswer(submission.id, answer.serialNumber, {
    answer: contents,
  }).then((updatedSubmission) => {
    return updateCommentsRange(submission, comments, setComments)(answer, highlights);
  });
};
const handleChangeText = (change, allSaved) => {
  if (document.getElementById('statusLabelIcon')) {
    if (allSaved) {
      document.getElementById('statusLabelIcon').style.backgroundImage =
        'url("/icons/saved.png")';
    } else {
      document.getElementById('statusLabelIcon').style.backgroundImage =
        'url("/icons/saving.png")';
    }
    document.getElementById('statusLabelDiv').innerHTML = change;
  }
};

const updateCommentsRange=(submission, comments, setComments)=>(answer, highlightsWithCommentsData) => {
  const mergedHighlights = {};

  Object.entries(highlightsWithCommentsData).map(([commentId, ranges]) => {
    const mergedRange = {
      range: {
        from: ranges[0].range.from,
        to: ranges[ranges.length - 1].range.to,
      },
    };
    mergedHighlights[commentId] = [mergedRange];
  });

  const transformedData = flatMap(
    Object.entries(mergedHighlights),
    ([commentId, highlights]) => {
      return highlights.map((highlight) => {
        const { content, range } = highlight;
        return { commentId, range };
      });
    }
  );

  const commentIdsArray = transformedData.map(({ commentId }) => commentId);

  const commentsForAnswer = comments.filter(
    (comment) => comment.questionSerialNumber === answer.serialNumber
  );
  const missingComments = filter(
    commentsForAnswer,
    (comment) => !includes(commentIdsArray, comment.id)
  );

  const missingCommentsWithZeroRange = map(missingComments, (comment) => ({
    commentId: comment.id,
    range: { from: 0, to: 0 },
  }));

  const finalData = transformedData.concat(missingCommentsWithZeroRange);

  const promises = finalData.map(({ commentId, range }) => {
    return updateFeedbackRange(submission.id, commentId, range).catch(
      (error) => {
        console.error(
          `Failed to update feedback range for commentId ${commentId}:`,
          error
        );
        // Returning null or a specific error object here, depending on how you want to handle this in the subsequent processing
        return null;
      }
    );
  });

  Promise.all(promises).then((results) => {
    // Check if there were any errors
    const hadErrors = results.some((result) => result === null);

    getComments(submission.id).then((cmts) => {
      setComments(cmts.filter((c) => c.type !== 'MARKING_CRITERIA'));
      handleChangeText('All changes saved', true);
      if (hadErrors) {
        console.log('Some changes could not be saved');
      }
    });
  });
}
