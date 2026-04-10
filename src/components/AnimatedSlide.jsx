import { useState, useEffect, useRef } from "react";

export default function AnimatedSlide({ children, direction, trigger }) {
  const [animationClass, setAnimationClass] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setAnimationClass("");
    const request = requestAnimationFrame(() => {
      setAnimationClass(direction === "next" ? "animate-next" : "animate-prev");
    });

    return () => cancelAnimationFrame(request);
  }, [trigger, direction]);

  return (
    <div className={animationClass}>
      {children}
    </div>
  );
}