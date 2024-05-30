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
