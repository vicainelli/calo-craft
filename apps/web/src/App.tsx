import { z } from 'zod';
import { useForm } from '@tanstack/react-form'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";

export function App() {
  return (
    <div className="border p-8">
      <h1 className="text-3xl font-bold text-gray-600">CaloCraft</h1>

      <p>Let'start</p>

      <div>
        <form>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="daily_calories">Amount of calories per day</label>
              <Input
                type="number"
                name="daily_calories"
                id="daily_calories"
                placeholder="1400"
              />
            </div>
            <div>
              <label htmlFor="daily_meals">Daily meals</label>
              <Select name="daily_meals">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Daily meals" />
                </SelectTrigger>
                <SelectContent id="daily_meals">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="preferences_and_allergies">Preferences and allergies</label>
              <Textarea id="preferences_and_allergies"></Textarea>
              <p className="text-sm">Describe as much as possible your food preferences, restrictions, and allergies</p>
            </div>
            <div>
              <Button type="submit">confirm</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
