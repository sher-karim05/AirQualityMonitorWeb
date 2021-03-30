import Image from "next/image";
import React from "react";

function ActionButton({ action, title, image }) {
  return (
    <div
      className="rounded-full bg-white w-10 h-10 mr-3 border-2 border-primary-light overflow-hidden p-2 cursor-pointer transform hover:scale-110 transition-all"
      title={title}
      onClick={action}
    >
      <Image src={image} width="100" height="100" />
    </div>
  );
}

function ActionBar({ graphAction, compareAction }) {
  return (
    <div className="absolute bottom-0 ml-5 flex">
      <ActionButton
        action={graphAction}
        title="View Graph"
        image="/assets/images/graph.png"
      />

      <ActionButton
        action={compareAction}
        title="Select for Compare"
        image="/assets/images/compare.png"
      />
    </div>
  );
}

export default ActionBar;
