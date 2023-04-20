import type { IWeatherListItem } from "./index.types";

export const isWeatherListGuard = (
  data: IWeatherListItem
): data is IWeatherListItem => data && "id" in data;
