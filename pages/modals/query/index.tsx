import React, { ReactElement } from "react";
import useQueryModal from "@/hooks/useQueryModal";
import { Modal } from "antd";

function Page(): ReactElement {
  const { isOpen, handleOpenModal, handleCloseModal } = useQueryModal("test");
  return (
    <div>
      <button onClick={() => handleOpenModal()}>query 모달 열기</button>
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
