import { useState, useEffect, useContext } from "react"
import { FeedbackContext } from "../../FeedbacksRoot/FeedbackContext"
import { isNullOrEmpty } from "../../../../utils/arrays"

export function useMarkingCriteria(QuestionIndex, submission) {
  const { markingCriteriaFeedback } = useContext(FeedbackContext)
  const [markingCriteriaFromSubmission, setMarkingCriteriaFromSubmission] = useState()

  useEffect(() => {
    const markingCriteriaFromSubmission = {
      questionSerialNumber: QuestionIndex + 1,
      feedback: "Marking Criteria Feedback",
      range: { from: 0, to: 0 },
      type: "MARKING_CRITERIA",
      replies: [],
      sharedWithStudents: [],
      markingCriteria: submission?.assignment?.questions[QuestionIndex]?.markingCriteria,
    }

    setMarkingCriteriaFromSubmission(markingCriteriaFromSubmission)
    if (!isNullOrEmpty(markingCriteriaFeedback)) {
      const submitedMarkingCriteria = markingCriteriaFeedback?.find(
        (markingCriteria) => markingCriteria?.questionSerialNumber === QuestionIndex + 1,
      )

      if (submitedMarkingCriteria) {
        setMarkingCriteriaFromSubmission(submitedMarkingCriteria)
      }
    }
  }, [QuestionIndex, markingCriteriaFeedback])

  const handleRubricsChange = (criteriaSerialNumber, selectedLevel) => {
    setMarkingCriteriaFromSubmission((prevMarkingCriteria) => ({
      ...prevMarkingCriteria,
      markingCriteria: {
        ...prevMarkingCriteria.markingCriteria,
        criterias: prevMarkingCriteria.markingCriteria.criterias.map((criteria, criteriaIndex) => {
          if (criteriaIndex === criteriaSerialNumber) {
            return {
              ...criteria,
              selectedLevel: selectedLevel,
            }
          }
          return criteria
        }),
      },
    }))
  }

  const handleStrengthndTargetChange = (strengthsAndTargets, index, type) => {
    const seletedItem = strengthsAndTargets[type][index]
    const selectedStrengths = markingCriteriaFromSubmission?.markingCriteria?.selectedStrengths || []
    const selectedTargets = markingCriteriaFromSubmission?.markingCriteria?.selectedTargets || []

    if (type === "strengths") {
      const newSelectedStrengths = updateSelectedItems(selectedStrengths, seletedItem, strengthsAndTargets.title)
      setMarkingCriteriaFromSubmission((prevMarkingCriteria) => ({
        ...prevMarkingCriteria,
        markingCriteria: {
          ...prevMarkingCriteria.markingCriteria,
          selectedStrengths: newSelectedStrengths,
        },
      }))
    } else if (type === "targets") {
      const newSelectedTargets = updateSelectedItems(selectedTargets, seletedItem, strengthsAndTargets.title)
      setMarkingCriteriaFromSubmission((prevMarkingCriteria) => ({
        ...prevMarkingCriteria,
        markingCriteria: {
          ...prevMarkingCriteria.markingCriteria,
          selectedTargets: newSelectedTargets,
        },
      }))
    }
  }

  const updateSelectedItems = (selectedItems, newItem, criteriaTitle) => {
    const existingItem = selectedItems.find((item) => item.attribute === newItem)
    if (existingItem) {
      return selectedItems.filter((item) => item.attribute !== newItem)
    } else {
      return [...selectedItems, { id: selectedItems.length + 1, attribute: newItem, criteria: criteriaTitle }]
    }
  }

  return {
    markingCriteriaFromSubmission,
    handleRubricsChange,
    handleStrengthndTargetChange,
  }
}

