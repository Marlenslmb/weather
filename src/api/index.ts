import axios from "axios";
import type {
  IWeatherSearchParams,
  IWeatherListItem,
} from "./types/index.types";

export const getWeather = (payload: IWeatherSearchParams) => {
  return new Promise<IWeatherListItem>((resolve, reject) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          payload.city ? payload.city : "Bishkek"
        }&units=${payload.units}&appid=${payload.apiKey}`
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
export const getWeatherForecast = (term: any) => {
  return new Promise<IWeatherListItem[]>((resolve, reject) => {
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/{locationKey}`
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
