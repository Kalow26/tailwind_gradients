import { colorScheme } from "@/data/colorData";

export const generateTailwindClass = (colorHexValue, orientation) => {
  const orientationMap = {
    "to top": "bg-gradient-to-t",
    "to right": "bg-gradient-to-r",
    "to bottom": "bg-gradient-to-b",
    "to left": "bg-gradient-to-l",
  };
  const orientationClass = orientationMap[orientation];
  const colorName = colorScheme.find(
    (color) => color.hex === colorHexValue
  ).name;
  const colorClass = `from-${colorName}`;
  const gradientClass = `${orientationClass} ${colorClass}`;
  return gradientClass;
};
