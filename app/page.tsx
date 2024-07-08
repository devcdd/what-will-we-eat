"use client"

import Image from "next/image"
import { useRestaurantList } from "@/hooks/useRestaurantList"
import RestaurantCard from "@/components/card/RestaurantCard"

export default function Home() {
  const restaurantList = useRestaurantList()

  if (restaurantList.isLoading) {
    return (
      <section className={"w-screen h-screen flex justify-center items-center"}>
        <Image
          src={"/spinner/pacman.gif"}
          alt={"Loading"}
          width={100}
          height={100}
        />
      </section>
    )
  }

  return (
    <section className={"h-full grid grid-cols-1 md:grid-cols-2 gap-2"}>
      {restaurantList.data?.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </section>
  )
}
