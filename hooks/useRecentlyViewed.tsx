import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useRecentlyViewed() {
  const addViewed = useMutation(api.recentlyViewed.addRecentlyViewed);

  const recent = useQuery(api.recentlyViewed.getRecentlyViewed) ?? [];

  const trackView = async (id: string) => {
    await addViewed({ listingId: id });
  };

  return {
    recent,
    trackView,
  };
}
