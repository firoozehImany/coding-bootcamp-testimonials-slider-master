import { useSlider } from './hooks/useSlider';
import { SLIDES_DATA } from './constants/data';
import Controls from './components/Controls';
import Viewer from "./components/Viewer";
import Background from './components/Background';

export default function App() {
const { currentIndex, handleNext, handlePrev } = useSlider(SLIDES_DATA.length);
  const currentSlide = SLIDES_DATA[currentIndex];
  return (
    <main className="w-full flex items-center justify-center bg-white">
      <div className="md:w-[1094px] mt-[112px]">
        <Viewer data={currentSlide} />
      </div>
      <div className='absolute z-10 bottom-28 right-[524px]'>
        <Controls onNext={handleNext} onPrev={handlePrev} />
      </div>
      <div>
        <Background/>
      </div>
    </main>
  );
}
