import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/userProfileForm";


export default function UserProfilePage() {
  const {currentUser , isLoading : isGetLoading } = useGetMyUser();
  const {updateUser, isLoading : isUpdateLoading} = useUpdateMyUser();
  if(isGetLoading){
    return <span>Loading..</span>
  }
  if(!currentUser){
    return <span> unable to lead user profile </span>
  }

  return (
    <UserProfileForm currentUser = { currentUser} onSave={updateUser} isLoading={isUpdateLoading}  /> 
  )
}
