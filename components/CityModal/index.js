import React from "react";
import Modal from "react-awesome-modal";
import ReactTimeAgo from "react-time-ago/commonjs/ReactTimeAgo";
import { getAQIStandard, getFormattedAQI } from "../../utils";

function CityModal({ visible, hide, city = {} }) {
  const [aqiBase, aqiDecimal] = getFormattedAQI(city.aqi);

  return (
    <Modal visible={visible} width="90%" height="80%" onClickAway={hide}>
      <div className="p-5">
        <div className={"text-" + getAQIStandard(city.aqi).bgColor}>
          <span className="text-5xl">{aqiBase}</span>
          <span className="text-xl">.{aqiDecimal}</span>
        </div>

        <div className="mt-2">
          <span className="text-2xl">{city.city}</span>
          <span className="text-xs text-gray-600 ml-2">
            <ReactTimeAgo
              date={city.date || new Date().getTime()}
              locale="en-US"
            />
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default CityModal;
