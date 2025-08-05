// import { z } from 'zod';

import { useForm } from "@tanstack/react-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// const FormSchema = z.object({
//   daily_calories: z.number()
//     .min(1000, { message: "Calories must be at least 1000" })
//     .max(5000, { message: "Calories must be at most 5000" })
//     .optional(),
//   daily_meals: z.string().optional(),
// });

export function App() {
  const form = useForm({
    defaultValues: {
      daily_calories: undefined,
      daily_meals: "3",
    },
    // validate: FormSchema,
    onSubmit: async (values) => {
      console.log(values.value);
    },
  });

  return (
    <div className="border p-8">
      <h1 className="text-3xl font-bold text-gray-600">CaloCraft</h1>

      <p>Let's start</p>

      <div>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <FormField
              control={form.control}
              name="daily_calories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount of calories per day</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1400" {...field} />
                  </FormControl>
                  <FormDescription>
                    How many calories do you want to consume per day?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
