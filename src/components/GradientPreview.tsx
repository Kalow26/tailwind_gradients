"use client";

import { useStore } from "../store/store";

const GradientPreview = () => {
  const orientation = useStore((state) => state.orientation);
  const startColor = useStore((state) => state.startColor);
  const endColor = useStore((state) => state.endColor);
  const tailwindStartColorName = useStore(
    (state) => state.tailwindStartColorName
  );
  const tailwindStartRefColor = useStore(
    (state) => state.tailwindStartRefColor
  );

  const tailwindEndColorName = useStore((state) => state.tailwindEndColorName);
  const tailwindEndRefColor = useStore((state) => state.tailwindEndRefColor);

  const tailwindClassName = `bg-gradient-to-${orientation.charAt(
    3
  )} from-${tailwindStartColorName}-${tailwindStartRefColor} to-${tailwindEndColorName}-${tailwindEndRefColor}`;

  return (
    <>
      <div
        className="h-full w-full"
        style={{
          background: `linear-gradient(${orientation}, ${startColor}, ${endColor})`,
        }}
      ></div>
      <span className="text-center text-sm">Tailwind Class</span>
      <p className="text-center p-2 border border-slate-900 font-bold">
        {tailwindClassName}
      </p>
    </>
  );
};

export default GradientPreview;
