import AnimatedShape from "./AnimatedShape";

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none -z-10 overflow-hidden px-6">
      
      <img
        src="/images/pattern-curve.svg"
        alt=""
        className="absolute bottom-0 left-0 w-auto h-auto"
      />
      
      <div className="relative mx-auto w-full max-w-[1280px] h-full flex flex-col-reverse items-center justify-end gap-14 md:pt-0 pt-20 md:block">
        <div className="relative md:absolute md:top-1/2 md:-translate-y-[150%] md:left-10">
          <img
            src="/images/pattern-quotes.svg"
            alt=""
            className="md:w-fit md:h-fit w-16 md:px-40"
          />
        </div>
        <div className="relative flex justify-center items-center md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0">
          <AnimatedShape />
          <img
            src="/images/pattern-bg.svg"
            alt=""
            className="relative z-0 w-fit h-fit"
          />
        </div>
        
      </div>
    </div>
  );
}