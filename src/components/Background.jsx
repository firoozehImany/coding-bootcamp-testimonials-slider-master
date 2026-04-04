export default function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      <img 
        src="/images/pattern-quotes.svg" 
        alt="" 
        className="absolute top-[219px] left-64"
      />

      <img 
        src="/images/pattern-bg.svg" 
        alt="" 
        className="absolute top-[50px] right-18" 
      />
      <img 
        src="/images/pattern-curve.svg" 
        alt="" 
        className="absolute bottom-0 left-0" 
      />
    </div>
  );
}