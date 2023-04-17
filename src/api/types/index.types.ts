export interface IWeatherListItem {}

export interface IWeatherData {
  //   apiKey: "e22480dc6d550a7618459593bdbe5594";
  apiKey: string | null;
  lat: string | null;
  lon: string | null;
  date: string | null;
}

export interface ICitiesPayloadData {
  weatherApiKey: "c3dbf9ec078345588f091658231504"; // WEATHeR API KEY
  //  apiUserName: string; // Ваш логин на GeoNames
  //  countryCode: string; // Код страны (для Кыргызстана - 'KG')
  //  maxRows: number; // Максимальное количество результатов (от 1 до 1000)
}
