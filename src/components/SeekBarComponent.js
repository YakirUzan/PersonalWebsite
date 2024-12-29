import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import './SeekBarComponent.css'

const SeekBarComponent = forwardRef(({ name, value }, ref) => {
    const [sliderValue, setSliderValue] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    useImperativeHandle(ref, () => ({
        start: () => setStartAnimation(true),
    }));

    useEffect(() => {
        if (!startAnimation) return;

        const duration = 1000;
        const steps = 100;
        const increment = value / steps;
        const intervalTime = duration / steps;

        let currentValue = 0;

        // Set interval to update sliderValue
        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= value) {
                currentValue = value;
                clearInterval(interval);
                setStartAnimation(false);
            }
            setSliderValue(currentValue);
        }, intervalTime);

        // Clean up interval when component unmounts or value changes
        return () => clearInterval(interval);

    }, [startAnimation, setStartAnimation, value]);

    return (
        <div className="slider-container">
            <div className="slider-name">
                {name}
            </div>

            <div className="slider-value">
                {Math.round(sliderValue)}%
            </div>

            <input
                className="slider"
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                disabled
                style={{background: `linear-gradient(to right, var(--app-primary-color) ${sliderValue}%, #ddd ${sliderValue}%)`}}
            />
        </div>
    );
});

export default SeekBarComponent;