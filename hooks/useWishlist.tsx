import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useWishlist() {
  const toggleWishlist = useMutation(api.wishlist.toggleWishlist);
  const likedIds = useQuery(api.wishlist.getWishlistIds) ?? [];

  const [localLikes, setLocalLikes] = useState<Record<string, boolean>>({});

  const isLiked = (id: string) => localLikes[id] ?? likedIds.includes(id);

  const toggleLike = async (id: string) => {
    const next = !isLiked(id);

    setLocalLikes((prev) => ({
      ...prev,
      [id]: next,
    }));

    try {
      await toggleWishlist({ listingId: id });
    } catch {
      setLocalLikes((prev) => ({
        ...prev,
        [id]: !next,
      }));
    }
  };

  return {
    likedIds,
    isLiked,
    toggleLike,
  };
}
