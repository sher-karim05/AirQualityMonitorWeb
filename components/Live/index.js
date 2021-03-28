import clsx from "clsx";
import React from "react";

function Live({ className }) {
  return (
    <div className={clsx("text-md", className)}>
      Live <span className="text-red-600 blink text-xl">&bull;</span>
    </div>
  );
}

export default Live;
