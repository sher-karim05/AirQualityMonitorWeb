import React from "react";
import CardContainer from "../../containers/CardContainer";

function BrandBox() {
  return (
    <div className="flex flex-col h-screen sticky left-0 top-0">
      <div className="flex-1 bg-gray-200 rounded-3xl rounded-tl-none rounded-r-none"></div>

      <div className="bg-gray-200">
        <CardContainer className="bg-primary rounded-3xl rounded-l-none text-white p-10">
          <div className="text-3xl">
            Air Quality <br /> Monitor
          </div>
        </CardContainer>
      </div>

      <div className="flex-1 bg-gray-200 rounded-3xl rounded-bl-none rounded-r-none"></div>
    </div>
  );
}

export default BrandBox;
