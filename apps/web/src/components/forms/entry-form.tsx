import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppForm } from "@/components/ui/tanstack-form";
import { Textarea } from "@/components/ui/textarea";

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
  preferred_stores: z.array(z.string()).optional(),
});

// TODO get these from a config API, based on the user location
const PREFERED_STORES = [
  { name: "Albert Heijn", value: "albert_heijn" },
  { name: "Jumbo", value: "jumbo" },
  { name: "Lidl", value: "lidl" },
  { name: "Plus", value: "plus" },
  { name: "Dirk", value: "dirk" },
  { name: "Coop", value: "coop" },
  { name: "Spar", value: "spar" },
];

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
      preferred_stores: [],
    },
    onSubmit: ({ value }) => console.log(value),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

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
          <div className="grid grid-cols-3 gap-4">
            <form.AppField
              name="preferred_stores"
              // biome-ignore lint/correctness/noChildrenProp: TODO check this
              children={(field) => (
                <>
                  {PREFERED_STORES.map((store) => (
                    <div
                      key={store.value}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        id={store.value}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={
                          field.state.value?.includes(store.value) || false
                        }
                        onChange={(e) => {
                          const currentValues = field.state.value || [];
                          if (e.target.checked) {
                            field.handleChange([...currentValues, store.value]);
                          } else {
                            field.handleChange(
                              currentValues.filter((v) => v !== store.value),
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={store.value}
                        className="text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        {store.name}
                      </label>
                    </div>
                  ))}
                </>
              )}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </form.AppForm>
  );
}
