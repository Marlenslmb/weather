export interface IWeatherListItem {
  base: string;
  clouds: IWeatherCloudsItem;
  cod: number;
  coord: IWeatherCoordItem;
  dt: number;
  id: number;
  main: IWeatherMainItem;
  name: string;
  sys: IWeatherSysItem;
  timezone: number;
  visibility: number;
  weather: IWeatherDataListItem[];
  wind: IWeatherWindItem;
}

export interface IWeatherCloudsItem {
  all: number;
}
export interface IWeatherCoordItem {
  lon: number;
  lat: number;
}
export interface IWeatherMainItem {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface IWeatherWindItem {
  speed: number;
  deg: number;
  gust: number;
}
export interface IWeatherSysItem {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface IWeatherDataListItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherSearchParams {
  //   apiKey: "e22480dc6d550a7618459593bdbe5594";
  apiKey: string;
  city: string;
  lat?: string | number;
  lon?: string | number;
  units?: UnitsEnum;
}

export interface ICitiesPayloadData {
  weatherApiKey: "c3dbf9ec078345588f091658231504"; // WEATHeR API KEY
}

export interface IWeatherCitiesListItem {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  regionWdId: string;
  type: string;
  wikiDataId: string;
}

export interface ListItem {
  value: string | number | boolean | object;
  title: string;
  disabled?: boolean;
  header?: boolean;
  divider?: boolean;
}
export type List = ListItem[];

export interface IIndexable {
  [key: string]: any;
}

export enum UnitsEnum {
  Metric = "metric",
  Imperial = "imperial",
}

export enum ITheme {
  light = "light",
  dark = "dark",
}
