function updateCitiesArray(cities, data) {
  cities = data.map((c) => {
    c.date = new Date().getTime();
    return c;
  });

  return cities;
}

export { updateCitiesArray };
