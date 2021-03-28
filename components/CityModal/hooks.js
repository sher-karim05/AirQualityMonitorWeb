import { useState } from "react";

function useModal(defaultValue = false) {
  const [visible, setVisible] = useState(defaultValue);

  const hide = () => setVisible(false);

  const show = () => setVisible(true);

  return { visible, hide, show };
}

export { useModal };
