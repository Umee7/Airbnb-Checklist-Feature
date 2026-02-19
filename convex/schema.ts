import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  checklistItems: defineTable({
    title: v.string(),
    completed: v.boolean(),
    day: v.string(),
    time: v.optional(v.string()),
    category: v.string(),
  }).index("by_day", ["day"]),

  wishlistCollections: defineTable({
    name: v.string(),
    createdAt: v.number(),
  }),

  wishlistItems: defineTable({
    listingId: v.string(),
    collectionId: v.id("wishlistCollections"),
    createdAt: v.number(),
  }),

  recentlyViewed: defineTable({
    listingId: v.string(),
    viewedAt: v.number(),
  }),
});
