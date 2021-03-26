import clsx from "clsx";
import React from "react";

function CardContainer({ className, children }) {
  return <div className={clsx("p-5 rounded-md", className)}>{children}</div>;
}

export default CardContainer;
