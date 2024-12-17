import { getUserId } from '../../userLocalDetails';

export const isShowLikeCancelButton = (comment, pageMode) => {
  return (
    getUserId() === comment.reviewerId &&
    comment.type !== 'FOCUS_AREA' &&
    pageMode !== 'CLOSED'
  );
};
