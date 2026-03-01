import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addRecentlyViewed = mutation({
  args: { listingId: v.string() },
  handler: async (ctx, { listingId }) => {
    const existing = await ctx.db
      .query("recentlyViewed")
      .withIndex("by_listing", (q) => q.eq("listingId", listingId))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        viewedAt: Date.now(),
      });
    } else {
      await ctx.db.insert("recentlyViewed", {
        listingId,
        viewedAt: Date.now(),
      });
    }

    // keep max 20
    const all = await ctx.db
      .query("recentlyViewed")
      .withIndex("by_viewedAt")
      .order("desc")
      .collect();

    if (all.length > 20) {
      for (const item of all.slice(20)) {
        await ctx.db.delete(item._id);
      }
    }
  },
});

export const getRecentlyViewed = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("recentlyViewed")
      .withIndex("by_viewedAt")
      .order("desc")
      .collect();
  },
});
