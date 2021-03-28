import { AQI_STANDARDS } from "../components/AQIStandard/data";
import { MAX_HISTORY_ITEMS } from "./variables";

function updateCitiesArray(cities, data) {
  const map = new Map();

  for (const city of [...cities, ...data]) {
    // ? does already have city
    if (map.has(city.city)) {
      const oldCity = map.get(city.city);

      // * aqi has been changed, update time & add to history
      if (oldCity.aqi != city.city) {
        city.date = new Date().getTime();

        city.history = oldCity.history || [];

        city.history.push(city.aqi.toFixed(2));
      }
    }

    // + Limit history size
    if (city.history && city.history.length > MAX_HISTORY_ITEMS) {
      city.history.splice(0, 1);
    }

    map.set(city.city, { ...city });
  }

  return [...map.values()];
}

function getFormattedAQI(aqi) {
  return !aqi ? [] : (aqi.toFixed(2) + "").split(".");
}

function getAQIStandard(aqi) {
  if (aqi > 400) return AQI_STANDARDS.severe;
  if (aqi > 300) return AQI_STANDARDS.very_poor;
  if (aqi > 200) return AQI_STANDARDS.poor;
  if (aqi > 100) return AQI_STANDARDS.moderate;
  if (aqi > 50) return AQI_STANDARDS.satisfactory;
  if (aqi <= 50) return AQI_STANDARDS.good;
}

export { updateCitiesArray, getFormattedAQI, getAQIStandard };
