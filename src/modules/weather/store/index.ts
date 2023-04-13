import { defineStore } from "pinia";
import type { IWeatherForecasteState } from "./index.types";
import type { IWeatherListItem } from "@/api/types/index.types";

export const useWeatherForecastStore = defineStore("weather-forecast.index", {
  state: (): IWeatherForecasteState => {
    return {
      weatherForecasts: [],
    };
  },
  getters: {
    getWeatherForecasts(): IWeatherListItem[] {
      return this.weatherForecasts;
    },
  },
  actions: {
    fetchWeatherForecasts() {
      return new Promise<IWeatherListItem[]>((resolve, reject) => {});
    },
  },
});
