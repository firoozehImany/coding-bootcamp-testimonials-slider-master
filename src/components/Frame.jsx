export default function Frame({ src, alt }) {
  return (
    <div className="relative w-full">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto rounded-lg shadow-2xl/40 shadow-shadow object-cover aspect-square"
      />
    </div>
  );
}