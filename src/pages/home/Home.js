import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

function HomePage() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      src: require("../images/adem.jpeg"),
      altText: "Business Administration College",
    },
    {
      src: require("../images/artesyciencias.jpeg"),
      altText: "Arts and Sciences College",
    },
    {
      src: require("../images/cienciasagricolas.jpeg"),
      altText: "Agricultural Sciences College",
    },
    {
      src: require("../images/inge.png"),
      altText: "Engineering College",
    },
  ];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-container">
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        {/* <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        /> */}
        {carouselItemData}
        {/* <CarouselControl
          directionText="Prev"
          direction="prev"
          onClickHandler={previousButton}
        />
        <CarouselControl
          directionText="Next"
          direction="next"
          onClickHandler={nextButton}
        /> */}
      </Carousel>
    </div>
  );
}

export default HomePage;
