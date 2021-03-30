import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import CardContainer from "../../containers/CardContainer";
import { getFormattedAQI, getAQIStandard } from "../../utils";
import Image from "next/image";
import CityModal from "../CityModal";
import ActionBar from "./ActionBar";

function CityBox({ city, aqi, date, history, selected, selectForCompare }) {
  const [aqiBase, aqiDecimal] = getFormattedAQI(aqi);
  const [visible, setVisible] = useState(false);

  return (
    <div className="lg:w-1/2 xl:w-1/3 p-5 relative">
      <CardContainer className="w-full bg-white border-2 border-primary-light pb-8 hover:shadow-lg transition-all">
        <div className="flex justify-between">
          <div>
            <div className="text-xl">{city}</div>
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

      <ActionBar
        graphAction={() => setVisible(true)}
        compareAction={() => selectForCompare(city)}
        selected={selected}
      />

      <CityModal
        visible={visible}
        hide={() => setVisible(false)}
        city={{ city, aqi, date, history }}
      />
    </div>
  );
}

export default CityBox;
