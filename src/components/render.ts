class Render {
  static render = () => {
    const html = `<header class="header">
  <div class="container header__container">
    <div class="header__logo" id="logo">RSLang.</div>
    <nav class="header__nav">
      <ul class="header__nav-container">
        <li class="header__nav-item text"><a href="#" class="header__nav-item">Главная</a></li>
        <li class="header__nav-item text"><a href="#" class="header__nav-item">Учебник</a></li>
        <li class="header__nav-item text"><a href="#" class="header__nav-item">Игры
          <span class="nav__select-arrow"></span>
          <ul class="nav__sub-menu">
            <li class="sub-menu__item audio-game"><a href="#">Аудио-вызов</a></li>
            <li class="sub-menu__item sprint-game"><a href="#">Спринт</a></li>
          </ul>
        </a></li>
        <li class="header__nav-item text"><a href="#" class="header__nav-item">Статистика</a></li>
      </ul>
    </nav>
    <button class="button" id="sign-in">Вход</button>
  </div>
</header>
<main>
<div id="mainPage">
${Render.renderMainPage()}
${Render.renderAuthorize()}
</div>
</main>
<footer>
  <div class="container footer-container">
    <div class="logo footer-logo header__logo">RSLang</div>
    <div class="footer__block">
      <div>
        <span class="text">Меню</span>
        <nav class="footer-nav">
          <ul class="navigation footer-navigation">
            <li class="footer-nav__item"><a href="#">Главная</a></li>
            <li class="footer-nav__item"><a href="#">Учебник</a></li>
            <li class="footer-nav__item"><a href="#">Статистика</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>`;
    const root = document.createElement('div');
    root.innerHTML = html;
    root.id = 'root';
    document.body.appendChild(root);
  };

  private static renderMainPage = () => `<section class="main-section">
    <div class="container section-container main-container">
      <div class="main-section__text-container">
        <h1 class="title">RS Lang</h1>
        <p class="text">Изучай английский быстро и эффективно. Никаких школьных правил!</p>
        <button class="button main-section__button book">Начать</button>
      </div>
      <div class="main-img"></div>
    </div>
  </section>
  <section class="advantages-section">
    <div class="container section-container">
      <h2>Почему именно мы?</h2>
      <div class="advantages__container">
        <div class="advantages__item">
          <div class="advantages__icon" id="icon1"></div>
          <h3 class="underlined-title">Нескучные игры</h3>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div class="advantages__item">
          <div class="advantages__icon" id="icon2"></div>
          <h3 class="underlined-title">Удобный словарь</h3>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="advantages__item">
          <div class="advantages__icon" id="icon3"></div>
          <h3 class="underlined-title">Только нужные слова</h3>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="advantages__item">
          <div class="advantages__icon" id="icon4"></div>
          <h3 class="underlined-title">Отслеживание запоминания слов</h3>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <button class="advantages__button button" id="advantages__button">Войти</button>
    </div>
  </section>
  <section class="developers-section">
    <div class="container section-container">
      <h2>Познакомимся?</h2>
      <div class="developers__wrapper">
        <div class="developer__card">
          <img class="developer__img" src="../assets/img/sasha.jpeg" alt="">
          <div class="developer__text-block">
            <h3 class="developer__title">Саша</h3>
            <div class="developer__role">Front-end developer</div>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div class="developer__card">
          <div class="developer__text-block">
            <h3 class="developer__title">Богдан</h3>
            <div class="developer__role">Front-end developer</div>
            <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <img class="developer__img" src="../assets/img/bogdan.jpg" alt="">
        </div>
      </div>
    </div>
  </section>`;

  private static renderAuthorize = () => `
  <form class="auth" id="auth">
    <div class="auth__wrapper">
      <div id="sign-in__auth" class="sign">
        <h2 class="auth__title">Вход в аккаунт</h2>
        <div class="auth__conteiner">
          <div class="auth__container-item">
            <input type="email" placeholder="Почта" name="email" required id="auth-email">
            <label for="email"></label>
          </div>
          <div class="auth__container-item">
            <input type="password" placeholder="Пароль" name="password" min="8" max="30" required id="auth-password">
            <label for="password"></label>
          </div>
        </div>
        <div class="button-conteiner">
          <button type="submit" class="auth__button" id="sign-in__btn">Войти</button>
        </div>
        <div class="auth__subtitle">
          <p>У вас нет аккаунта?</p>
          <h4 class="auth__subtitle-item" id="sub-sign-up__btn">Зарегистрируйтесь сейчас</h4> 
        </div>
      </div>
      <div class="sign hide" id="sign-up__auth">
        <h2 class="auth__title">Регистрация</h2>
        <div class="auth__conteiner">
          <div class="auth__container-item">
            <input type="text" placeholder="Имя" name="name" required id="auth-name">
            <label for="name"></label>
          </div>
          <div class="auth__container-item">
            <input type="email" placeholder="Почта" name="email" required id="auth-email">
            <label for="email"></label>
          </div>
          <div class="auth__container-item">
            <input type="password" placeholder="Пароль" name="password" min="8" max="30" required id="auth-password">
            <label for="password"></label>
          </div>
        </div>
        <div class="button-conteiner">
          <button type="submit" class="auth__button auth__button-sing-up" id="sign-up__btn">Зарегестрироваться</button>
        </div>
      </div>
    </div>
    <div class="auth__close" id="auth-close"></div>
  </form>
  `;
}

export default Render;
