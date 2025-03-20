import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomesectionCrad from "../homesectioncard/HomesectionCrad";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Homesectioncarosal = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carousel, setCarousel] = useState(null); // Reference to the carousel instance

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carousel) {
      carousel.slidePrev(); // Slide to the previous item
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Update activeIndex, ensuring it doesn't go below 0
    }
  };

  const slideNext = () => {
    if (carousel) {+
      +
      carousel.slideNext(); // Slide to the next item
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, items.length - 1)
      ); // Update activeIndex, ensuring it doesn't exceed the last item
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item); // Sync the active index with the carousel
  };

  const items = data
    ? data.slice(0, 30).map((item, index) => (
        <HomesectionCrad key={index} product={item} />
      ))
    : [];

  return (
    <div  className="relative px-4 lg:px-8">
      <div className="relative mt-2 p-5">
        <h1 className="text-2xl font-extrabold py-5 text-gray-900">
          {sectionName}
        </h1>
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={(el) => setCarousel(el)} // Set the carousel instance reference
        />
        {/* Previous Button */}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            className="z-50 flex items-center justify-center"
            sx={{
              position: "absolute",
              top: "50%",
              left: "-2rem",
              transform: "translateY(-50%) rotate(90deg)",
            }}
            aria-label="previous"
          >
            <KeyboardArrowRightIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}
        {/* Next Button */}
        {activeIndex < items.length - 5 && (
          <Button
            variant="contained"
            onClick={slideNext}
            className="z-50 flex items-center justify-center"
            sx={{
              position: "absolute",
              top: "50%",
              right: "-2rem",
              transform: "translateY(-50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Homesectioncarosal;