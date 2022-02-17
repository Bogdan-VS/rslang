import { IWord } from '../utils/api/interfaces';
import WorkBook from './workBook';
import { dataWords } from '../utils/api/const';
import colorThemes from '../utils/workBook/enums';


class Render {
    private workBook: WorkBook;

    constructor() {
        this.workBook = new WorkBook()
        this.workBook.checkAuthWorkBook()
    }

    static render = (words?: IWord[]) => {
        const html = `<header class="header">
  <div class="container header__container">
    <div class="header__logo" id="logo">RSLang.</div>
    <nav class="header__nav">
      <ul class="header__nav-container">
        <li class="header__nav-item text"><a href="#" class="header__nav-item">Главная</a></li>
        <li class="header__nav-item text"><a href="#" class="header__nav-item" id="workBookButton">Учебник</a></li>
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
<div id="workBookPage" style="display: none">${Render.renderWorkBookPage(words)}</div>
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
  </section>`

    static renderWorkBookPage = (words: IWord[]) => `<div class="container work-book__container">
      <h2>Учебник</h2>
      <div class="levels-wrapper">
        <button class="level-button level-a1" id="a1">
          Easy A1
        </button>
        <button class="level-button level-a2" id="a2">
          Easy A2
        </button>
        <button class="level-button level-b1" id="b1">
          Medium B1
        </button>
        <button class="level-button level-b2" id="b2">
          Medium B2
        </button>
        <button class="level-button level-c1" id="c1">
          Hard C1
        </button>
        <button class="level-button level-c2" id="c2">
          Hard C2
        </button>
        <button class="level-button hard-button" id="hardLevel" style="display: none">
          Сложные
        </button>
      </div>
        <div class="levels__pagination">
          <button class="pagination__item pagination__arrow prev" disabled>←</button>
          <button class="pagination__item pagination__arrow next">→</button>
        </div>
      <div class="words-container">${Render.renderWordsContainer(words, colorThemes.a1.color)}</div>
      <div class="levels__pagination">
          <button class="pagination__item pagination__arrow prev" disabled><span>←</span></button>
          <button class="pagination__item pagination__arrow next"><span>→</span></button>
        </div>
      <div class="games-part__container">
        <h2>Попробуй свои силы</h2>
        <div class="games-wrapper">
          <button class="games__item level-button" id="sprint-Btn">
            <h2>Спринт</h2>
            <p class="text">Как можно быстрее определи верный перевод слова или нет.</p>
          </button>
          <button class="games__item level-button" id="audioCall-Btn">
            <h2>Аудиовызов</h2>
            <p class="text">Попробуй понять, какое слово было произнесено.</p>
          </button>
        </div>
      </div>
      </div>
    </div>`

    static renderWordsContainer = (words: IWord[], color?: string) => `
    ${words.map((word) => `
${WorkBook.renderWordCard(word, color)}
  `).join('')}`

  private static renderAuthorize = () => `
  <div class="auth" id="auth" action="#">
    <div class="auth__wrapper">
      <form id="sign-in__auth" class="sign" action="#">
        <h2 class="auth__title">Вход в аккаунт</h2>
        <div class="auth__conteiner">
          <div class="auth__container-item">
            <input type="email" placeholder="Почта" name="email" required id="auth-signin__email">
            <label for="email"></label>
          </div>
          <div class="auth__container-item">
            <input type="password" placeholder="Пароль" name="password" min="8" max="30" required id="auth-signin__password">
            <label for="password"></label>
          </div>
        </div>
        <div class="error-message__conteiner error-signin hide" id="error-message__signin">
          <span>Не корректный пароль или почта</span>
        </div>
        <div class="button-conteiner">
          <button type="submit" class="auth__button" id="sign-in__btn">Войти</button>
        </div>
        <div class="auth__subtitle">
          <p>У вас нет аккаунта?</p>
          <h4 class="auth__subtitle-item" id="sub-sign-up__btn">Зарегистрируйтесь сейчас</h4> 
        </div>
      </form>
      <form class="sign hide" id="sign-up__auth" action="form">
        <h2 class="auth__title">Регистрация</h2>
        <div class="auth__conteiner">
          <div class="auth__container-item">
            <input type="text" placeholder="Имя" name="name" required id="auth-signup__name">
            <label for="name"></label>
          </div>
          <div class="auth__container-item">
            <input type="email" placeholder="Почта" name="email" required id="auth-signup__email">
            <label for="email"></label>
          </div>
          <div class="auth__container-item">
            <input type="password" placeholder="Пароль" name="password" min="8" max="30" required id="auth-signup__password">
            <label for="password"></label>
          </div>
        </div>
        <div class="error-message__conteiner hide" id="error-message">
          <span>Такой пользователь уже существует</span>
        </div>
        <div class="button-conteiner">
          <button type="submit" class="auth__button auth__button-sing-up" id="sign-up__btn">Зарегестрироваться</button>
        </div>
      </form>
      <div class="sign hide" id="sign-message">
        <h3 class="sign-message">Авторизация прошла успешно!</h3>
        <div class="sign-message__container">
          <button class="button sign-message__btn" id="message-btn">Ок</button>
        </div>
      </div>
      <div class="sign hide" id="siout-message">
        <h3 class="sign-message">Вы точно желаете выйти?</h3>
        <div class="sign-message__container">
          <button class="button siout-message__btn" id="signout-message-btn">Да</button>
        </div>
      </div>
    </div>
    <div class="auth__close" id="auth-close"></div>
  </div>
  `;
}

export default Render;
