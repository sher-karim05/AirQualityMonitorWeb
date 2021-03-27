import React from "react";
import ReactTimeAgo from "react-time-ago";
import CardContainer from "../../containers/CardContainer";

function CityBox({ title, aqi, date }) {
  const [aqiBase, aqiDecimal] = (aqi + "").split(".");

  return (
    <div className="lg:w-1/3 p-5">
      <CardContainer className="w-full bg-white border-2 border-primary-light">
        <div className="flex justify-between">
          <div>
            <div className="text-xl">{title}</div>
            <div className="text-xs text-gray-400">
              <ReactTimeAgo date={date} locale="en-US" />
            </div>
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
