import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import "./styles.css";

function Carousel({
  data,
  time,
  width,
  height,
  radius,
  // style,
  dots,
  automatic,
  pauseIconColor,
  pauseIconSize,
  slideBackgroundColor,
  slideImageFit,
  showNavBtn = true,
}) {
  //Initialize States
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [change, setChange] = useState(0);

  //Function to change slide
  const addSlide = (n) => {
    if (slide + n >= data.length) setSlide(0);
    else if (slide + n < 0) setSlide(data.length - 1);
    else setSlide(slide + n);
  };

  //Start the automatic change of slide
  useEffect(() => {
    if (automatic) {
      var index = slide;
      const interval = setInterval(
        () => {
          if (!isPaused) {
            setSlide(index);
            index++;
            if (index >= data.length) index = 0;
            if (index < 0) index = data.length - 1;
          }
        },
        time ? time : 2000
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, change]);

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: "smooth",
      });
    }
  }

  //Listens to slide state changes
  useEffect(() => {
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");

    var slideIndex = slide;
    var i;
    for (i = 0; i < data.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex] !== undefined)
      slides[slideIndex].style.display = "block";
    if (dots[slideIndex] !== undefined) dots[slideIndex].className += " active";
  }, [slide, isPaused]);
  console.log(data);

  return (
    <div className=" w-full  mb-12">
      <div
        // style={{
        //     // maxWidth: width ? width : "600px",
        //     maxHeight: height ? height : "400px",
        // }}
        className=""
      >
        <Swipe
          onSwipeRight={() => {
            addSlide(-1);
            setChange(!change);
          }}
          onSwipeLeft={() => {
            addSlide(1);
            setChange(!change);
          }}
        >
          <div
            className="carousel-container w-full"
            style={{
              // maxWidth: width ? width : "600px",
              height: height ? height : "400px",
              backgroundColor: slideBackgroundColor
                ? slideBackgroundColor
                : "darkgrey",
              borderRadius: radius,
            }}
          >
            {data.map((item, index) => {
              return (
                <div
                  className="carousel-item fade"
                  // style={{
                  //     maxWidth: width ? width : "600px",
                  //     maxHeight: height ? height : "400px",
                  // }}
                  onMouseDown={(e) => {
                    automatic && setIsPaused(true);
                  }}
                  onMouseUp={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  onMouseLeave={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  onTouchStart={(e) => {
                    automatic && setIsPaused(true);
                  }}
                  onTouchEnd={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  key={index}
                >
                  {/* {slideNumber && (
                                        <div className="slide-number" style={slideNumberStyle}>
                                            {index + 1} / {data.length}
                                        </div>
                                    )} */}
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="carousel-image"
                    style={{
                      borderRadius: radius,
                      objectFit: slideImageFit ? slideImageFit : "cover",
                    }}
                  />
                  {isPaused && (
                    <div
                      className="pause-icon pause"
                      style={{
                        color: pauseIconColor ? pauseIconColor : "white",
                        fontSize: pauseIconSize ? pauseIconSize : "40px",
                      }}
                    >
                      II
                    </div>
                  )}

                </div>
              );
            })}

            <div className="flex justify-end mt-2 space-x-6">
              {showNavBtn && (
                <a
                  className="prev md:px-5 px-2.5 md:py-3 py-2 "
                  onClick={(e) => {
                    addSlide(-1);
                    setChange(!change);
                  }}
                >
                  &#10094;
                </a>
              )}
              {showNavBtn && (
                <a
                  className="next md:px-5 px-2.5 md:py-3 py-2"
                  onClick={(e) => {
                    addSlide(1);
                    setChange(!change);
                  }}
                >
                  &#10095;
                </a>
              )}
            </div>
            {dots && (
              <div className="dots">
                {data.map((item, index) => {
                  return (
                    <span
                      className="dot"
                      key={index}
                      onClick={(e) => {
                        setSlide(index);
                        setChange(!change);
                      }}
                    ></span>
                  );
                })}
              </div>
            )}
          </div>
        </Swipe>
      </div>
    </div>
  );
}

export default Carousel;