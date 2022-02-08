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
    <button class="button">Вход</button>
  </div>
</header>
<main>
<div id="mainPage" style="display: none">${Render.renderMainPage()}</div>
<div id="workBookPage">${Render.renderWorkBookPage()}</div>
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

    private static renderWorkBookPage = () => `<div class="container work-book__container">
      <h2>Учебник</h2>
      <div class="levels-wrapper">
        <button class="level-button" id="a1">
          Easy A1
        </button>
        <button class="level-button" id="a2">
          Easy A2
        </button>
        <button class="level-button" id="b1">
          Medium B1
        </button>
        <button class="level-button" id="b2">
          Medium B2
        </button>
        <button class="level-button" id="c1">
          Hard C1
        </button>
        <button class="level-button" id="c2">
          Hard C2
        </button>
      </div>
      <div class="levels__pagination">
        <ul>
          <li class="pagination__item pagination__arrow"><span></span></li>
          <li class="pagination__item "><span>1</span></li>
          <li class="pagination__item "><span>2</span></li>
          <li class="pagination__item "><span>3</span></li>
          <li class="pagination__item "><span>4</span></li>
          <li class="pagination__item "><span>5</span></li>
          <li class="pagination__item "><span>...</span></li>
          <li class="pagination__item "><span>30</span></li>
          <li class="pagination__item pagination__arrow"><span></span></li>
        </ul>
      </div>
      <div class="words-container">
        <div class="word-card">
          <div class="word-card__img"></div>
          <div class="word-card__text-block">
            <h3 class="word-card__title">Laugh</h3>
            <div class="word-card__translation text">смех</div>
            <div class="word-card__transcript-wrapper">
              <div class="word-card__transcript-text text">[læf]</div>
              <div class="word-card__transcript-icon"></div>
            </div>
            <div class="word-card__usage-block">
              <p class="text">Laugh is the sound made when someone is happy or a funny thing occurs.</p>
              <p class="text text_translation">Смех - это звук, который звучит, когда кто-то счастлив или происходит смешная вещь</p>
            </div>
            <div class="word-card__usage-block">
              <p class="text">The sound of her laugh filled the room.</p>
              <p class="text text_translation">Звук ее смеха заполнил комнату.</p>
            </div>
          </div>
        </div>
        <div class="word-card">
          <div class="word-card__img"></div>
          <div class="word-card__text-block">
            <h3 class="word-card__title">Laugh</h3>
            <div class="word-card__translation text">смех</div>
            <div class="word-card__transcript-wrapper">
              <div class="word-card__transcript-text text">[læf]</div>
              <div class="word-card__transcript-icon"></div>
            </div>
            <div class="word-card__usage-block">
              <p class="text">Laugh is the sound made when someone is happy or a funny thing occurs.</p>
              <p class="text text_translation">Смех - это звук, который звучит, когда кто-то счастлив или происходит смешная вещь</p>
            </div>
            <div class="word-card__usage-block">
              <p class="text">The sound of her laugh filled the room.</p>
              <p class="text text_translation">Звук ее смеха заполнил комнату.</p>
            </div>
          </div>
        </div>
        <div class="word-card">
          <div class="word-card__img"></div>
          <div class="word-card__text-block">
            <h3 class="word-card__title">Laugh</h3>
            <div class="word-card__translation text">смех</div>
            <div class="word-card__transcript-wrapper">
              <div class="word-card__transcript-text text">[læf]</div>
              <div class="word-card__transcript-icon"></div>
            </div>
            <div class="word-card__usage-block">
              <p class="text">Laugh is the sound made when someone is happy or a funny thing occurs.</p>
              <p class="text text_translation">Смех - это звук, который звучит, когда кто-то счастлив или происходит смешная вещь</p>
            </div>
            <div class="word-card__usage-block">
              <p class="text">The sound of her laugh filled the room.</p>
              <p class="text text_translation">Звук ее смеха заполнил комнату.</p>
            </div>
          </div>
        </div>
        <div class="word-card">
          <div class="word-card__img"></div>
          <div class="word-card__text-block">
            <h3 class="word-card__title">Laugh</h3>
            <div class="word-card__translation text">смех</div>
            <div class="word-card__transcript-wrapper">
              <div class="word-card__transcript-text text">[læf]</div>
              <div class="word-card__transcript-icon"></div>
            </div>
            <div class="word-card__usage-block">
              <p class="text">Laugh is the sound made when someone is happy or a funny thing occurs.</p>
              <p class="text text_translation">Смех - это звук, который звучит, когда кто-то счастлив или происходит смешная вещь</p>
            </div>
            <div class="word-card__usage-block">
              <p class="text">The sound of her laugh filled the room.</p>
              <p class="text text_translation">Звук ее смеха заполнил комнату.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`

}



export default Render
