import React from "react";
import CardContainer from "../../containers/CardContainer";

function CityBox({ title, aqi }) {
  const [aqiBase, aqiDecimal] = (aqi + "").split(".");

  return (
    <div className="w-1/3 p-5">
      <CardContainer className="bg-white border-2 border-primary-light">
        <div className="flex justify-between">
          <div>
            <div className="text-xl">{title}</div>
            <div className="text-xs text-gray-400">a min ago</div>
          </div>

          <div>
            <span className="text-4xl">{aqiBase}</span>
            <span className="text-md text-gray-600">.{aqiDecimal}</span>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

export default CityBox;
