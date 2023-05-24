import React, { ChangeEvent, useRef } from "react";
import "./Input.css";

type InputProps = {
  twClassName?: string;
  type?: string;
  defaultValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const { twClassName, type, defaultValue, onChange, onKeyDown } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDoubleClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <input
      className={`${twClassName} search-input-container`}
      type={type}
      autoFocus={true}
      defaultValue={defaultValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      onDoubleClick={handleDoubleClick}
    />
  );
};
