import { useEffect, useCallback } from "react";

export function useOutsideAlerter(ref, onOutsideClick) {
  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    },
    [ref, onOutsideClick]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
}