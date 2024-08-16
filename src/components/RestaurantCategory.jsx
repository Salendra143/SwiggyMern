import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { FaArrowCircleDown } from "react-icons/fa";


const RestaurantCategory = ({ data }) => {
  const [showitem,setshowitem] = useState(false)

  const clickHandler = () => {
    setshowitem(!showitem)
}
  
  return (
    <div className="flex flex-col p-5 ">
        <div onClick={clickHandler} className="flex justify-between font-bold text-[1.3rem] border-b-2 border-gray-500 pb-1  cursor-pointer ">
          <p>{data.title} ({data.itemCards?.length})</p>
          <FaArrowCircleDown className="mt-1"/>
       </div>
      
        {showitem &&

        <ItemCard items={data.itemCards}/>
        }
    

    </div>
  );
};

export default RestaurantCategory;
