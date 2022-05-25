import React from "react";
import { FaHeart, FaCheck } from "react-icons/fa";
import {motion} from "framer-motion"
import { useSelector, useDispatch } from "react-redux";
import ResultItem from "./ResultItem";
import { favouriteWeather, removeFav } from "./Context/Action";
import Loading from "./Layout/Loading";

function Result() {
  const dispatch = useDispatch();
  const myWeather = useSelector((state) => state.userData.data);
  const myError = useSelector((state) => (state.userData.error ? true : false));
  const myLoading = useSelector((state) => state.userData.loading);
  const myChecked = useSelector((state) => state.FavReducer.data);

  let exist =
    myWeather.list &&
    myChecked.find((item) => item.city === myWeather.city.name)
      ? true
      : false;

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

  const handleRevFav = () => {
    dispatch(removeFav(myWeather.city.name));
  };

  if (myLoading) {
    return <Loading />;
  } else if (myError) {
    return (
      <center>
        <motion.div className="alert alert-error shadow-lg" animate={{scale:1.1 , }}>
          <span>Error! Please Check your Input</span>
        </motion.div>
      </center>
    );
  } else {
    return (
      <>
        <div className="indicator main-weather-div">
          <button
            style={{
              display: !myWeather.list ? "none" : "",
              backgroundColor: exist ? "red" : "",
            }}
            className="btn-xs indicator-item indicator-start badge badge-secondary"
            onClick={exist ? handleRevFav : handleFav}
          >
            <FaHeart hidden={exist} />
            <FaCheck hidden={!exist} title="added" />
          </button>
          <div className="weater-container">
            <div className="w-full">
              {myWeather.list && (
                <div className="flex justify-center w-full">
                  <motion.div className="weather-report" initial={{height:100}} animate={{height:470}}>
                    <div className=" flex justify-center">
                      <figure className="flex justify-center">
                        <img
                          src={`http://openweathermap.org/img/wn/${myWeather.list[0].weather[0].icon}@4x.png`}
                          alt=""
                        />
                      </figure>
                    </div>
                    <ResultItem
                      temp={myWeather.list[0].main.temp}
                      wind={myWeather.list[0].wind.speed}
                      city={myWeather.city.name}
                      humidity={myWeather.list[0].main.humidity}
                      discription={myWeather.list[0].weather[0].description}
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
