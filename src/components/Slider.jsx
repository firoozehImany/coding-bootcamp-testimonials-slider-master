import SlideViewer from "./SlideViewer";
import Controls from "./Controls";

export default function Slider({
  data,
  direction,
  currentIndex,
  onNext,
  onPrev,
}) {
  return (
    <div className="relative flex flex-col justify-between items-center w-full">
      <SlideViewer 
        data={data}
        direction={direction}
        currentIndex={currentIndex}
      />

      <div className="absolute z-10 -bottom-[16px] right-[528px]">
        <Controls onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
}
