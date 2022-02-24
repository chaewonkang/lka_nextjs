import React, { useEffect, useRef, useState } from "react";
const delay = 3000;

function Slideshow({ imgArr, width, isArrowOn, isButtonOn, isAuto }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        if (isAuto) {
            timeoutRef.current = setTimeout(
                () => setIndex(prevIndex => (prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1)),
                delay,
            );
        }

        return () => {
            resetTimeout();
        };
    }, [index, isAuto]);

    return (
        <div
            className="slideshow_wrapper"
            style={{
                display: "flex",
            }}
        >
            {isArrowOn && (
                <div
                    className="LeftArrowBox"
                    onClick={() => {
                        if (index === 0) {
                            setIndex(imgArr.length - 1);
                        } else if (index === 1) {
                            setIndex(0);
                        } else if (index < imgArr.length - 1) {
                            setIndex(index - 1);
                        } else if (index === imgArr.length - 1) {
                            setIndex(index - 1);
                        }
                    }}
                >
                    <span id="leftArrowSpan">◀︎</span>
                </div>
            )}
            <div className="slideshow" width={width}>
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {imgArr.map((image, index) => {
                        return (
                            <div className="slide" key={index.alt}>
                                <div>
                                    <img src={image.url} />
                                </div>
                            </div>
                        );
                    })}
                </div>
                {isButtonOn && (
                    <div className="slideshowDots">
                        {imgArr.map((_, idx) => (
                            <div
                                key={idx}
                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></div>
                        ))}
                    </div>
                )}
            </div>
            {isArrowOn && (
                <div
                    className="RightArrowBox"
                    onClick={() => {
                        if (index < imgArr.length - 1) {
                            setIndex(index + 1);
                        } else if (index == imgArr.length - 1) setIndex(0);
                    }}
                >
                    <span id="rightArrowSpan">►</span>
                </div>
            )}
        </div>
    );
}

export default Slideshow;
