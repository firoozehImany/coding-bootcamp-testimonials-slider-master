import Details from "./Details";
import Frame from "./Frame";

export default function Viewer({ data }) {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-end gap-12 md:gap-0">

      {/* بخش متن - عرض ۵۰ درصد در دسکتاپ */}
      <div className="absolute left-0 top-[165.5px] flex justify-center md:justify-start z-10">
        <Details data={data} />
      </div>
      {/* بخش تصویر - عرض ۵۰ درصد در دسکتاپ */}
      <div className="w-[536px] ">
        <Frame src={data.image} alt={data.name} />
      </div>
    </div>
  );
}
