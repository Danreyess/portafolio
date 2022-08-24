import React from "react";
import { useState } from "react";



const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#pos" class="nav__logo">
          Daniel
        </a>

        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="#main" className="nav__link">
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li class="nav__item">
              <a href="#About" class="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li class="nav__item">
              <a href="#Skills" class="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li class="nav__item">
              <a href="#services" class="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li class="nav__item">
              <a href="#portfolio" class="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i className="uil uil-message nav__icon"></i> Contactme
              </a>
            </li>
          </ul>

          <div className="nav__btns">
            <i
              className="uil uil-times nav__close"
              onClick={() => setMenu(!menu)}
            ></i>
          </div>
        </div>

        <div className="nav__btns">
          {/* Themes change button */}

          {/* <DarkMode /> */}



          <div className="nav__toggle" onClick={() => setMenu(!menu)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
