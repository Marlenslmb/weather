import type {  IWeatherData, IWeatherListItem } from "@/api/types/index.types";

export interface IWeatherForecasteState {
  form: IWeatherData
  weatherForecasts: IWeatherListItem[];
  cities: any[]
}

export interface IWeatherForm extends Omit<IWeatherData, "date">{
  date: Date;
}
