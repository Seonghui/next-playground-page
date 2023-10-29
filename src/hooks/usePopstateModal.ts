import { useEffect, useState } from "react";

function usePopstateModal(id: string) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    history.back();
  };
  useEffect(() => {
    if (isOpen) {
      history.pushState({ page: id }, document.title);
    } else {
      window.addEventListener("popstate", () => setIsOpen(false));
    }
    return () => {
      window.removeEventListener("popstate", () => setIsOpen(false));
    };
  }, [isOpen]);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
}

export default usePopstateModal;
