import { useQuery } from "@tanstack/react-query"
import { getRestaurantList } from "@/libs/api/requests"
import { Restaurant } from "@/types/requests"

export const useRestaurantList = () => {
  const { data, error, isLoading } = useQuery<
    Restaurant[],
    Error,
    Restaurant[]
  >({
    queryKey: ["restaurantList"],
    queryFn: getRestaurantList,
    staleTime: 1000 * 60 * 60,
  })

  return { data, error, isLoading }
}
