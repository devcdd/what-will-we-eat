import React from "react"

const RestaurantCard = ({ restaurant }) => {
  const {
    restaurant_name,
    restaurant_type,
    restaurant_description,
    restaurant_image,
  } = restaurant

  return (
    <div className="w-full h-[200px] mx-auto bg-gray-300 rounded-lg overflow-hidden">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={restaurant_image}
            alt={restaurant_name}
            className="object-cover h-32 w-full"
          />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-bold mb-2">{restaurant_name}</h2>
          <p className="text-sm text-gray-600 mb-2">{restaurant_type}</p>
          <p className="text-sm text-gray-700">{restaurant_description}</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
