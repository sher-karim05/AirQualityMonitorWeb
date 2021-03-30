import React from "react";
import Modal from "react-awesome-modal";
import CityHistoryBox from "../CityHistoryBox";

function CityCompareModal({ visible, hide, cityA = {}, cityB = {} }) {
  return (
    <Modal visible={visible} width="90%" height="80%" onClickAway={hide}>
      <div>
        <div className="w-1/2">
          <CityHistoryBox city={cityA} />
        </div>

        <div className="w-1/2">
          <CityHistoryBox city={cityB} />
        </div>
      </div>
    </Modal>
  );
}

export default CityCompareModal;
