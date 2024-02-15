"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useStore } from "../store/store";

const GradientOptions = () => {
  const orientation = useStore((state) => state.orientation);
  const setOrientation = useStore((state) => state.setOrientation);
  const setGradientPosition = useStore((state) => state.setGradientPosition);
  return (
    <form className="flex flex-col justify-between border border-slate-300 p-4 rounded-2xl">
      <Label htmlFor="orientation" className="pb-4">
        Choose your gradient orientation
      </Label>
      <select
        name="orientation"
        id="orientation"
        onChange={(e) => setOrientation(e.currentTarget.value)}
        value={orientation} // Set the default value here
        className="w-full p-2 border border-slate-900 rounded-md"
      >
        <option value="to right">Right</option>
        <option value="to left">Left</option>
        <option value="to top">Top</option>
        <option value="to bottom">Bottom</option>
      </select>

      <RadioGroup defaultValue="from" className="pt-6">
        <Label htmlFor="orientation" className="pb-2">
          Choose your color position
        </Label>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="from"
            id="from"
            onClick={(e) => setGradientPosition(e.currentTarget.value)}
          />
          <Label htmlFor="from">from</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="to"
            id="to"
            onClick={(e) => setGradientPosition(e.currentTarget.value)}
          />
          <Label htmlFor="to">to</Label>
        </div>
      </RadioGroup>
    </form>
  );
};

export default GradientOptions;
