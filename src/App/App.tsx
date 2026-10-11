import { useEffect, useState } from "react";
import { getWeather, type WeatherType } from "../Api/api/weather";
import SearchForm from "../UI/SearchForm/SearchForm";
import WeatherCard from "../UI/WeatherCard/WeatherCard";
import styles from './App.module.css'

function App() {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState(() => localStorage.getItem("city") ?? "");

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getWeather(city);
      setWeather(result);
      setCity(city);
      localStorage.setItem("city", city);
    } catch {
      setError("Город не найден");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, []);
  return (
    <div className={styles.container}>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
