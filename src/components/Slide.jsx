import Content from "./Content";
import Frame from "./Frame";

export default function Slide({ data }) {
  return (
    <div className="relative w-full h-screen md:h-full flex flex-col-reverse gap-16 md:flex-row items-center justify-center gap-24 md:justify-end md:pt-0 pt-16">
      <div className="md:absolute md:top-44 left-0 z-10">
        <Content data={data} />
      </div>
      <div className="md:w-[539px] w-10/12 md:max-w-full max-w-[300px]">
        <Frame src={data.image} alt={data.name} />
      </div>
    </div>
  );
}
