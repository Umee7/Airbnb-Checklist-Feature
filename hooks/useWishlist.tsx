// import { useState } from "react";
// import { useMutation, useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";

// export function useWishlist() {
//   const toggleWishlist = useMutation(api.wishlist.toggleWishlist);
//   const likedIds = useQuery(api.wishlist.getWishlistIds) ?? [];

//   const [localLikes, setLocalLikes] = useState<Record<string, boolean>>({});

//   const isLiked = (id: string) => localLikes[id] ?? likedIds.includes(id);

//   const toggleLike = async (id: string) => {
//     const next = !isLiked(id);

//     setLocalLikes((prev) => ({
//       ...prev,
//       [id]: next,
//     }));

//     try {
//       await toggleWishlist({ listingId: id });
//     } catch {
//       setLocalLikes((prev) => ({
//         ...prev,
//         [id]: !next,
//       }));
//     }
//   };

//   return {
//     likedIds,
//     isLiked,
//     toggleLike,
//   };
// }

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useSyncExternalStore } from "react";

/**
 * GLOBAL optimistic store
 */

let localLikes: Record<string, boolean> = {};
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setLocalLike(id: string, value: boolean) {
  localLikes = { ...localLikes, [id]: value };
  emit();
}

function getSnapshot() {
  return localLikes;
}

export function useWishlist() {
  const toggleWishlist = useMutation(api.wishlist.toggleWishlist);

  const backendLikes = useQuery(api.wishlist.getWishlistIds) ?? [];

  const optimisticLikes = useSyncExternalStore(subscribe, getSnapshot);

  const isLiked = (id: string) =>
    optimisticLikes[id] ?? backendLikes.includes(id);

  const toggleLike = async (id: string) => {
    const next = !isLiked(id);

    // optimistic update (GLOBAL)
    setLocalLike(id, next);

    try {
      await toggleWishlist({ listingId: id });
    } catch {
      // rollback
      setLocalLike(id, !next);
    }
  };

  return {
    isLiked,
    toggleLike,
  };
}
