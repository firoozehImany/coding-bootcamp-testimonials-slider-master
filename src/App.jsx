import { useSlider } from "./hooks/useSlider";
import { SLIDES_DATA } from "./constants/data";
import Controls from "./components/Controls";
import SliderContainer from "./components/SliderContainer";
import Background from "./components/Background";

export default function App() {
  const { currentIndex, direction, handleNext, handlePrev } = useSlider(SLIDES_DATA.length);

  return (
    <main className="w-full flex items-center justify-center">
      
      <SliderContainer 
        data={SLIDES_DATA[currentIndex]} 
        direction={direction} 
        currentIndex={currentIndex} 
      />

      <div className="absolute z-10 bottom-[120px] right-[528px]">
        <Controls onNext={handleNext} onPrev={handlePrev} />
      </div>

      <Background />
    </main>
  );
}