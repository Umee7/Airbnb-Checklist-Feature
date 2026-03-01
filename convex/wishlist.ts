import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const toggleWishlist = mutation({
  args: { listingId: v.string() },
  handler: async (ctx, { listingId }) => {
    const existing = await ctx.db
      .query("wishlistItems")
      .withIndex("by_listing", (q) => q.eq("listingId", listingId))
      .unique();

    if (existing) {
      await ctx.db.delete(existing._id);
      return { liked: false };
    }

    await ctx.db.insert("wishlistItems", {
      listingId,
      createdAt: Date.now(),
    });

    return { liked: true };
  },
});

export const getWishlistIds = query({
  handler: async (ctx) => {
    const items = await ctx.db.query("wishlistItems").collect();
    return items.map((i) => i.listingId);
  },
});
