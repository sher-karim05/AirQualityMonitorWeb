import clsx from "clsx";
import React from "react";
import { AQI_STANDARDS } from "../../utils/variables";

function AQIStandard({ className, type }) {
  const { label, bgColor, color } = AQI_STANDARDS[type];
  return (
    <span
      className={clsx(
        "py-1 px-3 rounded-3xl text-center text-xs inline-block",
        "bg-" + bgColor,
        "text-" + color,
        className
      )}
    >
      {label}
    </span>
  );
}

export default AQIStandard;
