import axios from "axios";
import type {
  ICitiesPayloadData,
  IWeatherData,
  IWeatherListItem,
} from "./types/index.types";

export const getWeather = (payload: IWeatherData) => {
  return new Promise<IWeatherListItem[]>((resolve, reject) => {
    axios
      .get(
        `https://demo.openweathermap.org/energy/1.0/solar/data?lat=${payload.lat}&lon=${payload.lon}&date=${payload.date}&tz=+03:00&appid=${payload.apiKey}`
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
export const getWeatherForecast = (term: any) => {
  return new Promise<IWeatherListItem[]>((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${term}&type=like&appid=${process.env.API_KEY}`
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const getKyrgyzstanCities = (apiKey: string) => {
  return new Promise<any>((resolve, reject) => {
    axios
      .get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10
        `,
        {
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          },
        }
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
