import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useNavigationBlock() {
  const history = useHistory();
  const unblockRef = useRef(null);

  const [isNavigationBlocked, setIsNavigationBlocked] = useState(false);
  const [pendingLocation, setPendingLocation] = useState(null);

  useEffect(() => {
    unblockRef.current = history.block((location) => {
      if (isNavigationBlocked) {
        setPendingLocation(location);
        return false;
      }
      return true;
    });

    return () => {
      if (unblockRef.current) {
        unblockRef.current();
      }
    };
  }, [history, isNavigationBlocked]);

  const confirmNavigationChange = () => {
    if (unblockRef.current) {
      unblockRef.current();
    }
    if (pendingLocation) {
      history.push(pendingLocation.pathname);
    }
  };

  const cancelNavigationPopup = () => {
    setPendingLocation(null);
  };

  const isShowNavigationBlockPopup = isNavigationBlocked && pendingLocation;

  return {
    isNavigationBlocked,
    setIsNavigationBlocked,
    isShowNavigationBlockPopup,
    confirmNavigationChange,
    cancelNavigationPopup,
  };
}
