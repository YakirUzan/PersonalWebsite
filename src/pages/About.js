import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import './About.css';

const SeekBar = forwardRef(({ name, value }, ref) => {
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

const About = forwardRef((props, ref) => {

    const sliderData = [
        { name: "Java", value: 98, ref: useRef(null) },
        { name: "Android Development", value: 95, ref: useRef(null) },
        { name: "Web Development", value: 91, ref: useRef(null) },
        { name: "Backend Development", value: 94, ref: useRef(null) },
    ];

    const onScroll = () => {
        sliderData.forEach(item => {
            if (item.ref.current) {
                item.ref.current.start();
            }
        });
    };

    useImperativeHandle(ref, () => ({
        onScroll,
    }));

    return (
        <div className="about">
            <div className="about-split-container">
                <div className="about-image-section">
                    <div className="image-div"></div>
                </div>
                <div className="slider-section">
                    <h1>About Me</h1>
                    <p className="about-description">I am Yakir Uzan, a motivated software developer and a Computer Science graduate from the Technion. I have 3.5 years of professional experience in software development and ~3 years of experience in software development through personal projects.</p>
                    {sliderData.map((item, index) => (
                        <SeekBar key={index} ref={item.ref} name={item.name} value={item.value} />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default About;