import React, { ReactElement } from "react";
import useQueryModal from "@/hooks/useQueryModal";

function Page(): ReactElement {
  const { isOpen, handleOpenModal, handleCloseModal } = useQueryModal("test");
  return (
    <div>
      <button onClick={() => handleOpenModal()}>query 모달 열기</button>
      {isOpen && (
        <div>
          popState modal!!
          <button onClick={() => handleCloseModal()}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default Page;
