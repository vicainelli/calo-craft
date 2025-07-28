import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export function App() {
  return <>
    <h1 className="text-3xl font-bold text-gray-600">CaloCraft</h1>

    <p>Let'start</p>

    <div>
      <form>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="daily_calories">Amount of calories per day</label>
            <Input type="number" name="daily_calories" id="daily_calories" placeholder="1400" />
          </div>
          <div>
            <Button>confirm</Button>
          </div>
        </div>
      </form>
    </div>
  </>;
}
