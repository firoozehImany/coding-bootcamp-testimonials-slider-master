import Content from "./Content";
import Frame from "./Frame";

export default function Slide({ data }) {
  return (
    <div className="relative w-full xl:h-full flex flex-col-reverse xl:flex-row items-center justify-center gap-16 xl:justify-end xl:pt-0 md:pt-[10%] pt-[20%]">
      <div className="xl:absolute z-10 flex flex-col items-center xl:items-start w-full">
        <img
          src="/images/pattern-quotes.svg"
          alt="pattern-quotes"
          className="w-16 md:w-24 xl:w-auto -mb-6 md:-mb-8 xl:-mb-10 xl:ml-24"
        />
        <div className="relative z-10">
          <Content data={data} />
        </div>
      </div>
      <div className="xl:w-[539px] md:w-[500px] w-10/12 md:max-w-full">
        <Frame src={data.image} alt={data.name} />
      </div>
    </div>
  );
}