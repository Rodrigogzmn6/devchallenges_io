import { useContext } from "react";
// import TodayCard from '../TodayCard/TodayCard'
import { WeatherContext } from "../contexts/WeatherContext";
import { HighlightCard } from "./HighlightCard";

import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";

export const WeatherDetails = ({ data }) => {
  const { unit } = useContext(WeatherContext);
  const windDirection = data["wind"]["deg"];
  return Object.keys(data).length !== 0 ? (
    <div className="wd-container flex flex-col gap-4 md:grid md:grid-cols-[1fr_1fr]">
      <HighlightCard
        title={"Wind status"}
        data={data.wind.speed}
        unit={unit === "metric" ? "Kmh" : "mph"}
      >
        <div
          className="bg-accent-1 rounded-full flex align-middle justify-center p-1"
          style={{ transform: `rotate(${windDirection}deg)` }}
        >
          <NavigationRoundedIcon />
        </div>
      </HighlightCard>
      <HighlightCard title={"Humidity"} data={data.main.humidity} unit={"%"}>
        <div className="humidity-progress-bar flex h-3 bg-text-2 rounded-full items-center w-3/4">
          <div
            className="completed-bar items-center flex h-full bg-accent-2 rounded-full justify-end"
            style={{ width: `${data.main.humidity}%` }}
          ></div>
        </div>
      </HighlightCard>

      <HighlightCard
        title={"Visibility"}
        data={data.visibility}
        unit={"miles"}
      />

      <HighlightCard
        title={"Air Pressure"}
        data={data.main.pressure}
        unit={"mb"}
      />
    </div>
  ) : (
    <PanelLoader />
  );
};
