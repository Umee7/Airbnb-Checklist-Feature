import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/*
CREATE
*/
export const createChecklistItem = mutation({
  args: {
    title: v.string(),
    day: v.string(),
    category: v.string(),
    time: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("checklistItems", {
      title: args.title,
      day: args.day,
      category: args.category,
      time: args.time,
      completed: false,
    });
  },
});

/*
READ — ALL ITEMS
*/
export const getChecklistItems = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("checklistItems")
      .withIndex("by_day")
      .order("asc")
      .collect();
  },
});
/*
READ — ITEMS BY DAY
*/
export const getItemsByDay = query({
  args: { day: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("checklistItems")
      .withIndex("by_day", (q) => q.eq("day", args.day))
      .collect();
  },
});

/*
UPDATE — TOGGLE COMPLETE
*/
export const toggleChecklistItem = mutation({
  args: {
    id: v.id("checklistItems"),
    completed: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      completed: args.completed,
    });
  },
});

/*
DELETE
*/
export const deleteChecklistItem = mutation({
  args: {
    id: v.id("checklistItems"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
