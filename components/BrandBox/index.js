import React from "react";
import CardContainer from "../../containers/CardContainer";
import AQIStandard from "../AQIStandard";
import { AQI_STANDARDS } from "../AQIStandard/data";

function BrandBox() {
  return (
    <div className="flex flex-col md:h-screen md:sticky left-0 top-0">
      <div className="bg-gray-200 rounded-3xl rounded-tl-none rounded-r-none pt-10"></div>

      <div className="bg-gray-200">
        <CardContainer className="bg-primary rounded-3xl rounded-l-none text-white p-10 mr-10 md:mr-0">
          <div className="text-md mb-2">
            Live <span className="text-red-600">&bull;</span>
          </div>
          <div className="text-3xl font-bold">Air Quality Monitor</div>
        </CardContainer>
      </div>

      <div className="flex-1 bg-gray-200 rounded-3xl rounded-bl-none rounded-r-none p-10 pb-0">
        <div className="flex flex-wrap md:max-w-xs">
          {Object.keys(AQI_STANDARDS).map((standard, index) => (
            <AQIStandard
              key={index}
              className="my-1 ml-0 mr-2"
              type={standard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandBox;
