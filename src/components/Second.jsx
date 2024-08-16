import React, { useRef } from 'react';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import Card from './Card';
import { useFetchApi } from '../utility/Helper';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Second = () => {
  const { data, loading, error } = useFetchApi();
  const containerRef = useRef(null); // Ref for the scroll container

  if (loading) return <Shimmer />;
  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>No Data Found</h1>;

  const restaurants = data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  const chunkSize = 3; // Number of items to display per "slide"

  // Function to handle left arrow click
  const handleLeftClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth / chunkSize,
        behavior: 'smooth'
      });
    }
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth / chunkSize,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-[1050px] mx-auto">
      <div className="flex justify-between items-center font-semibold italic my-2 px-4">
        <p className="text-lg sm:text-xl md:text-2xl">Top restaurant chains in Delhi</p>
        <div className="flex gap-2">
          <TiArrowLeft
            className="text-[1.5rem] active:bg-gray-200 md:text-[2rem] bg-gray-300 rounded-full cursor-pointer"
            onClick={handleLeftClick}
          />
          <TiArrowRight
            className="text-[1.5rem] active:bg-gray-200 md:text-[2rem] bg-gray-300 rounded-full cursor-pointer"
            onClick={handleRightClick}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 md:gap-10 overflow-x-scroll no-scrollbar px-4"
      >
        {restaurants.length > 0 ? (
          restaurants.map((card) => (
            <Link to={`/restaurant/${card.info.id}`} key={card.info.id}>
              <Card info={card} />
            </Link>
          ))
        ) : (
          <h2>No restaurants found</h2>
        )}
      </div>
    </div>
  );
};

export default Second;
