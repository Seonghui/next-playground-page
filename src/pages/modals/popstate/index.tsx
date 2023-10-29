import React, { ReactElement } from "react";
import usePopstateModal from "@/hooks/usePopstateModal";
import { Modal } from "antd";

function Page(): ReactElement {
  const { handleCloseModal, handleOpenModal, isOpen } =
    usePopstateModal("popstate-modal");
  return (
    <div>
      <button onClick={() => handleOpenModal()}>PopState 모달 열기</button>
      <Modal
        title="query 모달 열기"
        centered
        open={isOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}

export default Page;
