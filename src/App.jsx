import { useSlider } from "./hooks/useSlider";
import { SLIDES_DATA } from "./constants/data";
import Controls from "./components/Controls";
import Viewer from "./components/Viewer";
import Background from "./components/Background";

export default function App() {
  const { currentIndex, direction, isAnimated, handleNext, handlePrev } =
    useSlider(SLIDES_DATA.length);
  const currentSlide = SLIDES_DATA[currentIndex];

  return (
    <main className="w-full flex items-center justify-center">
      <div className="md:w-[1110px] mt-[113px]">
        <Viewer
          key={currentIndex}
          data={currentSlide}
          direction={direction}
          isAnimated={isAnimated}
        />{" "}
      </div>
      <div className="absolute z-10 bottom-[120px] right-[528px]">
        <Controls onNext={handleNext} onPrev={handlePrev} />
      </div>
      <div>
        <Background />
      </div>
    </main>
  );
}
