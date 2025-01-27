import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useNavigationBlock() {
  const history = useHistory();
  const unblockRef = useRef(null);

  const [isChanged, setIsChanged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingLocation, setPendingLocation] = useState(null);

  useEffect(() => {
    unblockRef.current = history.block((location) => {
      if (isChanged) {
        setPendingLocation(location);
        setIsOpen(true);
        return false;
      }
      return true;
    });

    return () => {
      if (unblockRef.current) {
        unblockRef.current();
      }
    };
  }, [history, isChanged]);

  function confirmButtonAction() {
    if (unblockRef.current) {
      unblockRef.current();
    }
    if (pendingLocation) {
      history.push(pendingLocation.pathname);
    }
  }

  function cancelPopup() {
    setIsOpen(false);
    setPendingLocation(null);
  }

  return {
    isChanged,
    setIsChanged,
    isOpen,
    confirmButtonAction,
    cancelPopup,
  };
}
