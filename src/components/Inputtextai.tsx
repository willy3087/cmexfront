import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import AiIcon from "./AiIcon";

interface AppleStyleInputProps {
  width?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  readOnly?: boolean;
}

const AppleStyleInput: React.FC<AppleStyleInputProps> = ({
  width,
  placeholder = "Descreva o seu produto",
  value,
  onChange,
  onKeyDown,
  onBlur,
  isLoading = false,
  readOnly = false,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Impede o comportamento padrão de recarregar a página
      if (onKeyDown) {
        onKeyDown(e); // Chama a função onKeyDown passada como prop
      }
    }
  };

  return (
    <div
      className={`${isLoading ? "input" : "input-wrapper"} ${
        !isLoading ? "border border-blue-500" : ""
      }`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
        readOnly={readOnly}
      />
      {isLoading && <FaSpinner className="loading-icon" />}
    </div>
  );
};

export default AppleStyleInput;
