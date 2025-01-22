import { useState } from "react"

export function useMarkingCriteriaPopup() {
  const [isShowMarkingCrteriaPopUp, setShowMarkingCrteriaPopUp] = useState(false)

  const openPopup = () => setShowMarkingCrteriaPopUp(true)
  const closePopup = () => setShowMarkingCrteriaPopUp(false)

  return {
    isShowMarkingCrteriaPopUp,
    setShowMarkingCrteriaPopUp,
    openPopup,
    closePopup,
  }
}

