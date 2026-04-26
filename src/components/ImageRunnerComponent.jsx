import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const ImageRunnerComponent = forwardRef(function ImageRunnerComponent({ images }, ref) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useImperativeHandle(ref, () => ({
    reset: () => setCurrentIndex(0),
    start: () => setIsPaused(false),
    stop: () => setIsPaused(true),
  }));

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, [images, isPaused]);

  return (
    <div className="flex flex-1 items-center justify-center">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-[60%] cursor-pointer transition-transform duration-300 hover:scale-[1.3]"
      />
    </div>
  );
});

export default ImageRunnerComponent;
