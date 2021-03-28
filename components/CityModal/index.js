import React from "react";
import Modal from "react-awesome-modal";
import ReactTimeAgo from "react-time-ago/commonjs/ReactTimeAgo";
import { getAQIStandard, getFormattedAQI } from "../../utils";
import { useModal } from "./hooks";

function CityModal({ visible, hide, city = {} }) {
  const [aqiBase, aqiDecimal] = getFormattedAQI(city.aqi);

  return (
    <Modal visible={visible} width="90%" height="80%" onClickAway={hide}>
      <div>
        <div className="text-2xl">{city.city}</div>
        <div className="text-md">
          <ReactTimeAgo
            date={city.date || new Date().getTime()}
            locale="en-US"
          />
        </div>
        <div className={"text-" + getAQIStandard(city.aqi).bgColor}>
          <span className="text-4xl">{aqiBase}</span>
          <span className="text-md">.{aqiDecimal}</span>
        </div>
      </div>
    </Modal>
  );
}

export default CityModal;
export { useModal };
