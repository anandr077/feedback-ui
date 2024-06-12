export const adjustPositionsForSelectedComment = (editor, groupedComments, selectedCommentId, spacing = 10) => {
  if (!selectedCommentId) {
    return groupedComments;
  }

  console.log("Grouped Comments: ", groupedComments.map(c => ({ id: c.id, topPosition: c.topPosition, height: c.height })));
  console.log("Selected Comment ID: ", selectedCommentId);

  const selectedCommentIndex = groupedComments.findIndex(comment => comment.id === selectedCommentId);
  if (selectedCommentIndex === -1) {
    console.error(`Selected comment with ID ${selectedCommentId} not found.`);
    return groupedComments;
  }

  const selectedComment = groupedComments[selectedCommentIndex];
  const selectedCommentTopPosition = getBoundsForComment(editor, selectedComment)?.top || 0;
  selectedComment.topPosition = selectedCommentTopPosition;

  let lastBottomPosition = selectedCommentTopPosition + selectedComment.height + spacing;

  // Adjust positions for comments after the selected comment
  for (let i = selectedCommentIndex + 1; i < groupedComments.length; i++) {
    const comment = groupedComments[i];
    const desiredTop = getBoundsForComment(editor, comment)?.top || 0;

    comment.topPosition = Math.max(desiredTop, lastBottomPosition);
    lastBottomPosition = comment.topPosition + comment.height + spacing;
  }

  // Adjust positions for comments before the selected comment
  lastBottomPosition = selectedCommentTopPosition;
  for (let i = selectedCommentIndex - 1; i >= 0; i--) {
    const comment = groupedComments[i];
    const desiredTop = getBoundsForComment(editor, comment)?.top || 0;
    
    comment.topPosition = Math.min(desiredTop, lastBottomPosition - comment.height - spacing);
    lastBottomPosition = comment.topPosition;
  }

  const adjustedComments = groupedComments.sort((a, b) => a.topPosition - b.topPosition);

  console.log("Adjusted Comments: ", adjustedComments.map(c => ({ id: c.id, topPosition: c.topPosition, height: c.height })));

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
    const length = comment.range.to - comment.range.from;
    return editor.getBounds(comment.range.from, length);
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
