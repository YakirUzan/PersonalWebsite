import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const SeekBarComponent = forwardRef(function SeekBarComponent({ name, value }, ref) {
  const [sliderValue, setSliderValue] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useImperativeHandle(ref, () => ({
    start: () => setStartAnimation(true),
  }));

  useEffect(() => {
    if (!startAnimation) {
      return undefined;
    }

    const duration = 1000;
    const steps = 100;
    const increment = value / steps;
    const intervalTime = duration / steps;
    let currentValue = 0;

    const intervalId = window.setInterval(() => {
      currentValue += increment;

      if (currentValue >= value) {
        currentValue = value;
        window.clearInterval(intervalId);
        setStartAnimation(false);
      }

      setSliderValue(currentValue);
    }, intervalTime);

    return () => window.clearInterval(intervalId);
  }, [startAnimation, value]);

  return (
    <div className="relative mx-auto my-5">
      <div className="absolute -top-2 left-0 text-[0.8em] font-bold">{name}</div>
      <div className="absolute -top-2 right-0 text-[0.8em] font-bold">
        {Math.round(sliderValue)}%
      </div>

      <div className="h-2 w-full rounded-full bg-[#dddddd]">
        <div
          className="relative h-2 rounded-full bg-[#ffbd3f] transition-[width] duration-100"
          style={{ width: `${sliderValue}%` }}
        >
          <span className="absolute top-1/2 right-0 h-[15px] w-[15px] translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ffbd3f] bg-white shadow" />
        </div>
      </div>
    </div>
  );
});

export default SeekBarComponent;
