import "./styles/main.css";


import vk from "./img/icons/vk.svg";
import instagram from "./img/icons/instagram.svg";
import twitter from "./img/icons/twitter.svg";
import gitHub from "./img/icons/gitHub.svg";
import linkedIn from "./img/icons/linkedIn.svg";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {

  return (
    <div className="App">

      <Navbar />

      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img src="./img/projects/01.jpg" alt="Gaming streaming portal" className="project__img" />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src="./img/projects/02.jpg" alt="Video service" className="project__img" />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src="./img/projects/03.jpg" alt="Video portal" className="project__img" />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src="./img/projects/04.jpg" alt="Dating app" className="project__img" />
                <h3 className="project__title">Dating app</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src="./img/projects/05.jpg" alt="Landing" className="project__img" />
                <h3 className="project__title">Landing</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img src="./img/projects/06.jpg" alt="Gaming community" className="project__img" />
                <h3 className="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!"> <img src={vk} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"> <img src={twitter} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!"> <img src={gitHub} alt="Link" /></a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" /></a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
