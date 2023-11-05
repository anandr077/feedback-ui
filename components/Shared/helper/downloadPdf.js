import { downloadSubmission } from '../../../service';

export const downloadSubmissionPdf = async (submissionId) => {
  await downloadSubmission(submissionId);
};
