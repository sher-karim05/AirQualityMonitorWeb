import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import CardContainer from "../../containers/CardContainer";
import { getFormattedAQI, getAQIStandard } from "../../utils";
import Image from "next/image";
import CityModal from "../CityModal";

function CityBox({ city, aqi, date, history }) {
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

      <div
        className="rounded-full bg-white w-10 h-10 absolute bottom-0 ml-5 border-2 border-primary-light overflow-hidden p-2 cursor-pointer transform hover:scale-110 transition-all"
        title="View Graph"
        onClick={() => setVisible(true)}
      >
        <Image src="/assets/images/graph.png" width="100" height="100" />
      </div>

      <CityModal
        visible={visible}
        hide={() => setVisible(false)}
        city={{ city, aqi, date, history }}
      />
    </div>
  );
}

export default CityBox;
