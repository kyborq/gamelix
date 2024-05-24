import { ChangeEventHandler, forwardRef, Ref } from "react";

import styles from "./Field.module.css";

type Props = {
  label?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  name?: string;
  value?: string;
  obscure?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Field = forwardRef(
  (
    { label, icon, onChange, placeholder, value, obscure, name }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label className={styles.Field}>
        {!!label && <span className={styles.Label}>{label}</span>}
        <div className={styles.Container}>
          {icon}
          <input
            ref={ref}
            type={!obscure ? "text" : "password"}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.Input}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
      </label>
    );
  }
);
