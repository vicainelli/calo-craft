import { useCallback } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppForm } from "@/components/ui/tanstack-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  daily_calories: z.coerce.number().min(500, {
    message: "Daily calories should be at least 500.",
  }),
  daily_meals: z.coerce
    .number()
    .min(1, {
      message: "You need at least 1 meal per day.",
    })
    .max(8, {
      message: "Maximum 8 meals per day.",
    }),
  preferences_and_allergies: z.string().optional(),
  prefered_stores: z.object({
    walmart: z.boolean().optional(),
    kroger: z.boolean().optional(),
    target: z.boolean().optional(),
    wholeFoods: z.boolean().optional(),
  }),
});

export function EntryForm() {
  const form = useAppForm({
    validators: {
      onChange: (values) => {
        try {
          FormSchema.parse(values);
          return undefined;
        } catch (error) {
          return (error as z.ZodError).format();
        }
      },
    },
    defaultValues: {
      daily_calories: 2000,
      daily_meals: 3,
      preferences_and_allergies: "",
      prefered_stores: {
        walmart: false,
        kroger: false,
        target: false,
        wholeFoods: false,
      },
    },
    onSubmit: ({ value }) => console.log(value),
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form],
  );
  return (
    <form.AppForm>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <form.AppField
          name="daily_calories"
          // biome-ignore lint/correctness/noChildrenProp: TODO check this
          children={(field) => (
            <field.FormItem>
              <field.FormLabel>Daily Calories Goal</field.FormLabel>
              <field.FormControl>
                <Input
                  type="number"
                  placeholder="2000"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                  onBlur={field.handleBlur}
                />
              </field.FormControl>
              <field.FormDescription>
                Enter your desired daily calorie intake.
              </field.FormDescription>
              <field.FormMessage />
            </field.FormItem>
          )}
        />

        <form.AppField
          name="daily_meals"
          // biome-ignore lint/correctness/noChildrenProp: TODO check this
          children={(field) => (
            <field.FormItem>
              <field.FormLabel>Number of Meals Per Day</field.FormLabel>
              <field.FormControl>
                <Select
                  value={field.state.value.toString()}
                  onValueChange={(value) => field.handleChange(Number(value))}
                  onOpenChange={() => field.handleBlur()}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select number of meals" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                      <SelectItem key={number} value={number.toString()}>
                        {number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </field.FormControl>
              <field.FormDescription>
                How many meals do you want to have per day?
              </field.FormDescription>
              <field.FormMessage />
            </field.FormItem>
          )}
        />

        <form.AppField
          name="preferences_and_allergies"
          // biome-ignore lint/correctness/noChildrenProp: TODO check this
          children={(field) => (
            <field.FormItem>
              <field.FormLabel>Preferences and Allergies</field.FormLabel>
              <field.FormControl>
                <Textarea
                  placeholder="Enter your dietary preferences and allergies here..."
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              </field.FormControl>
              <field.FormDescription>
                List any food preferences, allergies, or dietary restrictions.
              </field.FormDescription>
              <field.FormMessage />
            </field.FormItem>
          )}
        />

        <div className="space-y-2">
          <h3 className="text-sm font-medium mb-2">Preferred Stores</h3>
          <div className="grid grid-cols-2 gap-4">
            <form.AppField
              name="prefered_stores.walmart"
              // biome-ignore lint/correctness/noChildrenProp: TODO check this
              children={(field) => (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="walmart"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                  />
                  <label
                    htmlFor="walmart"
                    className="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Walmart
                  </label>
                </div>
              )}
            />

            <form.AppField
              name="prefered_stores.kroger"
              // biome-ignore lint/correctness/noChildrenProp: TODO check this
              children={(field) => (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="kroger"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                  />
                  <label
                    htmlFor="kroger"
                    className="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Kroger
                  </label>
                </div>
              )}
            />

            <form.AppField
              name="prefered_stores.target"
              // biome-ignore lint/correctness/noChildrenProp: TODO check this
              children={(field) => (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="target"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                  />
                  <label
                    htmlFor="target"
                    className="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Target
                  </label>
                </div>
              )}
            />

            <form.AppField
              name="prefered_stores.wholeFoods"
              // biome-ignore lint/correctness/noChildrenProp: TODO check this
              children={(field) => (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="wholeFoods"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                  />
                  <label
                    htmlFor="wholeFoods"
                    className="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Whole Foods
                  </label>
                </div>
              )}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </form.AppForm>
  );
}
