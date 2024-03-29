import CurrenWeather from "./pages/CurrenWeather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import "./App.css";
import FivedayWeather from "./pages/FivedayWeather";
import Search from "./pages/Search";
const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#7FFFD4] ">
      <BrowserRouter>
        <Routes>
          <Route path="WeatherApp/" element={<DefaultLayout />}>
            <Route index element={<CurrenWeather />} />
            <Route path="home" element={<CurrenWeather />} />
            <Route path="fiveday" element={<FivedayWeather />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
