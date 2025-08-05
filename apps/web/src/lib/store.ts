import { Store } from "@tanstack/react-store";
import { z } from "zod";

const storeSchema = z.object({
  daily_calories: z.number().int().min(0).default(0),
});

export type StoreSchema = z.infer<typeof storeSchema>;

export const store = new Store({ daily_calories: 0 });

store.subscribe((state) => {
  try {
    storeSchema.parse(state);
  } catch (error: unknown) {
    const zodError = error as z.ZodError;
    console.error("Invalid state data:", state);
    console.error("Store validation error:", zodError.issues);
		throw new Error(
		  `Store validation failed: ${zodError.issues.map((e) => e.message).join(', ')}`
		);
  }
});
