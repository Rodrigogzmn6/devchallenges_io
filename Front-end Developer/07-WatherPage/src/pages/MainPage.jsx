import { Navigate } from "react-router-dom";
import { WeatherContext } from "../contexts/WeatherContext";
import { useContext, useEffect, useState } from "react";
import { DetailsContainer } from "../components/DetailsContainer";
import { WeatherPanel } from "../components/WeatherPanel";
import SearchPanel from "../components/SearchPanel";

export const MainPage = () => {
  const {
    unit,
    getWeatherDataByLocation,
    getWeatherDataByName,
    weatherData,
    forecastWeatherData,
  } = useContext(WeatherContext);

  const [searching, setSearching] = useState(false);

  useEffect(() => {
    getWeatherDataByLocation();
  }, []);

  const startSearch = () => {
    setSearching(true);
  };

  const searchCurrentLocation = () => {
    getWeatherDataByLocation();
  };

  const closeSearch = () => {
    setSearching(false);
  };

  const searchCity = (location, unit) => {
    getWeatherDataByName(location, "metric");
  };

  const hasData =
    Object.keys(weatherData).length > 0 &&
    Object.keys(forecastWeatherData).length > 0;
  const hasError = weatherData.cod !== 200 || forecastWeatherData.cod !== "200";

  return hasError && hasData ? (
    <Navigate to="/error404" />
  ) : (
    <div className="mp-section font-raleway flex-grow md:grid md:grid-cols-[4fr_8fr] md:min-h-screen md:flex-grow-0 xl:min-h-0 xl:flex-grow">
      {searching ? (
        <SearchPanel closeSearch={closeSearch} searchCity={searchCity} />
      ) : (
        <WeatherPanel
          startSearch={startSearch}
          searchCurrentLocation={searchCurrentLocation}
          unit={unit}
        />
      )}
      <DetailsContainer />
    </div>
  );
};
