import React, { PropsWithRef } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Modal } from "antd";
import useHashModal from "@/hooks/useRouterModal";

type ConfirmProps = {
  title: string;
  message: string;
  isAppendHistory: boolean;
  onConfirm: any;
  okLabel: string;
  cancelLabel: string;
  disabled?: boolean;
};

const Confirm = NiceModal.create(
  ({ title, message, onConfirm }: PropsWithRef<ConfirmProps>) => {
    const modal = useHashModal({
      name: "confirm",
    });

    async function handleConfirm(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();

      console.log("실행하나요?");
      onConfirm();
      console.log("실행했음");
      modal.resolve(true);
      await modal.close();
    }

    async function handleClose(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();

      modal.resolve(false);
      await modal.close();
    }

    console.log("modal visible", modal.visible);
    return (
      <Modal
        title={title}
        open={modal.visible}
        onOk={handleConfirm}
        onCancel={handleClose}
        afterClose={() => modal.remove()}
      >
        {message}
      </Modal>
    );
  },
);
export default Confirm;
