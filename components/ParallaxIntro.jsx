import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

export default function ParallaxIntro({ onFinish }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [scale, setScale] = useState(1);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    if (startAnimation) {
      const animate = () => {
        setScale((prev) => {
          if (prev < 3) {
            animationFrame = requestAnimationFrame(animate);
            setFade(1 - (prev - 1) / 2);
            return prev + 0.02;
          } else {
            cancelAnimationFrame(animationFrame);
            document.body.style.overflow = "";
            if (onFinish) onFinish();
            return prev;
          }
        });
      };
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [startAnimation, onFinish]);

  return (
    <section
      className="h-screen w-full relative flex items-center justify-center bg-[#E8EEF8] dark:bg-black overflow-hidden"
      onClick={() => !startAnimation && setStartAnimation(true)}
      role="button"
      aria-label="Start animation by clicking anywhere"
    >
      <div className="relative w-[80vw] max-w-[800px] aspect-square">
        <img
          src="/assets/computer-mockup.png"
          alt="Computer Mockup"
          className="w-full h-full object-contain"
          style={{
            transform: `scale(${scale})`,
            opacity: fade,
            transition: "transform 0.3s ease-out, opacity 0.5s ease-out",
          }}
        />

        <div className="absolute inset-x-10 inset-y-20 md:inset-x-24 md:inset-y-32 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
          <Typewriter
            lines={["Your next developer is just one click away"]}
            speed={100}
            className="text-[clamp(1.5rem,4vw,3.5rem)] font-extrabold bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-transparent bg-clip-text drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
