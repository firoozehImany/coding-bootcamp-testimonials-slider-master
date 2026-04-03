import { SLIDES_DATA } from "./constants/data";
import Viewer from "./components/Viewer";

export default function App() {
  const currentSlide = SLIDES_DATA[0];

  return (
    <main className="w-full flex items-center justify-center bg-white">
      <div className="md:w-[1100px] mt-[110px]">
        <Viewer data={currentSlide} />
      </div>
    </main>
  );
}
