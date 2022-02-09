import { IWord } from '../utils/api/interfaces';
import WorkBook from './workBook';
import { dataWords } from '../utils/api/const';

class Render {

    static render = (words: IWord[]) => {
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
    <button class="button">Вход</button>
  </div>
</header>
<main>
<div id="mainPage" style="display: block">${Render.renderMainPage()}</div>
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
</footer>`
        const root = document.createElement('div');
        root.innerHTML = html;
        root.id = 'root'
        document.body.appendChild(root)
    }

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
      </div>
        <div class="levels__pagination">
          <button class="pagination__item pagination__arrow prev" disabled>←</button>
          <button class="pagination__item pagination__arrow next">→</button>
        </div>
      <div class="words-container">${Render.renderWordsContainer(words)}</div>
      <div class="levels__pagination">
          <button class="pagination__item pagination__arrow prev" disabled><span>←</span></button>
          <button class="pagination__item pagination__arrow next"><span>→</span></button>
        </div>
      </div>
    </div>`

    static renderWordsContainer = (words: IWord[]) => `
    ${words.map((word) => `
${WorkBook.renderWordCard(word)}
  `).join('')}`

}

export default Render

