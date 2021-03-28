import React from "react";
import Modal from "react-awesome-modal";
import ReactTimeAgo from "react-time-ago/commonjs/ReactTimeAgo";
import Chart from "react-apexcharts";
import { getAQIStandard, getFormattedAQI } from "../../utils";

function CityModal({ visible, hide, city = {} }) {
  const [aqiBase, aqiDecimal] = getFormattedAQI(city.aqi);

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "AQI",
      data: city.history,
    },
  ];

  console.log(city.aqi, city.history);

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

        <div className="mt-5 border">
          <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height="300px"
          />
        </div>
      </div>
    </Modal>
  );
}

export default CityModal;
