import GradientGrid from "./GradientGrid";
import GradientOptions from "./GradientOptions";
import GradientPreview from "./GradientPreview";

const ColorSelector = () => {
  return (
    <section className="xl:container mt-10">
      <div className="w-full h-[700px] border border-slate-300 p-4 rounded-2xl shadow-md">
        <div className="flex h-full justify-between flex-1">
          <GradientGrid />
          <div className="flex flex-col p-6 flex-1 gap-6">
            <GradientOptions />
            <GradientPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSelector;
