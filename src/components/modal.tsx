import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useKeyPress } from '@/hooks/use-key-press';
import { useClickOutside } from '@/hooks/use-click-outside';

interface IProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  escapeToClose?: boolean;
  outsideToClose?: boolean;
}

export default function Modal({
  children,
  showModal = false,
  setShowModal,
  escapeToClose = true,
  outsideToClose = true,
}: IProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const escapePressed = useKeyPress('Escape');

  const handleEscapePress = () => {
    if (showModal && escapeToClose && escapePressed) setShowModal(false);
  };
  const handleOutsideClick = () => {
    if (showModal && outsideToClose) setShowModal(false);
  };

  useEffect(() => handleEscapePress(), [escapePressed]);
  useClickOutside(modalRef, handleOutsideClick);

  return (
    <>
      {showModal && (
        <>
          <div className="fixed inset-0 z-40 hidden min-h-screen items-center justify-center md:flex">
            <div
              ref={modalRef}
              className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-xl"
            >
              {children}
            </div>
          </div>
          <div
            data-testid={'modal-backdrop'}
            className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur"
          />
        </>
      )}
    </>
  );
}
