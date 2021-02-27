import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';

import styles from '../styles/components/Input.module.css';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.inputContainer}>
      <input ref={inputRef} {...rest} />
      <button type="submit">
        <img src="/icons/arrow-right.svg" alt="Seta para diretira" />
      </button>
    </div>
  );
}

export default Input;