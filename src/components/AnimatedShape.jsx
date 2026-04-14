export default function AnimatedShape() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center md:justify-end">
      <div className="relative w-[800px] h-[800px] scale-[0.5] md:scale-100 origin-center md:origin-right md:mr-20">
        <div
          className="absolute top-[10%] right-[20%] w-[460px] h-[320px] bg-light-purple animate-fluid -rotate-[10deg]"
          style={{ borderRadius: "69% 31% 41% 59% / 76% 50% 30% 24%" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[360px] h-[600px] bg-dark-purple animate-fluid -rotate-[40deg]"
          style={{ borderRadius: "69% 31% 41% 59% / 76% 50% 30% 24%" }}
        />
      </div>
    </div>
  );
}
