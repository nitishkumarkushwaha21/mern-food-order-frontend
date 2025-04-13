import { SearchState } from "@/pages/SearchPage";
import { RestaurtSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  searchstate: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurtSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchstate.searchQuery);
    params.set("page", searchstate.page.toString());
    params.set("selectedCuisines", searchstate.selectedCuisines.join(","));
    params.set("sortOption", searchstate.sortOption);

    const response = await fetch(`${API_BASE_URL}/api/restaurant/search/${city}
  ?${params.toString()}`);

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }
    return response.json();
  };
  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchstate],
    createSearchRequest,
    {
      enabled: !!city, // Only run the query if city is provided
    }
  );
  return { results, isLoading };
};
