"use client";
import { useStore } from "../store/store";

interface ColorBoxProps {
  hexValue: string;
  tailwindColorName: string;
  tailwindRefColor: number;
}

const ColorBoxGenerator = ({
  hexValue,
  tailwindColorName,
  tailwindRefColor,
}: ColorBoxProps) => {
  const gradientPosition = useStore((state) => state.gradientPosition);
  const setStartColor = useStore((state) => state.setStartColor);
  const setEndColor = useStore((state) => state.setEndColor);
  const setTailwindStartRefColor = useStore(
    (state) => state.setTailwindStartRefColor
  );
  const setTailwindStartColorName = useStore(
    (state) => state.setTailwindStartColorName
  );
  const setTailwindEndRefColor = useStore(
    (state) => state.setTailwindEndRefColor
  );
  const setTailwindEndColorName = useStore(
    (state) => state.setTailwindEndColorName
  );

  const handleClick = () => {
    if (gradientPosition === "from") {
      setStartColor(hexValue);
      setTailwindStartColorName(tailwindColorName);
      setTailwindStartRefColor(tailwindRefColor);
    } else {
      setEndColor(hexValue);
      setTailwindEndColorName(tailwindColorName);
      setTailwindEndRefColor(tailwindRefColor);
    }
  };

  return (
    <div
      className="h-8 w-8 rounded-md shadow-xs cursor-pointer"
      style={{ backgroundColor: hexValue }}
      onClick={handleClick}
    ></div>
  );
};

export default ColorBoxGenerator;
