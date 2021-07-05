import React from "react";
import Loading from "./Loading";

interface ButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "sq" | "sq-sm" | "";
  loading?: boolean;

  onClick?: () => void;
}

const Button = ({
  text,
  className = "",
  size = "",
  loading = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`c-button d-inline-flex align-items-center justify-content-center -${size} ${className} ${
        loading ? "-loading" : ""
      }`}
    >
      <strong>{text}</strong>
      <Loading />
    </button>
  );
};

export default Button;
