import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import "./ImageLoader.css";
import { ImageLoader } from "./ImageLoader";

export const WeatherPanel = ({ startSearch, searchCurrentLocation, unit }) => {
  const { weatherData, formatWeatherData } = useContext(WeatherContext);

  const data = formatWeatherData(weatherData);

  const handleSearchButton = () => {
    startSearch();
  };

  const handleLocationButton = () => {
    searchCurrentLocation();
  };

  return (
    <div className="wp-container flex flex-col min-h-screen px-8 py-4 bg-background-2 xl:px-16 xl:py-8 xl:min-h-0">
      <div className="wp-buttons flex justify-between text-xl">
        <button onClick={handleSearchButton}>Search for places</button>
        <button onClick={handleLocationButton}>
          <MyLocationRoundedIcon />
        </button>
      </div>
      <div className="wp-information flex-grow flex flex-col gap-6 justify-center items-center md:flex-grow-0">
        <div className="wp-image">
          {Object.keys(data).length > 0 ? (
            <img
              src={`http://openweathermap.org/img/wn/${data.iconCode}@2x.png`}
              alt="weather graph"
              className="w-36 h-36"
            />
          ) : (
            <ImageLoader />
          )}
        </div>
        <div className="wp-weather flex flex-col items-center">
          <h1 className="wp-temp items-center flex mb-8">
            <span className="text-7xl">{data.temperature}</span>
            <span className="text-text-2 text-5xl">
              {unit === "metric" ? "℃" : "℉"}
            </span>
          </h1>
          <h2 className="text-3xl">{data.description}</h2>
        </div>
        <div className="wp-date">
          <p className="text-xl text-text-2">
            Today - {data.day}. {data.date} {data.month}
          </p>
        </div>
        <div className="wp-location text-text-2 flex gap-2">
          <LocationOnRoundedIcon />
          <p>{data.name}</p>
        </div>
      </div>
    </div>
  );
};
