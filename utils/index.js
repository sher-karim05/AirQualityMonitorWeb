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

export { updateCitiesArray };
