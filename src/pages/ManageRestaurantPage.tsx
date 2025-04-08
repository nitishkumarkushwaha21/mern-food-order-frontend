import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/manageRestaurantForm";



export default function ManageRestaurantPage() {
  const {createRestaurant , isLoading : isCreateLoading} = useCreateMyRestaurant();
  const {restaurant} = useGetMyRestaurant();
  const {updateRestaurant , isLoading : isupdateLoading} = useUpdateMyRestaurant();

  const isEditing = !!restaurant;
  return (

   <ManageRestaurantForm 
   restaurant={restaurant} 
   onSave={ isEditing ? updateRestaurant : createRestaurant}
    isLoading={isCreateLoading || isupdateLoading}
   
   />
  )
}
