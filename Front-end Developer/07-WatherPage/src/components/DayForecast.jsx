import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export const DayForecast = ({ day }) => {
  const { unit } = useContext(WeatherContext);
  return (
    <div className="forecast-day border-solid border border-accent-2 border-opacity-50 text-center py-2 px-4 rounded-xl">
      <h2>
        {day.day}. {day.date} {day.month}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${day.iconCode}@2x.png`}
        alt="weather graph"
      />
      <div className="forecast-day-temperature flex justify-between">
        <p>
          {day.feels_like}
          {unit === "metric" ? "℃" : "℉"}
        </p>
        <p className="text-text-2">
          {day.min_temp}
          {unit === "metric" ? "℃" : "℉"}
        </p>
      </div>
    </div>
  );
};
