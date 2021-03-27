import clsx from "clsx";
import React from "react";
import ReactTimeAgo from "react-time-ago";
import CardContainer from "../../containers/CardContainer";
import { getAQIStandard } from "../../utils";

function CityBox({ title, aqi, date }) {
  const [aqiBase, aqiDecimal] = (aqi + "").split(".");

  return (
    <div className="lg:w-1/2 xl:w-1/3 p-5">
      <CardContainer className="w-full bg-white border-2 border-primary-light">
        <div className="flex justify-between">
          <div>
            <div className="text-xl">{title}</div>
            <div className="text-xs text-gray-400">
              <ReactTimeAgo
                date={date || new Date().getTime()}
                locale="en-US"
                // timeStyle="twitter" // * enable this see that the time is in fact working in the intended way. Its just that the values are updating very frequently that it never reaches to a '1 minute' and thus nothing changes.
              />
            </div>
          </div>

          <div className={"text-" + getAQIStandard(aqi).bgColor}>
            <span className="text-4xl">{aqiBase}</span>
            <span className="text-md">.{aqiDecimal}</span>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

export default CityBox;
