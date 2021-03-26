import React from "react";
import CardContainer from "../../containers/CardContainer";

function CityBox({ title, aqi }) {
  return (
    <div className="w-1/3 p-5">
      <CardContainer className="bg-white shadow-md">
        <div className="text-2xl">{title}</div>
      </CardContainer>
    </div>
  );
}

export default CityBox;
