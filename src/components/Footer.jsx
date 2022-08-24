import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Daniel</h1>
            <spnan className="footer__subtitle">Frontend Developer</spnan>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100008280730680"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/danireyesssj/"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a href="#whats" className="footer__social">
              <i class="uil uil-whatsapp"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
