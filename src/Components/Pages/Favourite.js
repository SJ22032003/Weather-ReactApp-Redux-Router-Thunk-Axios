import React from 'react'
import {useSelector} from 'react-redux'
import FavouriteResult from '../FavouriteResult'

function Favourite() {
  const myFavourite = useSelector((state) => state.FavReducer.data);
  // console.info(myFavourite);

  if(myFavourite.length > 0){

    return (
      <center className="grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {myFavourite && myFavourite.map((item, index) => (
          <FavouriteResult key={index} city={item.city} temp={item.temp} icon={item.icon} country={item.country} discription={item.discription}  />
        ))}
      </center>
    )
  }else{
    return (
      <center>
        <h1>Add Your Favourites here</h1>
      </center>
    )
  }

}

export default Favourite