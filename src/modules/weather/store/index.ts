import { defineStore } from "pinia";
import type { IWeatherForecasteState } from "./index.types";
import type { ICitiesPayloadData, IWeatherData, IWeatherListItem } from "@/api/types/index.types";
import { getKyrgyzstanCities, getWeather, getWeatherForecast } from "@/api";
import {  isWeatherListGuard } from "@/api/types/index.guards";

export const useWeatherForecastStore = defineStore("weather-forecast.index", {
  state: (): IWeatherForecasteState => {
    return {
      form: {
        apiKey: null,
        lat:null,
        lon:null,
        date:null,
      },
      weatherForecasts: [],
      cities: [],
    };
  },
  getters: {
    getForm(): IWeatherData {
      return this.form
    },
    getWeatherForecasts(): IWeatherListItem[] {
      return this.weatherForecasts;
    },
    getCities():any[] {
      return this.cities
    }
  },
  actions: {
    fetchWeatherForecasts(value: any) {
      console.log('store');
      return new Promise<IWeatherListItem[]>((resolve, reject) => {
        getWeatherForecast(value).then((data) => {
          console.log(data);
          if(isWeatherListGuard(data)) {
            this.weatherForecasts = data;
            console.log(data, 'in GUARD');

          }
          resolve(data)
        }).catch((err) => reject(err))
      });
    },
    fetchWeather() {
      return new Promise<IWeatherListItem[]>((resolve, reject) => {
        const payload = {
          ...this.form
        }
        getWeather(payload).then((data) => {
          console.log(data);
          if(isWeatherListGuard(data)) {
            this.weatherForecasts = data;
            console.log(data, 'in GUARD');

          }
          resolve(data)
        }).catch((err) => reject(err))
      });
    },
    fetchCities() {
      const apikey = 'bedba5e7e2mshe6465495dddfc09p1ba66ajsn6fe9ee2e6289'
      return new Promise<any>((resolve, reject) => {
        getKyrgyzstanCities(apikey).then((data) => {
          console.log(data);
          // if(isCitiesListGuard(data)) {
            this.cities = data.data;
            console.log(this.cities);

          // }
          resolve(data)
        }).catch((err) => reject(err))
      });
    },

    setFormValue(key: string, value: any) {
      if(key && value) {
        const city = this.cities.find((e) => e.id === value);
        console.log(city);
        this.form = {
          apiKey: 'e22480dc6d550a7618459593bdbe5594',
          lat: city.lat,
          lon: city.lon,
          date: new Date().toISOString(),
        }
      }
    }
  },
});
