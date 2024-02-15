import { colorScheme } from "@/data/colorData";
import ColorBoxGenerator from "./ColorBoxGenerator";

const GradientGrid = () => {
  return (
    <div className="overflow-y-auto space-y-2 scrollbar">
      {colorScheme.map((color, index) => (
        <div
          key={color.id + index}
          className="flex items-center justify-center mx-4"
        >
          <p className="text-sm w-[33%]">{color.tailwindColorName}</p>
          <div className="flex gap-2">
            {color.colorsRef.map((colorRef) => (
              <ColorBoxGenerator
                key={colorRef.hexValue}
                hexValue={colorRef.hexValue}
                tailwindColorName={color.tailwindColorName}
                tailwindRefColor={colorRef.tailwindRef}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradientGrid;
