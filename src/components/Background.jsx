import AnimatedShape from "./AnimatedShape";

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none -z-10 overflow-hidden px-6">
      <img
        src="/images/pattern-curve.svg"
        alt=""
        className="absolute bottom-0 left-0 w-auto h-auto"
      />
      <div className="relative mx-auto w-full max-w-[1280px] h-full xl:pt-0 -md:pt-[10%] pt-[10%] xl:block">
        <div className="relative flex justify-center items-center xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-0">
          <AnimatedShape />
          <img
            src="/images/pattern-bg.svg"
            alt=""
            className="relative z-0 w-fit h-fit md:max-w-full max-w-[350px]"
          />
        </div>
      </div>
    </div>
  );
}