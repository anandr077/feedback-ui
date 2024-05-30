export const getBounds = (
  editor,
  editorRef,
  comments,
  selectedComment,
  commentHeights
) => {
  let lastCommentBottomPosition = 0;

  const groupedComments = comments
    ?.sort((a, b) => a.range.from - b.range.from)
    .map((comment, index) => {
      //if (!editorRef.current) return null;

      const boundsIs = boundsFunc(editor, comment);

      if (!boundsIs) {
        console.error('Bounds not found for comment:', comment);
        return null;
      }

      let topPosition = boundsIs.top;

      if (topPosition < lastCommentBottomPosition) {
        topPosition = lastCommentBottomPosition;
      }

      lastCommentBottomPosition = topPosition + commentHeights[index];

      return { ...comment, topPosition: topPosition };
    })
    .filter((comment) => comment !== null);

  let groupedCommentsWithGap = [];
  let currentGroup = [];

  groupedComments?.forEach((comment, index) => {
    if (currentGroup.length === 0) {
      currentGroup.push(comment);
    } else {
      const lastComment = currentGroup[currentGroup.length - 1];
      const lastCommentBottomPosition =
        lastComment.topPosition + commentHeights[index];

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

  console.log('the groupedCommentsWithGap', groupedCommentsWithGap)

  return groupedCommentsWithGap;
};

function boundsFunc(editor, comment) {
  const length = comment.range.to - comment.range.from;
  let boundsIs;



  if (editor) {
    boundsIs = editor.getBounds(comment.range.from, length);
  }

  return boundsIs
}



