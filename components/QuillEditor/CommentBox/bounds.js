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
  const boundsIs = getBoundsForComment(editor, selectedComment);
  const selectedCommentTopPosition = boundsIs?.top || 0;
  selectedComment.topPosition = selectedCommentTopPosition;

  // Adjust positions for comments before the selected comment
  for (let i = selectedCommentIndex - 1; i >= 0; i--) {
    const comment = groupedComments[i];
    const bounds = getBoundsForComment(editor, comment);
    const desiredTop = bounds?.top || 0;

    const nextComment = i < selectedCommentIndex - 1 ? groupedComments[i + 1] : selectedComment;
    const nextCommentTop = nextComment.topPosition;

    if (comment.topPosition + comment.height + spacing > nextCommentTop) {
      comment.topPosition = nextCommentTop - comment.height - spacing;
    } else {
      comment.topPosition = Math.min(desiredTop, nextCommentTop - comment.height - spacing);
    }
  }

  // Adjust positions for comments after the selected comment
  let lastBottomPosition = selectedCommentTopPosition + selectedComment.height + spacing;
  for (let i = selectedCommentIndex + 1; i < groupedComments.length; i++) {
    const comment = groupedComments[i];
    const bounds = getBoundsForComment(editor, comment);
    const desiredTop = bounds?.top || 0;

    if (comment.topPosition < lastBottomPosition) {
      comment.topPosition = lastBottomPosition;
    } else {
      comment.topPosition = Math.max(lastBottomPosition, desiredTop);
    }
    lastBottomPosition = comment.topPosition + comment.height + spacing;
  }

  const adjustedComments = groupedComments.sort((a, b) => a.topPosition - b.topPosition);

  console.log("Adjusted Comments: ", adjustedComments.map(c => ({ id: c.id, topPosition: c.topPosition, height: c.height })));

  return adjustedComments;
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
