import { useState } from "react";

export type TModalState = {
  visible: boolean;
  open: () => void;
  close: () => void;
};

export const useModal = (initialValue?: boolean): TModalState => {
  const [visible, setVisible] = useState(initialValue || false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return {
    visible,
    open,
    close,
  };
};
