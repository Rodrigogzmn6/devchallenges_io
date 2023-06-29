import { useContext, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { WeatherContext } from "../contexts/WeatherContext";

export const SearchPanel = ({ closeSearch, searchCity }) => {
  const [location, setLocation] = useState("");
  const { unit } = useContext(WeatherContext);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  const handleClick = () => {
    searchCity(location, "metric");
    closeSearch(false);
  };

  const handleCloseButton = () => {
    closeSearch();
  };

  return (
    <div className="sp-container flex flex-col min-h-screen px-8 py-4 bg-background-2 xl:px-16 xl:py-8 xl:min-h-0">
      <div className="sp-close-button flex justify-end">
        <button onClick={handleCloseButton}>
          <CloseRoundedIcon />
        </button>
      </div>
      <div className="sp-form flex justify-center mt-4 gap-4 md:flex-col md:items-center md:max-w-min lg:flex-row lg:gap-2">
        <input
          className="sp-form-textfield border-solid border border-text-1 rounded-lg py-2 px-4 bg-background-1 text-text-1 md:px-1"
          placeholder="New York, Rome..."
          onChange={handleChange}
          value={location}
        />
        <button
          onClick={handleClick}
          className=" border-solid border border-text-1 rounded-lg py-2 px-4  md:max-w-min"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchPanel;

// TODO: Estilar formulario de búsqueda
