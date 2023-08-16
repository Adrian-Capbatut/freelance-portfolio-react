import "./styles/main.css"




function App() {

  return (
    <div className="App">

      <nav class="nav">
        <div class="container">
          <div class="nav-row">
            <a href="./index.html" class="logo"><strong>Freelancer</strong> portfolio</a>

            <button class="dark-mode-btn">
              <img src="./img/icons/sun.svg" alt="Light mode" class="dark-mode__icon" />
              <img src="./img/icons/Moon.svg" alt="Dark mode" class="dark-mode__icon" />
            </button>

            <ul class="nav-list">
              <li class="nav-list__item">
                <a href="index.html" class="nav-list__link nav-list__link--active">Projects</a>
              </li>
              <li class="nav-list__item">
                <a href="skills.html" class="nav-list__link">Skills</a>
              </li>
              <li class="nav-list__item">
                <a href="contacts.html" class="nav-list__link">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="header">
        <div class="header__wrapper">
          <div class="header__container">
            <h1 class="header__title">
              <strong>Hi, my name is <em>Yuri</em></strong><br />
              a frontend developer<br />
            </h1>
            <div class="header__text">
              <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" class="btn">Download CV</a>
          </div>
        </div>
      </header>

      <main class="section">
        <div class="container">
          <h2 class="title-1">Projects</h2>
          <ul class="projects">
            <li class="project">
              <a href="./project-page.html">
                <img src="./img/projects/01.jpg" alt="Gaming streaming portal" class="project__img" />
                <h3 class="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li class="project">
              <a href="./project-page.html">
                <img src="./img/projects/02.jpg" alt="Video service" class="project__img" />
                <h3 class="project__title">Video service</h3>
              </a>
            </li>
            <li class="project">
              <a href="./project-page.html">
                <img src="./img/projects/03.jpg" alt="Video portal" class="project__img" />
                <h3 class="project__title">Video portal</h3>
              </a>
            </li>
            <li class="project">
              <a href="./project-page.html">
                <img src="./img/projects/04.jpg" alt="Dating app" class="project__img" />
                <h3 class="project__title">Dating app</h3>
              </a>
            </li>
            <li class="project">
              <a href="./project-page.html">
                <img src="./img/projects/05.jpg" alt="Landing" class="project__img" />
                <h3 class="project__title">Landing</h3>
              </a>
            </li>
            <li class="project">
              <a href="./project-page.html">
                <img src="./img/projects/06.jpg" alt="Gaming community" class="project__img" />
                <h3 class="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <ul class="social">
              <li class="social__item">
                <a href="#!"> <img src="./img/icons/vk.svg" alt="Link" /></a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src="./img/icons/instagram.svg" alt="Link" /></a>
              </li>
              <li class="social__item">
                <a href="#!"> <img src="./img/icons/twitter.svg" alt="Link" /></a>
              </li>
              <li class="social__item">
                <a href="#!"> <img src="./img/icons/gitHub.svg" alt="Link" /></a>
              </li>
              <li class="social__item">
                <a href="#!">
                  <img src="./img/icons/linkedIn.svg" alt="Link" /></a>
              </li>
            </ul>
            <div class="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
