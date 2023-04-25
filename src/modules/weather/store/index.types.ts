import type {
  IWeatherSearchParams,
  IWeatherListItem,
  IWeatherCitiesListItem,
  IIndexable,
} from "@/api/types/index.types";

export interface IWeatherForecasteState {
  form: IWeatherForm;
  weatherForecasts: IWeatherListItem;
  cities: IWeatherCitiesListItem[];

  temperature: string;

  theme: string;
}

export type IWeatherForm = IIndexable & IWeatherSearchParams;
