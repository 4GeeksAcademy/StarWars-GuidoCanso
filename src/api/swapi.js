const BASE_URL = "https://www.swapi.tech/api";

export const getPlanets = async () => {
  // https://www.swapi.tech/api/planets
  const response = await fetch(`${BASE_URL}/planets`);
  if (!response.ok) throw new Error("Error fetching planets");
  const data = await response.json();
  // {message: '', results: []}
  return data.results;
};

export const getPlanetById = async (id) => {
  // https://www.swapi.tech/api/planets/12
  const response = await fetch(`${BASE_URL}/planets/${id}`);
  if (!response.ok) throw new Error("Error fetching planet");
  const data = await response.json();
  return data.result;
};

export const getCharacters = async () => {
  // https://www.swapi.tech/api/people
  const response = await fetch(`${BASE_URL}/people`);
  if (!response.ok) throw new Error("Error fetching Characters");
  const data = await response.json();
  // {message: '', results: []}
  return data.results;
};

export const getCharacterById = async (id) => {
  // https://www.swapi.tech/api/people/12
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok) throw new Error("Error fetching Characters");
  const data = await response.json();
  return data.result;
};