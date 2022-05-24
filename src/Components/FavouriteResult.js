import React from "react";
import {FaMapPin , FaTrash} from "react-icons/fa";
import {deleteFavouriteWeather} from "./Context/Action";
import {useDispatch} from "react-redux";
function FavouriteResult({ city, temp, country, icon, discription }) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteFavouriteWeather(city));
    }

  return (
    <div >
      <div className="indicator">
        <button className="indicator-item badge badge-secondary m-2" onClick={handleDelete}><FaTrash/></button>
        <div className="card w-80 bg-base-100 shadow-xl image-full m-2">
          <figure>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather"
            />
            <h3 className="text-xl text-white">{(temp-273).toFixed(1)} C</h3>
          </figure>
          <div className="card-body">
            <h2 className="card-title"><FaMapPin/>{city}</h2>
            <p>{discription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteResult;
