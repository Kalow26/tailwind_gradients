"use client";

import { copyToClipboard } from "@/utils/copyToClipBoard";
import { useRef, useState } from "react";
import { useStore } from "../store/store";
import { Button } from "./ui/button";

const GradientPreview = () => {
  const [copied, setCopied] = useState(false);
  const tailwindClassNameRef = useRef<HTMLParagraphElement | null>(null);
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
      <p
        className="text-center p-2 border border-slate-900 font-bold"
        ref={tailwindClassNameRef}
      >
        {tailwindClassName}
      </p>
      <Button
        onClick={() => copyToClipboard({ tailwindClassNameRef, setCopied })}
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </Button>
    </>
  );
};

export default GradientPreview;
