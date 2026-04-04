import { useSlider } from './hooks/useSlider';
import { SLIDES_DATA } from './constants/Data';
import Controls from './components/Controls';
import Viewer from "./components/Viewer";

export default function App() {
const { currentIndex, handleNext, handlePrev } = useSlider(SLIDES_DATA.length);
  const currentSlide = SLIDES_DATA[currentIndex];
  return (
    <main className="w-full flex items-center justify-center bg-white">
      <div className="md:w-[1094px] mt-[110px]">
        <Viewer data={currentSlide} />
      </div>
      <div className='absolute z-10 bottom-29 right-[524px]'>
        <Controls onNext={handleNext} onPrev={handlePrev} />
      </div>
    </main>
  );
}
