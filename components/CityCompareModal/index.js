import React from "react";
import Modal from "react-awesome-modal";
import ReactTimeAgo from "react-time-ago/commonjs/ReactTimeAgo";
import { getAQIStandard, getFormattedAQI } from "../../utils";
import dynamic from "next/dynamic";
import Live from "../Live";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function CityModal({ visible, hide, city = {} }) {
  const [aqiBase, aqiDecimal] = getFormattedAQI(city.aqi);

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {},
  };

  const series = [
    {
      name: "AQI",
      data: city.history,
    },
  ];

  return (
    <Modal visible={visible} width="90%" height="80%" onClickAway={hide}>
      <div className="p-5">
        <div className="mb-3">
          <span className="text-2xl">{city.city}</span>
        </div>

        <div className={"text-" + getAQIStandard(city.aqi).bgColor}>
          <span className="text-6xl">{aqiBase}</span>
          <span className="text-2xl">.{aqiDecimal}</span>
        </div>

        <div className="mt-5 border">
          <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height="300px"
          />
        </div>

        <div className="text-xs mt-2 flex justify-between items-end">
          <Live />

          <div>
            <span>Last updated: </span>
            <span className="text-gray-600">
              <ReactTimeAgo
                date={city.date || new Date().getTime()}
                locale="en-US"
              />
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CityModal;
