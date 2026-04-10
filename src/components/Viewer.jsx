import Details from "./Details";
import Frame from "./Frame";

export default function Viewer({ data, direction, isAnimated }) {
  const animationClass = isAnimated 
    ? (direction === 'next' ? 'animate-next' : 'animate-prev') 
    : '';

  return (
    <div className="relative w-full">
      <div className={`flex flex-col md:flex-row items-center justify-end ${animationClass}`}>
        <div className="absolute left-0 top-[165.5px] z-10">
          <Details data={data} />
        </div>
        <div className="w-[539px]">
          <Frame src={data.image} alt={data.name} />
        </div>
      </div>
    </div>
  );
}