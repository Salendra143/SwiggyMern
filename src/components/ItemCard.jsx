import React from 'react';
import { CDNIMG } from '../utility/Constants';
import { useDispatch } from 'react-redux';
import { setdata } from '../toolkit/appslice';

const ItemCard = ({ items }) => {
console.log(items);
  
  const dispatch = useDispatch()


  const btnclicked = (item) => {
    console.log('btn clicked');
    
    dispatch(setdata(item))
  }


  return (
    <div className="italic">
      {items.map((item, index) => {
        const { name, price, description, ratings, imageId,defaultPrice } = item?.card?.info;
        return (
          <div key={index} className="flex flex-col md:flex-row mt-2 pb-2 justify-between border-b-2 border-gray-500">
            <div className="py-2 w-full md:w-2/3">
              <p className="font-semibold ">{name}</p>
              <p className="font-semibold">Rs-{ price ? price /100 : defaultPrice / 100}</p>
              <p className="text-orange-500 font-bold">⭐ {ratings.aggregatedRating?.rating || 4.5}</p>
              <p className="text-sm text-gray-500">{description}</p>
            </div>

            <div className="relative w-full md:w-[200px] h-[150px] mt-4 md:mt-0 rounded-2xl">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={CDNIMG + imageId}
                alt=""
              />
              <button onClick={() => btnclicked(item)} className="absolute bottom-2 hover:bg-orange-400 active:bg-orange-500 left-12 bg-orange-500 px-7 font-bold py-2 rounded-2xl">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
