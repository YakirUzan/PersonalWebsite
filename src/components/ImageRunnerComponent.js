import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import "./ImageRunnerComponent.css"

const ImageRunnerComponent = forwardRef(({images}, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useImperativeHandle(ref, () => ({
        reset: () => setCurrentIndex(0),
        start: () => setIsPaused(false),
        stop: () => setIsPaused(true),
    }));

    useEffect(() => {
        if (isPaused) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Change image every 2 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [isPaused, images]);

    return (
        <div className="image-runner">
            <img src={images[currentIndex]}
                 onClick={handleClick}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 alt={`slide-${currentIndex}`}/>
        </div>
    );
});

export default ImageRunnerComponent;