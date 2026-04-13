export default function AnimatedShape() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-10 right-60 w-[460px] h-[320px] bg-light-purple animate-fluid -rotate-[10deg]"
        style={{ borderRadius: "69% 31% 41% 59% / 76% 50% 30% 24%" }}
      />
      <div
        className="absolute -bottom-10 right-20 w-[360px] h-[600px] bg-dark-purple animate-fluid -rotate-[40deg]"
        style={{ borderRadius: "69% 31% 41% 59% / 76% 50% 30% 24%" }}
      />
    </div>
  );
}