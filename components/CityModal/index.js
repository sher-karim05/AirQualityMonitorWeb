import React from "react";
import Modal from "react-awesome-modal";
import { useModal } from "./hooks";

function CityModal({ visible, hide, city = {} }) {
  return (
    <Modal visible={visible} width="90%" height="80%" onClickAway={hide}>
      <div>
        <div className="text-2xl">{city.city}</div>
        <div className="text-md">{city.date}</div>
        <div className="text-4xl">{city.aqi}</div>
      </div>
    </Modal>
  );
}

export default CityModal;
export { useModal };
