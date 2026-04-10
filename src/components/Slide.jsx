import Content from "./Content";
import Frame from "./Frame";

export default function Slide({ data }) {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-end">
      <div className="absolute left-0 top-[165.5px] z-10">
        <Content data={data} />
      </div>
      <div className="md:w-[539px]">
        <Frame src={data.image} alt={data.name} />
      </div>
    </div>
  );
}
