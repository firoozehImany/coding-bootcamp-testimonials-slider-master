export default function AnimatedShape() {
  return (
<>
    <div 
      className="absolute top-[60px] right-80 w-[460px] h-[320px] bg-[#F3F4FB] animate-morph-pulse -rotate-[10deg]"
      style={{ 
        borderRadius: "69% 31% 41% 59% / 76% 50% 30% 24%"  
      }}
    />
        <div 
      className="absolute bottom-[60px] right-40 w-[360px] h-[600px] bg-[#6943dc] animate-morph-pulse -rotate-[40deg]"
      style={{ 
        borderRadius: "69% 31% 41% 59% / 76% 50% 30% 24%" 
      }}
    />
</>
  
  );
}