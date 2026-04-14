import { useSlider } from "./hooks/useSlider";
import { SLIDES_DATA } from "./constants/data";
import Slider from "./components/Slider";
import Background from "./components/Background";

export default function App() {
  const { currentIndex, direction, handleNext, handlePrev } = useSlider(
    SLIDES_DATA.length,
  );

  return (
    <main className="relative w-full md:h-screen flex items-center justify-center overflow-hidden px-10">
      <Slider
        data={SLIDES_DATA[currentIndex]}
        direction={direction}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <Background />
    </main>
  );
}