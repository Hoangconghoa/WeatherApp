import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WiDegrees } from "react-icons/wi";
import moment from "moment";
interface IFiveDayWeather {
  location: {
    name: string;
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        date: string;
      },
    ];
  };
}
const FivedayWeather = () => {
  const [fiveDayWeather, setFiveDayWeather] = useState<IFiveDayWeather | null>(
    null
  );

  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=5&aqi=no&alerts=no&lang=vi`
        );
        setFiveDayWeather(response.data);
      };
      featchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const date = [0, 1, 2];
  const currenDate = new Date();

  const time = moment().get("hour");
  return (
    <div className="mx-4 ">
      <div className="flex justify-between items-center p-2">
        <div className="flex gap-2">
          <div>
            <Link to={"/WeatherApp/home"}>
              <FaChevronLeft />
            </Link>
          </div>
          <div className="">
            {fiveDayWeather && fiveDayWeather.location.name}
          </div>
        </div>
        <div>
          <FaEllipsisV />
        </div>
      </div>
      <div>
        {date.map((x) => {
          return (
            <div key={x} className="bg-[#48309D] rounded-xl mb-5 p-3">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="text-[30px] font-medium mr-[-15px]">
                    {fiveDayWeather &&
                      (time > 5 && time < 18
                        ? fiveDayWeather.forecast.forecastday[
                            x
                          ].day.maxtemp_c.toFixed(0)
                        : fiveDayWeather.forecast.forecastday[
                            x
                          ].day.mintemp_c.toFixed(0))}
                  </div>

                  <div className="text-[50px]">
                    <WiDegrees />
                  </div>
                </div>
                <div>
                  {fiveDayWeather && (
                    <img
                      src={
                        fiveDayWeather.forecast.forecastday[x].day.condition
                          .icon
                      }
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-[14px]">
                  {currenDate.getDate() + x}/{currenDate.getMonth() + 1}
                </div>
                <div className="text-[14px]">
                  {fiveDayWeather &&
                    fiveDayWeather.forecast.forecastday[x].day.condition.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FivedayWeather;
