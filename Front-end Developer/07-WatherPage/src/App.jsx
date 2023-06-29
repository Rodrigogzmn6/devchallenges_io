import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherContextProvider } from "./contexts/WeatherContext";

import "./App.css";

import { MainPage } from "./pages/MainPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-background-1 text-text-1 xl:justify-between">
      <WeatherContextProvider value={[]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/error404" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
