import { useEffect, useState } from "react";
import { WiDegrees } from "react-icons/wi";
// import { WiDegrees } from "react-icons/wi";
import axios from "axios";
import Weather4hours from "./Weather4hours";

interface ICurrenweather {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}
const CurrenWeather = () => {
  const [currenWeather, setCurrenWeather] = useState<ICurrenweather | null>(
    null
  );

  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          " https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=1&aqi=no&alerts=no&lang=vi"
        );
        setCurrenWeather(response.data);
      };
      featchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="curren text-center ">
        <p className="name text-[35px]">
          {currenWeather && currenWeather.location.name}
        </p>
        <p className="temp flex px-20">
          <p className="text-[50px] ">
            {(currenWeather && currenWeather.current.temp_c)?.toFixed(0)}
          </p>

          <p className="text-[90px]  ml-[-30px] mt-[-5px] font-bold">
            <WiDegrees />
          </p>
        </p>
        <p className="condition text-gray-300 italic">
          {currenWeather && currenWeather.current.condition.text}
        </p>
      </div>
      <Weather4hours />
    </>
  );
};

export default CurrenWeather;
