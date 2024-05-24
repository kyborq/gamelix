import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useOnClickOutside, useScrollLock } from "usehooks-ts";

import { TModalState } from "../../hooks/useModal";
import styles from "./Modal.module.css";

type Props = {
  state: TModalState;
  title: string;
  children?: React.ReactNode;
};

export const Modal = ({ state, title, children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { unlock } = useScrollLock();

  const handleClose = () => {
    state.close();
    unlock();
  };

  useOnClickOutside(modalRef, handleClose);

  return (
    <AnimatePresence>
      {state.visible && (
        <motion.div
          className={styles.Overlay}
          initial={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
          exit={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
        >
          <motion.div
            ref={modalRef}
            className={styles.Modal}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className={styles.Header}>
              <span className={styles.Title}>{title}</span>
            </div>
            <div className={styles.Content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
