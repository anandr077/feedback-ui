import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

export default function useNavigationBlock() {
  const navigate = useNavigate();
  const unblockRef = useRef(null);

  const [isNavigationBlocked, setIsNavigationBlocked] = useState(false);
  const [pendingLocation, setPendingLocation] = useState(null);

  useEffect(() => {
    unblockRef.current = navigate.block((location) => {
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
  }, [navigate, isNavigationBlocked]);

  const confirmNavigationChange = () => {
    if (unblockRef.current) {
      unblockRef.current();
    }
    if (pendingLocation) {
      navigate(pendingLocation.pathname);
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
