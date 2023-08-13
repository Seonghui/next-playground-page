import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useQueryModal(key: string) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(router.query.modal === key);
  }, [router]);

  const handleOpenModal = async () => {
    await router.push({
      pathname: router.pathname,
      query: { ...router.query, modal: key },
    });
  };

  const handleCloseModal = () => {
    router.back();
  };

  return { isOpen, handleOpenModal, handleCloseModal };
}

export default useQueryModal;
