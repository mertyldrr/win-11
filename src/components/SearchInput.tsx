import React, { ChangeEvent, useRef } from "react";
import "./SearchInput.css";

type SearchInputProps = {
  twClassName?: string;
  type?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchInput = (props: SearchInputProps) => {
  const { twClassName, type, value, onChange, onKeyDown } = props;
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
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      onDoubleClick={handleDoubleClick}
    />
  );
};
