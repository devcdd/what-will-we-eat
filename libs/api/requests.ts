import { supabase } from "@/libs/api/wrapper"
import { Restaurant } from "@/types/requests"

export const getRestaurantList = async (): Promise<Restaurant[] | null> => {
  try {
    const response = await supabase.from("restaurantList").select()
    return response.data
  } catch (e) {
    return null
  }
}
