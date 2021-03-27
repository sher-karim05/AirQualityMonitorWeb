function updateCitiesArray(cities, data) {
  console.log(cities, data);

  cities = data.map((c) => {
    c.date = new Date();
    return c;
  });

  return cities;
}

export { updateCitiesArray };
