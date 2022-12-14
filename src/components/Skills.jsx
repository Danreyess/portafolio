import React from "react";

const Skills = () => {
  return (
    <section>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i className="uil uil-brackets-curly skills__icon"></i>

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 6 months</span>
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">REACT JS</h3>
                  <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JS</h3>
                  <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i class="uil uil-server skills__icon"></i>

                <div>
                  <h1 className="skills__title">Backend developer</h1>
                  <span className="skills__subtitle">More than 4 months</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Node Js</h3>
                    <span className="skills__number">30%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__node"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills__content skills__close">
            <div className="skills__header">
              <i class="uil uil-database skills__icon"></i>

              <div>
                <h1 className="skills__title">DataBase</h1>
                <span className="skills__subtitle">More than 4 months</span>
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Sql Server</h3>
                  <span className="skills__number">30%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sql"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Mongo Db</h3>
                    <span className="skills__number">30%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__mongo"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
