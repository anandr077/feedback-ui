export const adjustPositionsForSelectedComment = (editor, groupedComments, selectedCommentId) => {
  if (!selectedCommentId) {
    return groupedComments;
  }

  console.log("Grouped Comments: ", groupedComments.map(c => ({ id: c.id, topPosition: c.topPosition })));
  console.log("Selected Comment ID: ", selectedCommentId);

  const selectedCommentIndex = groupedComments.findIndex(comment => comment.id === selectedCommentId);
  if (selectedCommentIndex === -1) {
    console.error(`Selected comment with ID ${selectedCommentId} not found.`);
    return groupedComments;
  }

  const selectedComment = groupedComments[selectedCommentIndex];
  const boundsIs = getBoundsForComment(editor, selectedComment);
  const selectedCommentTopPosition = boundsIs?.top || 0;
  selectedComment.topPosition = selectedCommentTopPosition;

  // Split the comments into before and after the selected comment
  const beforeComments = groupedComments.slice(0, selectedCommentIndex);
  const afterComments = groupedComments.slice(selectedCommentIndex + 1);

  // Adjust positions for the before group
  for (let i = beforeComments.length - 1; i >= 0; i--) {
    const comment = beforeComments[i];
    const bounds = getBoundsForComment(editor, comment);
    const desiredTop = bounds?.top || 0;
    const nextComment = i < beforeComments.length - 1 ? beforeComments[i + 1] : selectedComment;

    if (comment.topPosition + comment.height > nextComment.topPosition) {
      comment.topPosition = Math.max(nextComment.topPosition - comment.height, 0);
    } else if (comment.topPosition > desiredTop) {
      comment.topPosition = Math.min(comment.topPosition, nextComment.topPosition - comment.height);
    }
  }

  // Adjust positions for the after group
  let lastPosition = selectedCommentTopPosition + selectedComment.height;
  for (let i = 0; i < afterComments.length; i++) {
    const comment = afterComments[i];
    const bounds = getBoundsForComment(editor, comment);
    const desiredTop = bounds?.top || 0;

    if (comment.topPosition < lastPosition) {
      comment.topPosition = lastPosition;
    } else if (comment.topPosition > desiredTop) {
      comment.topPosition = Math.max(lastPosition, desiredTop);
    }
    lastPosition = comment.topPosition + comment.height;
  }

  // Combine the groups with the selected comment in the middle
  const adjustedComments = [...beforeComments, selectedComment, ...afterComments];

  const sortedAdjustedComments = adjustedComments.sort((a, b) => a.topPosition - b.topPosition);

  console.log("Adjusted Comments: ", sortedAdjustedComments.map(c => ({ id: c.id, topPosition: c.topPosition })));

  return sortedAdjustedComments;
};







export const getBounds = (
  editor,
  comments,
) => {
  let lastCommentBottomPosition = 0;

  const groupedComments = comments
    .filter((comment) => comment !== null)
    ?.sort((a, b) => a.range.from - b.range.from)
    .map((comment, index) => {
      //if (!editorRef.current) return null;

      const boundsIs = getBoundsForComment(editor, comment);


      let topPosition = boundsIs?.top || 0;

      if (topPosition < lastCommentBottomPosition) {
        topPosition = lastCommentBottomPosition;
      }

      lastCommentBottomPosition = topPosition + comment.height;

      return { ...comment, topPosition: topPosition };
    })
    .filter((comment) => comment !== null)
    ;

  let groupedCommentsWithGap = [];
  let currentGroup = [];

  groupedComments?.forEach((comment, index) => {
    if (currentGroup.length === 0) {
      currentGroup.push(comment);
    } else {
      const lastComment = currentGroup[currentGroup.length - 1];
      const lastCommentBottomPosition =
        lastComment?.topPosition||0 + comment.height;

      if (comment.topPosition < lastCommentBottomPosition) {
        groupedCommentsWithGap.push(currentGroup);
        currentGroup = [comment];
      } else {
        currentGroup.push(comment);
      }
    }
  });

  if (currentGroup.length > 0) {
    groupedCommentsWithGap.push(currentGroup);
  }
  return groupedCommentsWithGap;
};

function getBoundsForComment(editor, comment) {
  const length = comment.range.to - comment.range.from;
  if (editor) {
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
