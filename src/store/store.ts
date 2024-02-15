import { create } from "zustand";

type StoreState = {
  orientation: string;
  startColor: string;
  endColor: string;
  gradientPosition: string;
  tailwindStartRefColor: number;
  tailwindEndRefColor: number;
  tailwindStartColorName: string;
  tailwindEndColorName: string;
};

type Action = {
  setOrientation: (orientation: StoreState["orientation"]) => void;
  setStartColor: (startColor: StoreState["startColor"]) => void;
  setEndColor: (endColor: StoreState["endColor"]) => void;
  setGradientPosition: (
    gradientPosition: StoreState["gradientPosition"]
  ) => void;
  setTailwindStartRefColor: (
    tailwindStartRefColor: StoreState["tailwindStartRefColor"]
  ) => void;
  setTailwindEndRefColor: (
    tailwindEndRefColor: StoreState["tailwindEndRefColor"]
  ) => void;
  setTailwindStartColorName: (
    tailwindStartColorName: StoreState["tailwindStartColorName"]
  ) => void;
  setTailwindEndColorName: (
    tailwindEndColorName: StoreState["tailwindEndColorName"]
  ) => void;
};

export const useStore = create<StoreState & Action>((set) => ({
  orientation: "to left",
  gradientPosition: "from",
  startColor: "#f8fafc",
  endColor: "#475569",
  tailwindStartRefColor: 50,
  tailwindEndRefColor: 600,
  tailwindStartColorName: "slate",
  tailwindEndColorName: "slate",
  setOrientation: (orientation) => set(() => ({ orientation: orientation })),
  setStartColor: (startColor) => set(() => ({ startColor: startColor })),
  setEndColor: (endColor) => set(() => ({ endColor: endColor })),
  setGradientPosition: (gradientPosition) =>
    set(() => ({ gradientPosition: gradientPosition })),
  setTailwindStartRefColor: (tailwindStartRefColor) =>
    set(() => ({ tailwindStartRefColor: tailwindStartRefColor })),
  setTailwindEndRefColor: (tailwindEndRefColor) =>
    set(() => ({ tailwindEndRefColor: tailwindEndRefColor })),
  setTailwindStartColorName: (tailwindStartColorName) =>
    set(() => ({ tailwindStartColorName: tailwindStartColorName })),
  setTailwindEndColorName: (tailwindEndColorName) =>
    set(() => ({ tailwindEndColorName: tailwindEndColorName })),
}));
