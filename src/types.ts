export type User = {
  _id : string ;
  email : string;
  name : string ;
   addressLine1 : string;
   city : string ;
   country : string;
}

export type Restaurant = {
  _id : string ;
  user : string;
  restaurantName : string;
  city : string ;
   country : string;
   deliveryPrice : number;
   estimatedDeliveryTime : number;
   cuisines : string[];
   menuItems : {name : string , price : number}[];
   imageUrl : string;
   lastUpdated :string;
}
export type RestaurtSearchResponse = {
  data : Restaurant[];
  pagination : {
    page : number;
    pages : number;
    pageSize : number;
    total : number;
  };
}