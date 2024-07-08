export type RestaurantType = "한식" | "중식" | "일식" | "양식" | "기타"
export interface Restaurant {
  id: string
  restaurant_name: string
  restaurant_location: string
  restaurant_type: RestaurantType
  restaurant_description: string
  restaurant_image: string
}
