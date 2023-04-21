import { defineStore } from "pinia";
import type { IWeatherForecasteState } from "./index.types";
import {
  type ICitiesPayloadData,
  type IWeatherSearchParams,
  type IWeatherListItem,
  UnitsEnum,
  type IWeatherCitiesListItem,
} from "@/api/types/index.types";
import { getKyrgyzstanCities, getWeather, getWeatherForecast } from "@/api";
import { isWeatherListGuard } from "@/api/types/index.guards";

export const useWeatherForecastStore = defineStore("weather-forecast.index", {
  state: (): IWeatherForecasteState => {
    return {
      form: {
        apiKey: null,
        city: null,
        lat: null,
        lon: null,
        units: null,
      },
      weatherForecasts: {
        base: null,
        clouds: {
          all: null,
        },
        cod: null,
        coord: {
          lat: null,
          lon: null,
        },
        dt: null,
        id: null,
        main: {
          temp: null,
          feels_like: null,
          temp_min: null,
          temp_max: null,
          pressure: null,
          humidity: null,
        },
        name: null,
        sys: {
          type: null,
          id: null,
          country: null,
          sunrise: null,
          sunset: null,
        },
        timezone: null,
        visibility: null,
        weather: [],
        wind: {
          speed: null,
          deg: null,
          gust: null,
        },
      },

      cities: [],

      temperature: "",
    };
  },
  getters: {
    getForm(): IWeatherSearchParams {
      return this.form;
    },
    getWeatherForecasts(): IWeatherListItem {
      return this.weatherForecasts;
    },
    getCities(): IWeatherCitiesListItem[] {
      return this.cities;
    },
    getUnitState(): string {
      return this.form.units;
    },
  },
  actions: {
    fetchWeather(units: UnitsEnum = UnitsEnum.Metric) {
      return new Promise<IWeatherListItem>((resolve, reject) => {
        const payload = {
          ...this.form,
          apiKey: "e22480dc6d550a7618459593bdbe5594",
          units,
        };
        getWeather(payload)
          .then((data) => {
            console.log(data);
            if (isWeatherListGuard(data)) {
              this.weatherForecasts = data;
              console.log(data, "in GUARD");
            }
            resolve(data);
          })
          .catch((err) => reject(err));
      });
    },
    fetchCities() {
      const apiKey = "bedba5e7e2mshe6465495dddfc09p1ba66ajsn6fe9ee2e6289";
      return new Promise<IWeatherCitiesListItem[]>((resolve, reject) => {
        getKyrgyzstanCities(apiKey)
          .then((data) => {
            this.cities = data.data;
            console.log(this.cities);
            resolve(data);
          })
          .catch((err) => reject(err));
      });
    },

    setFormValue(key: string, value: string | number) {
      if (key && value) {
        const data = this.cities.find((e) => e.id === value);
        if (data) {
          this.form = {
            apiKey: null,
            city: data.city,
            lat: data.latitude,
            lon: data.longitude,
          };
          this.fetchWeather();
        }
        console.log(data);
      }
    },

    setUntis(value: UnitsEnum) {
      this.form.units = value;
    },
  },
});
