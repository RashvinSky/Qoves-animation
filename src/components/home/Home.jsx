import React, { useEffect, useRef, useState } from "react";
import FacialOne from "../../assets/images/A4 - 108.png";
import FacialTwo from "../../assets/images/Chapter 3 _ Sexual Dimorphism Theory (1).png";
import EyebrowOne from "../../assets/images/Chapter 3 _ Sexual Dimorphism Theory.png";
import EyebrowTwo from "../../assets/images/cover 2.png";
import DimorphismOne from "../../assets/images/Chapter 3 _ Sexual Dimorphism Assessment (1).png";
import DimorphismTwo from "../../assets/images/Variation.png";
import PreliminaryOne from "../../assets/images/Chapter 3 _ Sexual Dimorphism Visualization (1).png";
import PreliminaryTwo from "../../assets/images/Chapter 3 _ Sexual Dimorphism Theory (2).png";
import PreliminaryThree from "../../assets/images/detailed analysis (1).png";
import Report from "../../assets/images/report-gallery.png";
import Arrow from "../../assets/images/arrow.png";
import { useWindowSize } from "react-use";

const imagesData = [
  { id: 1, image: FacialOne, alt: "facial-one" },
  { id: 2, image: FacialTwo, alt: "facial-two" },
  { id: 3, image: EyebrowOne, alt: "eyebrow-one" },
  { id: 4, image: EyebrowTwo, alt: "eyebrow-two" },
  { id: 5, image: DimorphismOne, alt: "dimorphism-one" },
  { id: 6, image: DimorphismTwo, alt: "dimorphism-two" },
  { id: 7, image: PreliminaryOne, alt: "preliminary-one" },
  { id: 8, image: PreliminaryTwo, alt: "preliminary-two" },
  { id: 9, image: PreliminaryThree, alt: "preliminary-three" },
  { id: 10, image: Report, alt: "report" },
];

const Home = () => {
  const { width } = useWindowSize();
  const [isSmallScreen, setIsSmallScreen] = useState(null);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const container = containerRef.current;
    container.scrollLeft += event.deltaY;
    setIsAnimationTriggered(false);
    if (container) {
      const isEnd =
        container.scrollLeft + container.clientWidth === container.scrollWidth;
      setIsScrollEnd(isEnd);
    }
  };

  useEffect(() => {
    if (width) {
      if (width > 768) {
        setIsSmallScreen(false);
      } else {
        setIsSmallScreen(true);
      }
    }
  }, [width]);

  useEffect(() => {
    if (isScrollEnd) {
      const timeout = setTimeout(() => {
        setIsAnimationTriggered(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isScrollEnd]);

  return (
    <>
      {isSmallScreen ? (
        <>
          <div
            className="d-flex justify-content-center text-center"
            style={{ padding: "6rem 0" }}
          >
            <h1
              style={{
                fontSize: "3rem",
                minWidth: "320px",
                maxWidth: "320px",
                color: "#121212",
                lineHeight: "4rem",
                width: "100%",
              }}
            >
              <span className="font-PP_NEUE_Montreal fw-normal">
                The most comprehensive&nbsp;
              </span>
              <br />
              <span
                style={{ fontWeight: 100 }}
                className="font-Denton fst-italic"
              >
                analysis of your face
              </span>
            </h1>
          </div>

          <div
            className="d-flex align-items-center w-100 overflow-auto"
            style={{ gap: "42.5px" }}
          >
            {imagesData.map((imageItem) => {
              return (
                <div style={{ paddingBottom: "6rem" }} key={imageItem.id}>
                  <img
                    src={imageItem.image}
                    alt={imageItem.alt}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div
          id="scroll-container"
          ref={containerRef}
          style={{
            overflowX: "scroll",
            overflowY: "hidden",
            height: "calc(100vh - 110px)",
            padding: isAnimationTriggered ? "0px 0px 0px 15rem" : "",
          }}
          onWheel={handleScroll}
          className="d-flex align-items-center w-100"
        >
          <div className="d-flex align-items-center">
            {isAnimationTriggered ? (
              <div>
                <h1
                  style={{
                    fontSize: "4rem",
                    minWidth: "702px",
                    maxWidth: "702px",
                    color: "#121212",
                    lineHeight: "4rem",
                    width: "100%",
                  }}
                >
                  <span className="font-PP_NEUE_Montreal fw-normal">
                    Documented into <br /> 200 pages&nbsp;
                  </span>
                  <span
                    style={{ fontWeight: 100 }}
                    className="font-Denton fst-italic"
                  >
                    report of you
                  </span>
                </h1>
                <p
                  className="font-PP_NEUE_Montreal fw-normal py-3"
                  style={{
                    fontSize: "24px",
                    minWidth: "546px",
                    maxWidth: "546px",
                    color: "#121212",
                    lineHeight: "29px",
                    width: "100%",
                  }}
                >
                  Professional facial assessments and clear facial changes
                  visualisation.
                </p>
                <div
                  style={{ maxWidth: "312px", width: "100%" }}
                  className="pb-5"
                >
                  <button
                    className="assess-button border-0 text-white font-PP_NEUE_Montreal"
                    style={{ padding: "0px 16px 0px 24px", height: "60px" }}
                  >
                    <div className="d-flex justify-content-between w-100 align-items-center">
                      <div>ALL REPORTS</div>
                      <div className="border-1 border-start border-white ps-2">
                        <img src={Arrow} alt="arrow" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h1
                  style={{
                    fontSize: "4rem",
                    minWidth: "624px",
                    maxWidth: "624px",
                    color: "#121212",
                    lineHeight: "4rem",
                    width: "100%",
                  }}
                >
                  <span className="font-PP_NEUE_Montreal fw-normal">
                    The most comprehensive&nbsp;
                  </span>
                  <br />
                  <span
                    style={{ fontWeight: 100 }}
                    className="font-Denton fst-italic"
                  >
                    analysis of your face
                  </span>
                </h1>
              </div>
            )}

            {/* Image Section */}
            <div>
              <div
                className="d-flex align-items-center"
                style={{
                  gap: isAnimationTriggered ? "0px" : "42.5px",
                  paddingRight: "42.5px",
                  width: isAnimationTriggered ? "1000px" : "",
                }}
              >
                {imagesData.map((imageItem) => {
                  return (
                    <div className="image-container" key={imageItem.id}>
                      <img
                        className={
                          isAnimationTriggered
                            ? `image moveImage${imageItem.id}`
                            : ""
                        }
                        style={{
                          height: "404px",
                        }}
                        src={imageItem.image}
                        alt={imageItem.alt}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
