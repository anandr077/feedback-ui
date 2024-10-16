export function jeddAiReviewText(showJeddaiFeedbackReceivedAt) {
  return (
    <>
      {showJeddaiFeedbackReceivedAt ? (
        `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      `
      ) : (
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
      )}
    </>
  );
}
