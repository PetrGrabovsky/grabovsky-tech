import { RefObject, useCallback, useEffect } from 'react';

const useOutsideClickHandler = (
  refs: RefObject<HTMLElement>[],
  isOpen: boolean,
  onClose: () => void
) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        isOpen &&
        refs.every(
          (ref) => ref.current && !ref.current.contains(e.target as Node)
        )
      ) {
        onClose();
      }
    },
    [isOpen, onClose, refs]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);
};

export default useOutsideClickHandler;
