import Slide from "./Slide";

export default function SliderContainer({ data, direction, currentIndex }) {
  const animationClass =
    direction === "next"
      ? "animate-next"
      : direction === "prev"
        ? "animate-prev"
        : "";
  return (
    <div key={currentIndex} className={`xl:w-[1110px] ${animationClass}`}>
      <Slide data={data} />
    </div>
  );
}