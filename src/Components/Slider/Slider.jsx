import React, { useRef } from "react";

const Slider = () => {
  const carouselRef = useRef(null);

  const goToSlide = (slideId) => (e) => {
    e.preventDefault();
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const targetEl = carouselEl.querySelector(`#${slideId}`);
    if (!targetEl) return;

    carouselEl.scrollTo({
      left: targetEl.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        ref={carouselRef}
        className="carousel w-full max-h-[500px] overflow-x-auto flex rounded-xl border animate-border-color my-10"
      >
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full flex-none">
          <img
            src="https://i.ibb.co.com/S7nQGFJk/360-F-583582518-cn9-Ynpa-J1h-Te-TKWf-SAo-V5xj-Z13j-GCs9-H.jpg"
            className="w-full"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              onClick={goToSlide("slide4")}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              onClick={goToSlide("slide2")}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full flex-none">
          <img
            src="https://i.ibb.co.com/rPkSCQb/premium-photo-1683140538884-07fb31428ca6.jpg"
            className="w-full"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              onClick={goToSlide("slide1")}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              onClick={goToSlide("slide3")}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full flex-none">
          <img
            src="https://i.ibb.co.com/qFkSzCcc/GJ-2-19-21-Litter-pickup-i-Stock.jpg"
            className="w-full"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              onClick={goToSlide("slide2")}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              onClick={goToSlide("slide4")}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full flex-none">
          <img
            src="https://i.ibb.co.com/Ncrj0Y9/istockphoto-1145183189-612x612.jpg"
            className="w-full"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              onClick={goToSlide("slide3")}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              onClick={goToSlide("slide1")}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
