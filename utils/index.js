import { AQI_STANDARDS } from "../components/AQIStandard/data";

function updateCitiesArray(cities, data) {
  const map = new Map();

  for (const city of [...cities, ...data]) {
    if (!map.has(city.city)) {
      map.set(city.city, { ...city });
    } else {
      map.set(city.city, {
        ...map.get(city.city),
        ...city,
        date: new Date().getTime(),
      });
    }
  }

  return [...map.values()];
}

function getAQIStandard(aqi) {
  if (aqi > 400) return AQI_STANDARDS.severe;
  if (aqi > 300) return AQI_STANDARDS.very_poor;
  if (aqi > 200) return AQI_STANDARDS.poor;
  if (aqi > 100) return AQI_STANDARDS.moderate;
  if (aqi > 50) return AQI_STANDARDS.satisfactory;
  if (aqi <= 50) return AQI_STANDARDS.good;
}

export { updateCitiesArray, getAQIStandard };
