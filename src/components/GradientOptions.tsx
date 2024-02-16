"use client";
import { Label } from "@/components/ui/label";
import { useStore } from "../store/store";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const GradientOptions = () => {
  const setOrientation = useStore((state) => state.setOrientation);
  const setGradientPosition = useStore((state) => state.setGradientPosition);
  const tailwindStartref = useStore((state) => state.tailwindStartRefColor);
  const tailwindEndref = useStore((state) => state.tailwindEndRefColor);
  const tailwindStartColor = useStore((state) => state.tailwindStartColorName);
  const tailwindEndColor = useStore((state) => state.tailwindEndColorName);
  const startColor = useStore((state) => state.startColor);
  const endColor = useStore((state) => state.endColor);
  const orientation = useStore((state) => state.orientation);

  return (
    <div className="flex flex-col justify-between border border-slate-300 p-4 rounded-2xl">
      <Label className="text-sm pb-2">Gradient orientation</Label>
      <div className="flex gap-2">
        <Button
          value="to right"
          onClick={(e) => setOrientation(e.currentTarget.value)}
          className={`${orientation === "to right" ? "bg-blue-500" : ""}`}
        >
          Right
        </Button>
        <Button
          value="to left"
          onClick={(e) => setOrientation(e.currentTarget.value)}
          className={`${orientation === "to left" ? "bg-blue-500" : ""}`}
        >
          Left
        </Button>
        <Button
          value="to bottom"
          onClick={(e) => setOrientation(e.currentTarget.value)}
          className={`${orientation === "to bottom" ? "bg-blue-500" : ""}`}
        >
          Bottom
        </Button>
        <Button
          value="to top"
          onClick={(e) => setOrientation(e.currentTarget.value)}
          className={`${orientation === "to top" ? "bg-blue-500" : ""}`}
        >
          Top
        </Button>
      </div>

      <RadioGroup defaultValue="from" className="pt-6">
        <Label htmlFor="orientation" className="pb-2">
          Choose your color position
        </Label>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            className="hidden"
            value="from"
            id="from"
            onClick={(e) => setGradientPosition(e.currentTarget.value)}
          ></RadioGroupItem>

          <Label
            htmlFor="from"
            className="cursor-pointer w-full h-16 relative rounded-md"
            style={{ backgroundColor: startColor }}
          >
            <span className="p-2 bg-white text-black absolute top-1 left-1 text-xs rounded-md">
              Start Color
            </span>
            <span className="p-2 bg-white text-black absolute bottom-1 right-1 text-xs rounded-md">
              {tailwindStartColor}-{tailwindStartref}
            </span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="to"
            id="to"
            onClick={(e) => setGradientPosition(e.currentTarget.value)}
            className="hidden"
          ></RadioGroupItem>

          <Label
            htmlFor="to"
            className="cursor-pointer w-full h-16 relative rounded-md"
            style={{ backgroundColor: endColor }}
          >
            <span className="p-2 bg-white text-black absolute top-1 left-1 text-xs rounded-md">
              End Color
            </span>
            <span className="p-2 bg-white text-black absolute bottom-1 right-1 text-xs rounded-md">
              {tailwindEndColor}-{tailwindEndref}
            </span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default GradientOptions;
