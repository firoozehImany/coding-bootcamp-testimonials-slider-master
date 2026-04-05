export default function Controls({ onNext, onPrev }) {
  return (
    <div className="flex justify-center bg-white shadow-lg overflow-hidden rounded-4xl">
      {/* دکمه فقط مسئول خبر دادنِ کلیک است */}
      <button 
        onClick={onPrev} // هیچ منطقی اینجا نیست، فقط پاس دادن به بیرون
        className="py-[18px] px-[23px] hover:bg-gray-100 transition-colors"
      >
        <img src="/images/icon-prev.svg" alt="Previous" />
      </button>

      <button 
        onClick={onNext}
        className="py-[18px] px-[23px] hover:bg-gray-100 transition-colors"
      >
        <img src="/images/icon-next.svg" alt="Next" />
      </button>
    </div>
  );
}