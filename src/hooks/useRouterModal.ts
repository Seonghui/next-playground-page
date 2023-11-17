import { useModal } from "@ebay/nice-modal-react";
import { useEffect } from "react";

export interface UseHashModalProps {
  name: string;
  isAppendHistory?: boolean;
}

function useHashModal({ name }: UseHashModalProps) {
  const modal = useModal();

  useEffect(() => {
    if (modal.visible) {
      const newUrl = `?modal=${name}`;
      window.history.pushState(
        {
          ...window.history.state,
          url: newUrl,
        },
        "",
        newUrl,
      );
    } else {
      window.addEventListener("popstate", () => modal.hide());
    }

    return () => {
      window.removeEventListener("popstate", () => modal.remove());
    };
  }, [modal, name]);

  async function close() {
    history.back();
  }

  return {
    ...modal,
    close,
  };
}

export default useHashModal;
