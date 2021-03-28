import { useState } from "react";

function useCitySelector(defaultValue) {
  const [selectedCity, setSelectedCity] = useState(defaultValue);

  const clearSelectedCity = () => setSelectedCity(null);

  return [selectedCity, setSelectedCity, clearSelectedCity];
}

export { useCitySelector };
