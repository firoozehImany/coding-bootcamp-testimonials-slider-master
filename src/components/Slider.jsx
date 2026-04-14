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
                      top-1/2 left-1/2 -translate-x-1/2 
                      md:top-auto md:translate-y-0 md:left-auto md:-translate-x-0 md:bottom-[-28px] md:right-[360px]"
      >
        <Controls onNext={onNext} onPrev={onPrev} />
      </div>
    </div>
  );
}
