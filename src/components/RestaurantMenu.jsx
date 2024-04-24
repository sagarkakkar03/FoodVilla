import React from 'react'
import ShimmerComponent from './Shimmer'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

import { useState } from 'react';

const RestaurantMenu = () => {

   const resId = useParams();
   resInfo = useRestaurantMenu(resId);
   const dummy = "Dummy Data";
   
   const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <ShimmerComponent/>
    console.log(resInfo)
    const {name, costForTwo} = resInfo?.cards[2]?.card?.card?.info || ""

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards
    console.log(resInfo, 'hello')
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(resInfo)
console.log(categories)
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800
      ">{name}</h1>
      <p>{"Cost for Two: Rupees "+  costForTwo/100}</p>
      
      {
        categories.map((category, index)=>(
          <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
        ))
      }
    </div>
  )
}

export default RestaurantMenu
