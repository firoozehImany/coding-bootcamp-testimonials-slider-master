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
    <div className="relative w-full max-w-[1110px]">
      <SlideViewer
        data={data}
        direction={direction}
        currentIndex={currentIndex}
      />
      <div
        className="absolute z-20 
                      top-[45%] left-1/2 -translate-x-1/2 
                      xl:top-auto xl:translate-y-0 xl:left-auto xl:-translate-x-0 xl:bottom-[-28px] xl:right-[360px]"
      >
        <Controls onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
}
