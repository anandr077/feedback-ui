import _ from "lodash"

export function isShowGetStartedButton(jeddaiFeedbackReceivedAt, submissionType) {
  if (submissionType === 'DOCUMENT') {
    return false
  }
  if (jeddaiFeedbackReceivedAt ) {
    return false
  }
  return true
}
export function jeddAiReviewText(submissionType) {
  if (submissionType === 'DOCUMENT') {
    return <ul>
      <li>
        Submit a draft to JeddAI for instant feedback
      </li>
      <li>
        JeddAI offers practical and reliable feedback on your work by using teacher-trained marking models
      </li>
      <li>
        Remember to look at both the specific suggestions and overall comments to maximise your results
      </li>
    </ul>
  }
  return <>
    <ul>
      <li>
        ⁠Get JeddAI to provide instant marking suggestions for this draft
      </li>
      <li>
        ⁠Click the ‘Start Marking’ button below and then wait up to 60
        seconds for JeddAI’s suggestions, including specific annotations and
        overall feedback.
      </li>
      <li>
        ⁠If you have already begun marking, your existing annotations will
        remain, however you’re overall comments and rubric selections will
        be overridden.
      </li>
      <li>
        ⁠JeddAI will not complete any 'Strengths or Targets' marking
        templates, only Rubrics.
      </li>
      <li>
        ⁠The page will automatically refresh when the AI marking is
        completed.
      </li>
      <li>You can edit, delete or supplement any of the AI suggestions.</li>
      <li>
        Click ‘Submit Feedback’ when you are ready to send the feedback to
        the student.
      </li>
    </ul>
  </>
}

