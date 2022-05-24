import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import ResultItem from "./ResultItem";
import { favouriteWeather } from "./Context/Action";

function Result() {
  const dispatch = useDispatch();
  const myWeather = useSelector((state) => state.userData.data);

  const handleFav = () => {
    let favdata = {
      city: myWeather.city.name,
      country: myWeather.city.country,
      temp: myWeather.list[0].main.temp,
      wind: myWeather.list[0].wind.speed,
      humidity: myWeather.list[0].main.humidity,
      visibility: myWeather.list[0].visibility,
      discription: myWeather.list[0].weather[0].description,
      icon: myWeather.list[0].weather[0].icon,
    };
    dispatch(favouriteWeather(favdata));
  };

  return (
    <>
      <div className="indicator main-weather-div">
        <button
          style={{ display: !myWeather.list ? "none" : "" }}
          className=" btn-xs indicator-item indicator-start badge badge-secondary"
          onClick={handleFav}
        >
          <FaHeart />
        </button>
        <div className="weater-container">
          <div className="w-full">
            {myWeather.list && (
              <div className="flex justify-center w-full">
                <div className="weather-show flex justify-center">
                  <figure className="flex justify-center">
                    <img
                      src={`http://openweathermap.org/img/wn/${myWeather.list[0].weather[0].icon}@4x.png`}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="weather-report">
                  <ResultItem
                    temp={myWeather.list[0].main.temp}
                    wind={myWeather.list[0].wind.speed}
                    city={myWeather.city.name}
                    humidity={myWeather.list[0].main.humidity}
                    discription={myWeather.list[0].weather[0].description}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
