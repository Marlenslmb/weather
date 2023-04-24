import type {
  IWeatherSearchParams,
  IWeatherListItem,
  IWeatherCitiesListItem,
  IIndexable,
  ITheme,
} from "@/api/types/index.types";

export interface IWeatherForecasteState {
  form: IWeatherForm;
  weatherForecasts: IWeatherListItem;
  cities: IWeatherCitiesListItem[];

  temperature: string;

  theme: ITheme;
}

export type IWeatherForm = IIndexable & IWeatherSearchParams;
