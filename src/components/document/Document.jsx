import React, { useEffect, useState } from "react";
import Report from "../../assets/images/report-gallery.png";
import Arrow from "../../assets/images/arrow.png";
import { useWindowSize } from "react-use";

const Document = () => {
  const { width } = useWindowSize();
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  useEffect(() => {
    if (width) {
      if (width > 767) {
        setIsSmallScreen(false);
      } else {
        setIsSmallScreen(true);
      }
    }
  }, [width]);

  return (
    <>
      {isSmallScreen ? (
        <div
        //   style={{
        //     overflowX: "scroll",
        //     overflowY: "hidden",
        //     height: "calc(100vh - 110px)",
        //   }}
        >
          <div className="d-flex justify-content-center text-center py-5">
            <div>
              <div
                style={{
                  fontSize: "3rem",
                  minWidth: "320px",
                  maxWidth: "320px",
                  color: "#121212",
                  lineHeight: "3rem",
                  width: "100%",
                }}
              >
                <span className="font-PP_NEUE_Montreal fw-normal">
                  Documented into 200 pages
                </span>
                <span
                  style={{ fontWeight: 100 }}
                  className="font-Denton fst-italic"
                >
                  <br /> report of you
                </span>
              </div>
              <p
                className="font-PP_NEUE_Montreal fw-normal text-center pt-3"
                style={{
                  color: "#42464B",
                  fontSize: "20px",
                  lineHeight: "20px",
                  minWidth: "320px",
                  maxWidth: "320px",
                  width: "100%",
                }}
              >
                Professional facial assessments and clear facial changes
                visualisation.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100">
            <img src={Report} alt="report" />
          </div>
          <div className="d-flex justify-content-center w-100">
            <div
              style={{ maxWidth: "520px", width: "100%" }}
              className="py-5 px-3"
            >
              <button
                className="assess-button border-0 text-white font-PP_NEUE_Montreal"
                style={{ padding: "0px 10px 0px 16px", height: "40px" }}
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Document;
