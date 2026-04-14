export default function Controls({ onNext, onPrev }) {
  return (
    <div className="flex justify-center bg-canvas-base shadow-lg/5 shadow-shadow overflow-hidden rounded-4xl md:scale-100 scale-70 scale-">
      <button
        onClick={onPrev}
        className="py-5 px-6 hover:bg-light-purple transition-colors cursor-pointer"
      >
        <img src="/images/icon-prev.svg" alt="Previous" />
      </button>

      <button
        onClick={onNext}
        className="py-5 px-6 hover:bg-light-purple transition-colors cursor-pointer"
      >
        <img src="/images/icon-next.svg" alt="Next" />
      </button>
    </div>
  );
}
