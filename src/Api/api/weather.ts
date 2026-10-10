import { API_KEY, API_URL } from "../config";

export type WeatherType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export async function getWeather(city: string): Promise<WeatherType> {
  const response = await fetch(
    `${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`,
  );
  if(!response.ok) {
    throw new Error(`Error ${response.status}`)
  }
  const result = await response.json()
  return result
}
