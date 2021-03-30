import React from "react";
import Modal from "react-awesome-modal";
import CityHistoryBox from "../CityHistoryBox";

function CityCompareModal({ visible, hide, cityA, cityB }) {
  return (
    <Modal
      visible={visible}
      width="90%"
      height="80%"
      onClickAway={hide}
      className=""
    >
      <div className="flex">
        <div className="flex-1">{cityA && <CityHistoryBox city={cityA} />}</div>

        <div className="flex-1">{cityB && <CityHistoryBox city={cityB} />}</div>
      </div>
    </Modal>
  );
}

export default CityCompareModal;
