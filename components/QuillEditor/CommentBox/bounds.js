export const adjustPositionsForSelectedComment = (editor, groupedComments, selectedCommentId, spacing = 10) => {
  if (!selectedCommentId) {
    return groupedComments;
  }

  const selectedCommentIndex = groupedComments.findIndex(comment => comment.id === selectedCommentId);
  if (selectedCommentIndex === -1) {
    console.error(`Selected comment with ID ${selectedCommentId} not found.`);
    return groupedComments;
  }

  const selectedComment = groupedComments[selectedCommentIndex];
  const selectedCommentTopPosition = getBoundsForComment(editor, selectedComment)?.top || 0;
  selectedComment.topPosition = selectedCommentTopPosition;

  let lastBottomPosition = selectedCommentTopPosition + selectedComment.height + spacing;

  for (let i = selectedCommentIndex + 1; i < groupedComments.length; i++) {
    const comment = groupedComments[i];
    const desiredTop = getBoundsForComment(editor, comment)?.top || 0;

    comment.topPosition = Math.max(desiredTop, lastBottomPosition);
    lastBottomPosition = comment.topPosition + comment.height + spacing;
  }

  lastBottomPosition = selectedCommentTopPosition;
  for (let i = selectedCommentIndex - 1; i >= 0; i--) {
    const comment = groupedComments[i];
    const desiredTop = getBoundsForComment(editor, comment)?.top || 0;
    
    comment.topPosition = Math.min(desiredTop, lastBottomPosition - comment.height - spacing);
    lastBottomPosition = comment.topPosition;
  }

  const adjustedComments = groupedComments.sort((a, b) => a.topPosition - b.topPosition);

  return adjustedComments;
};

export const getBounds = (editor, comments) => {
  let lastCommentBottomPosition = 0;

  const groupedComments = comments
    .filter(comment => comment !== null)
    .sort((a, b) => a.range.from - b.range.from)
    .map(comment => {
      const boundsIs = getBoundsForComment(editor, comment);
      let topPosition = boundsIs?.top || 0;

      topPosition = Math.max(topPosition, lastCommentBottomPosition);
      lastCommentBottomPosition = topPosition + comment.height;

      return { ...comment, topPosition };
    });

  return groupedComments;
};

function getBoundsForComment(editor, comment) {
  if (editor) {
    const contentLength = editor.getLength();

    let from = parseInt(comment.range.from, 10);
    let to = parseInt(comment.range.to, 10);

    // Validate that 'from' and 'to' are valid numbers and non-negative
    if (isNaN(from) || isNaN(to) || from < 0 || to < 0) {
      console.error('Invalid range values:', comment.range);
      return null;
    }

    // Ensure 'from' is less than or equal to 'to'
    if (from > to) {
      [from, to] = [to, from]; // Swap values
    }

    // Clamp 'to' to the content length
    to = Math.min(to, contentLength);

    const length = to - from;

    if (length <= 0) {
      console.error('Computed length is zero or negative:', length);
      return null;
    }

    return editor.getBounds(from, length);
  }
  return null;
}

export const withHeights = (comments) => {
  return comments?.map((comment, index) => {
    const element = document.getElementById(`comment-${comment.id}`);

    const height = element ? element.clientHeight : 0;

    return { ...comment, height: height };
  });
};
