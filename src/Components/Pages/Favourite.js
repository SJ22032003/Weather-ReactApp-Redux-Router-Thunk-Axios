import React from 'react'
import {useSelector} from 'react-redux'
import FavouriteResult from '../FavouriteResult'

function Favourite() {
  const myFavourite = useSelector((state) => state.FavReducer.data);
  // console.info(myFavourite);

  return (
    <div className="grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {myFavourite && myFavourite.map((item, index) => (
        <FavouriteResult key={index} city={item.city} temp={item.temp} icon={item.icon} country={item.country} discription={item.discription}  />
      ))}
    </div>
  )
}

export default Favourite