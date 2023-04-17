import type {  IWeatherListItem } from "./index.types";

export const isWeatherListGuard = (data: IWeatherListItem[]): data is IWeatherListItem[] => Array.isArray(data)
// export const isCitiesListGuard = (data: ICitiesListItem[]): data is ICitiesListItem[] => Array.isArray(data)