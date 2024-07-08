"use client"

import React from "react"
import { useRestaurantList } from "@/hooks/useRestaurantList"
import Image from "next/image"
import RestaurantCard from "@/components/card/RestaurantCard"

interface PageProps {}

const Page = (props: PageProps) => {
  const restaurantList = useRestaurantList()

  const [count, setCount] = React.useState(0)

  if (restaurantList.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image
          src={"/spinner/pacman.gif"}
          alt={"Loading"}
          width={100}
          height={100}
        />
      </div>
    )
  }

  return (
    <section className={"w-full flex flex-col justify-center items-center"}>
      <div>오늘 점심 뭐 먹을까요?</div>
      <section
        className={`relative flex flex-col justify-center items-center gap-2 w-full h-[200px] overflow-hidden`}
      >
        <section
          className={`transition-transform duration-1000 animate-spinSlot`}
        >
          {restaurantList.data?.map((restaurant) => (
            <article key={restaurant.id} className={"w-[400px]"}>
              <RestaurantCard restaurant={restaurant} />
            </article>
          ))}
        </section>
      </section>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Random Pick
      </button>
    </section>
  )
}

export default Page
