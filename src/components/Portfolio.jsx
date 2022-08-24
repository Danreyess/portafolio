import React from "react";
import Pokeapi from "../assets/Pokeapi.jpg";
import Api from "../assets/Api.jpg";

import "./styles.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent</span>

      <div className="portfolio__container container">
        <div>
          {/* Portfolio */}
          <div className="portfolio__content grid">
            <img src={Pokeapi} alt="" className="portfolio__img" />

            <div className="portfolio__data">
              <h3 className="portfolio__title">PokeApi</h3>
              <p className="portfolio__description">
                Pokedex created with the pokemon public api, using ajax ,hooks
                and css in react
              </p>
              <a
                href="https://aquamarine-hotteok-d0e905.netlify.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div className="portfolio__content grid">
            <img src={Api} alt="" className="portfolio__img" />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Statistics of the weather </h3>
              <p className="portfolio__description">
                Application with statistics of the weather in the states of
                mexico, designed with boostrap and using the api by Ajax.
              </p>
              <a
                href="https://glowing-tarsier-40c0f3.netlify.app/"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
