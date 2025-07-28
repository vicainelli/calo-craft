import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { store } from "@/lib/store";
import { useStore } from "@tanstack/react-store";


export function App() {

const daily_calories = useStore(store, (state) => state.daily_calories);
    const setDailyCalories = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const calories = formData.get("daily_calories");
      if (typeof calories === "string") {
        store.setState({ daily_calories: parseInt(calories, 10) });
      }
    };

  return <>
    <h1 className="text-3xl font-bold text-gray-600">CaloCraft</h1>

    <p>Let'start</p>


    <div>
      {daily_calories <= 0 ? (<form onSubmit={setDailyCalories}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="daily_calories">Amount of calories per day</label>
            <Input type="number" name="daily_calories" id="daily_calories" placeholder="1400" />
          </div>
          <div>
            <Button type="submit">confirm</Button>
          </div>
        </div>
      </form>): (
        <div>
         Your daily calories goal is: {daily_calories}. <Button variant="ghost" onClick={() => store.setState({ daily_calories: 0 })}>Reset</Button>
        </div>
      )}
    </div>
  </>;
}
