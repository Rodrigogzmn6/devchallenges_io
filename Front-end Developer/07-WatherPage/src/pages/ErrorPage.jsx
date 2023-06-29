import React, { useContext } from "react";
import Image from "../assets/Scarecrow.png";
import { Link } from "react-router-dom";
import { WeatherContext } from "../contexts/WeatherContext";

export function ErrorPage() {
  const {
    getWeatherDataByLocation,
    getWeatherDataByName,
    weatherData,
    formatWeatherData,
    forecastWeatherData,
    formatForecastWeatherData,
    restartWeatherData,
  } = useContext(WeatherContext);

  return (
    <div className="error-section px-8 py-4 flex-grow md:flex sm:justify-between sm:items-center">
      <div className="error-section-image w-full">
        <img
          src={Image}
          alt="Scarecrow"
          className="animate__animated animate__backInUp w-full sm:w-9/12"
        />
      </div>

      <div className="error-section-message mb-8 font-mono flex flex-col items-stretch">
        <h2 className="mb-8 font-bold text-5xl">I have bad news for you</h2>
        <p className="mb-16 font-normal text-xl">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Link to="/" className="self-center">
          <button
            onClick={restartWeatherData}
            className="bg-background-3 font-bold py-6 px-11"
          >
            BACK TO HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  );
}
