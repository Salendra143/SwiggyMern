import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDNIMG, EmptyCart } from "../utility/Constants";
import { ClearData, removeData } from "../toolkit/appslice";

const CartPage = () => {
  const items = useSelector((store) => store.data.items);
  const dispatch = useDispatch();

  const btnclicked = (index) => {
    dispatch(removeData(index));
  };
  const btnclear = () =>{
    dispatch(ClearData());
  };

  // Calculate the total price
  const totalPrice = items.reduce((total, item) => {
    const price = item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white bg-gray-100">
      <div className="w-full max-w-4xl m-5 bg-black border-2 border-gray-300 rounded-lg shadow-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <p className="text-center font-bold text-xl sm:text-3xl text-white mb-4 sm:mb-0">
            Your Cart Details
          </p>
          <button
            onClick={btnclear}
            className="mt-4 sm:mt-0 px-5 py-2 sm:py-1 hover:bg-orange-400 active:bg-orange-200 text-[1.5rem] sm:text-[1rem] border-2 border-orange-300 rounded-lg"
          >
            Clear
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center p-6">
            <img src={EmptyCart} alt="Empty Cart" className="mx-auto mb-6" />
            <p className="text-gray-200 mb-8">
              You can go to the home page to browse and add items to your cart.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600"
            >
              Go to Home
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-between p-3 gap-5">
            <div className="flex-grow mb-5 bg-gray-800">
              {items.map((item, index) => {
                const {
                  name,
                  price,
                  description,
                  ratings,
                  imageId,
                  defaultPrice,
                } = item?.card?.info;
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row mt-2 pb-2 justify-between border-b-2 border-gray-500"
                  >
                    <div className="p-4 w-full md:w-2/3">
                      <p className="font-semibold text-lg">{name}</p>
                      <p className="font-semibold text-lg">
                        Rs-{price ? price / 100 : defaultPrice / 100}
                      </p>
                      <p className="text-orange-500 font-bold">
                        ⭐ {ratings.aggregatedRating?.rating || 4.5}
                      </p>
                      <p className="text-sm text-gray-200">{description}</p>
                    </div>

                    <div className="relative w-full md:w-[200px] h-[150px] mt-4 md:mt-0 rounded-2xl">
                      <img
                        className="w-full h-full object-cover rounded-2xl"
                        src={CDNIMG + imageId}
                        alt=""
                      />
                      <button
                        onClick={() => btnclicked(index)}
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hover:bg-orange-400 active:bg-orange-500 bg-orange-500 px-5 py-2 rounded-full text-white font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-800 p-4 w-full sm:w-[300px] rounded-2xl">
              <p className="text-[1rem] font-semibold">
                Total Items = <span className="text-orange-500">{items.length}</span>
              </p>
              <p className="text-[1rem] font-semibold">
                Total Price Rs = <span className="text-orange-500">{totalPrice}₹</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
