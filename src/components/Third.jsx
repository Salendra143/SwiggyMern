import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { RestaurantMenuLink } from '../utility/Constants';

const Third = () => {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const inputValue = useRef(null);

    const fetchApi = async () => {
        const response = await fetch(RestaurantMenuLink);
        const json = await response.json();
        const restaurants = json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(restaurants);
        setFilteredData(restaurants);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleSearch = () => {
        const searchValue = inputValue.current.value.toLowerCase();
        const filtered = data.filter((card) => 
            card.info.name.toLowerCase().includes(searchValue)
        );
        setFilteredData(filtered);
    };

    const ratingHandler = () => {
        const filtered = data.filter((card) => 
            card.info.avgRating >= 4.5
        );
        setFilteredData(filtered);
    };

    const fastDelivery = () => {
        const filtered = data.filter((card) => 
            card.info.sla.deliveryTime <= 25
        );
        setFilteredData(filtered);
    };

    if (data == null)  return <p className='text-[3rem] text-center italic bg-gray-200'>Data is comming</p>

    return (
        <div className='px-4 py-8'>
            <p className='text-center text-[1.5rem] md:text-[2rem] font-semibold italic my-3'>
                Restaurants with online food delivery in Delhi
            </p>
            <div className='w-full md:w-[80%] lg:w-[60%] flex flex-col justify-center items-center mx-auto'>
                <div className='w-full flex border-2 border-gray-500 bg-gray-500 rounded-lg'>
                    <input 
                        ref={inputValue} 
                        className='w-full italic font-semibold p-2 outline-none rounded-l-lg placeholder:italic placeholder:font-semibold text-[0.875rem] md:text-[1rem]' 
                        type="text" 
                        placeholder='Search Food' 
                    />
                    <button 
                        onClick={handleSearch} 
                        className='p-2 text-[1.25rem] active:bg-gray-200 md:text-[1.5rem] italic text-white font-semibold bg-gray-700 hover:bg-gray-600 transition-colors rounded-r-lg'
                    >
                        Search
                    </button>
                </div>
                <div className='flex flex-col md:flex-row my-5 space-y-4 md:space-y-0 md:space-x-4 justify-evenly w-full'>
                    <button 
                        onClick={ratingHandler} 
                        className='p-3 font-semibold italic active:bg-gray-300 bg-gray-500 text-white rounded-lg w-full md:w-auto'
                    >
                        Higher Rating 4.5+
                    </button>
                    <button 
                        onClick={fastDelivery} 
                        className='p-3 font-semibold active:bg-gray-200 italic bg-gray-500 text-white rounded-lg w-full md:w-auto'
                    >
                        Fast Delivery 25mins
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-evenly gap-4 md:gap-6">
                {filteredData.length > 0 ? (
                    filteredData.map((card) => {
                        return (
                            <Link key={card.info.id} to={`/restaurant/${card.info.id}`}>
                                <Card info={card} />
                            </Link>
                        );
                    })
                ) : (
                    <p className="text-center text-[1.25rem] md:text-[1.5rem] font-semibold italic">
                        No items found with such a name
                    </p>
                )}
            </div>
        </div>
    );
};

export default Third;
