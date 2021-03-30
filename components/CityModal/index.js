import React from "react";
import Modal from "react-awesome-modal";
import CityHistoryBox from "../CityHistoryBox";

function CityModal({ visible, hide, city = {} }) {
  return (
    <Modal visible={visible} width="90%" height="80%" onClickAway={hide}>
      <CityHistoryBox city={city} />
    </Modal>
  );
}

export default CityModal;
