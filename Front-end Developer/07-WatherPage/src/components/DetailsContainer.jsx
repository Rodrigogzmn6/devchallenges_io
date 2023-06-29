import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { DayForecast } from "./DayForecast";
import { WeatherDetails } from "./WeatherDetails";
export const DetailsContainer = () => {
  const {
    unit,
    weatherData,
    forecastWeatherData,
    formatForecastWeatherData,
    getWeatherDataByName,
    changeUnit,
  } = useContext(WeatherContext);

  function handleUnitClick(unit) {
    changeUnit(unit);
    getWeatherDataByName(forecastWeatherData.city.name, unit);
  }

  const activeButtonClass = "w-8 h-8 rounded-full bg-accent-1";
  const inactiveButtonClass = "w-8 h-8 rounded-full bg-background-2";

  return (
    <div className="details-container px-8 py-4 flex flex-col items-stretch xl:px-16 xl:py-8 xl:min-h-0">
      <div className="details-buttons self-end flex gap-3 mb-8">
        <button
          className={
            unit === "metric" ? activeButtonClass : inactiveButtonClass
          }
          onClick={() => handleUnitClick("metric")}
        >
          ℃
        </button>
        <button
          className={
            unit === "imperial" ? activeButtonClass : inactiveButtonClass
          }
          onClick={() => handleUnitClick("imperial")}
        >
          ℉
        </button>
      </div>
      <div className="details-days flex flex-wrap justify-center gap-4 mb-8 md:gap-2 lg:gap-8">
        {Object.keys(forecastWeatherData).length > 0 &&
          forecastWeatherData["cod"] === "200" &&
          forecastWeatherData.list.map((day, index) => {
            return (
              day.dt_txt.substring(11, 13) === "00" && (
                <DayForecast key={index} day={formatForecastWeatherData(day)} />
              )
            );
          })}
      </div>
      <h2 className="font-bold text-3xl mb-4 lg:mt-8">Today's Hightlights</h2>
      {Object.keys(forecastWeatherData).length > 0 &&
        forecastWeatherData["cod"] === "200" && (
          <WeatherDetails data={weatherData} />
        )}
    </div>
  );
};
