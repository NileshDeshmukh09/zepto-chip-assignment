import React from "react";
// import styles from "./Chip.module.scss";
import { ChipProps } from "../types";

const Chip: React.FC<ChipProps> = ({
  label,
  logo,
  onRemove,
  isHighlighted,
}): JSX.Element => {
  return (
    <div
      className={`flex items-center p-2 m-2 bg-gray-200 rounded-full text-sm leading-6 `}
      style={{ border: isHighlighted ? "2px solid blue" : "none" }}
    >
      <img src={logo} alt={label} className="w-8 h-8 rounded-full mr-2" />
      <span className="mr-2 ml-1">{label}</span>
      <button
        className="cursor-pointer bg-transparent border-none text-gray-700 text-base"
        onClick={onRemove}
        aria-label="Remove"
      >
        ✕
      </button>
    </div>
  );
};

export default Chip;
