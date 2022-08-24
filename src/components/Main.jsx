import React from "react";

const Main = () => {
  return (
    <main>
      <section className="home section">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/luis-daniel-juarez-reyes/"
                className="home__social-icon"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>

              <a
                href="https://github.com/Danreyess"
                className="home__social-icon"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
          </div>

          <div className="home__img">

          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'am Daniel</h1>
            <h3 className="home__description">Frontend Developer</h3>
            <p className="home__description">
              I'am learning web design and i want to be a good developer
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll down</span>
              <i className="uil uil -arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
