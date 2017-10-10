const API_KEY = 'a91ac41f42bb6d6a965605b24b36df21';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  let request = fetch(url).then(response => response.json());
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}