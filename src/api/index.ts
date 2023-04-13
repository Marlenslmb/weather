import axios from "axios";
import type { IWeatherData, IWeatherListItem } from "./types/index.types";

export const getWeather = (payload: IWeatherData) => {
  new Promise<IWeatherListItem>((resolve, reject) => {
    axios
      .get(
        `/openweathermap.org/data/3.0/onecall?lat=${payload.lat}&lon=${payload.lon}&exclude=${payload.part}&appid=${payload.apiKey}`
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
