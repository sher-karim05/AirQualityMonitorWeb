import clsx from "clsx";
import React from "react";

function Loader({ className }) {
  return (
    <div className={clsx("text-center blink text-3xl", className)}>
      Loading...
    </div>
  );
}

export default Loader;
