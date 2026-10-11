import { type WeatherCardProps } from "./type";
import styles from "./WeatherCard.module.css";

function WeatherCard({ weather }: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        className={styles.icon}
        src={iconUrl}
        alt={weather.weather[0].description}
      />
      <p className={styles.description}>{weather.weather[0].description}</p>
      <p className={styles.temp}>{Math.round(weather.main.temp)}°C</p>

      <div className={styles.details}>
        <p>
          <span>Ощущается как</span>
          <span>{Math.round(weather.main.feels_like)}°C</span>
        </p>
        <p>
          <span>Влажность</span>
          <span>{weather.main.humidity}%</span>
        </p>
        <p>
          <span>Ветер</span>
          <span>{weather.wind.speed} м/с, {weather.wind.deg}°</span>
        </p>
        <p>
          <span>Давление</span>
          <span>{weather.main.pressure} гПа</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
