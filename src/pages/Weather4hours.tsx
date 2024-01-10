import axios from "axios";
import { useEffect, useState } from "react";
import { FaHome, FaList, FaSearch } from "react-icons/fa";
import { WiDegrees } from "react-icons/wi";
import moment from "moment";
import { Link } from "react-router-dom";
interface IFourweather {
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
  forecast: {
    forecastday: [
      {
        hour: [
          {
            temp_c: number;
            condition: {
              icon: string;
            };
          },
        ];
      },
    ];
  };
}
const Weather4hours = () => {
  const [fourWeather, setFourWeather] = useState<IFourweather | null>(null);
  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          " https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=1&aqi=no&alerts=no&lang=vi"
        );

        setFourWeather(response.data);
      };
      featchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const time = moment().get("hour");
  const data = [time, time + 1, time + 2, time + 3];
  return (
    <div className="min-w-full mt-20 bg-gradient-to-b from-[#3c115e] rounded-t-[30px] text-center text-white">
      <button>--</button>
      <div className="flex gap-4 p-2 ">
        {data.map((h) => {
          return (
            <div className="rounded-3xl py-2 text-[14px] text-center">
              <p>{h > 12 ? h - 12 + "PM" : h + "AM"}</p>
              <p>
                {fourWeather && (
                  <img
                    src={
                      fourWeather.forecast.forecastday[0].hour[h].condition.icon
                    }
                    width={50}
                    height={50}
                    alt=""
                  />
                )}
              </p>
              <p className="flex pt-2">
                <p className="pl-2">
                  {" "}
                  {fourWeather &&
                    fourWeather.forecast.forecastday[0].hour[h].temp_c.toFixed(
                      0
                    )}
                </p>

                <p className="text-[25px] ml-[-10px]">
                  <WiDegrees />
                </p>
              </p>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 mb-8">
        <div className="flex gap-20 p-3 text-white text-[20px]">
          <Link to={"/home"}>
            <FaHome />
          </Link>
          <Link to={"/search"}>
            <FaSearch />
          </Link>
          <Link to={"/search"}>
            <FaList />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Weather4hours;
