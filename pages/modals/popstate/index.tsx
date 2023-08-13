import React, { ReactElement } from "react";
import usePopstateModal from "@/hooks/usePopstateModal";

function Page(): ReactElement {
  const {
    handleCloseModal,
    handleOpenModal,
    isOpen: isOpenPopstateModal,
  } = usePopstateModal("popstate-modal");
  return (
    <div>
      <button onClick={() => handleOpenModal()}>PopState 모달 열기</button>
      {isOpenPopstateModal && (
        <div>
          popState modal!!
          <button onClick={() => handleCloseModal()}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default Page;
