import React from "react";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__section">
          {/* Qualification content 1 */}

          <div className="qualification__content">
            {/* Qualification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Enginner in progress{" "}
                </h3>
                <span className="qualification__subtitle">UNEA</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Qualification 2 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Trainee </h3>
                <span className="qualification__subtitle">Improving</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  February 2022 - August 2022
                </div>
              </div>
            </div>

            {/* Qualification content 2 */}
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Word Lenguage College{" "}
                  </h3>
                  <span className="qualification__subtitle">B1</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    February 2022 - August 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
