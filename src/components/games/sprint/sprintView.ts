import { IWord } from "../../../utils/api/interfaces";
import SprintController from "./sprintController";
export default class SprintView {

  main: HTMLElement;

  timer: HTMLElement;

  gameLevels: number;

  gameTime: number;

  audio: HTMLAudioElement;

  preloader: HTMLElement;

  preloadCounter: HTMLElement;

  loader: HTMLElement;

  loadCounter: HTMLElement;

  currentWord: HTMLElement;

  currentTranslation: HTMLElement;

  timeoutLoaderHide: number;
  
  startBtn: HTMLButtonElement;

  sprintController: SprintController;

  startScreen: HTMLElement;

  gameField: HTMLElement;

  trueBtn: HTMLElement;

  falseBtn: HTMLElement;

  scoreElem: HTMLElement;

  answerArea: HTMLElement;

  currentBonus: HTMLElement;

  bgTop: HTMLElement;
  

  constructor(sprintController: SprintController) {
    this.sprintController = sprintController;
    this.main = document.getElementById('mainPage') as HTMLElement;
    this.timeoutLoaderHide = 0;
    this.gameLevels = 6;
    this.gameTime = 60;
    this.audio = new Audio();
    }


  renderPage() {
    const content = `
    <section class="game__startScreen" id="startScreen">
    <h2 class="game__startScreen-title">Sprint</h2>
    <p class="game__startScreen-desc">Ваша задача указать, совпадают ли слово и перевод<br>По кнопкам можко кликать
      мышкой или нажимать на клавиатуре стрелку влево(Верно), стрелку вправо(Неверно)</p>
      <button class="button fill" id="startGame">Начать</button>
      <a class="button prevBtn fill" href="#/">
      <div>Назад</div>
      <b class="prevBtn-left"></b></a>
      <div class="levels" id="levels">
      ${this.renderLevels()}
      <div class="game__sprint__user-words-block">
        <div class="button game__sprint__user-words-button fill">Мои слова</div>
        <p class="game__sprint__user-words-notification"></p>
     </div> 
    </section>
      <div class="game__options" id="gameOptions"></div>
      <div class="resultPopup">
        <div class="resultPopup__wrap">
          <div class="resultPopup__title">Ошибок<span class="errors"></span></div>
          <div class="resultPopup__errors"></div>
          <div class="resultPopup__title">Знаю<span class="success"></span></div>
          <div class="resultPopup__success"></div>
          <div class="resultPopup__btns"><button class="button" id="closePopup">Закрыть</button>
            <button class="button">Новая игра</button>
            </div>
        </div>
      </div>
    <section class="game__sprint hide">
      <div class="game__sprint__bg-top"></div>
      <div class="game__sprint__bg-bottom"></div>
      <div class="game__sprint__wrap">
        <div class="game__sprint__main-field">
          <div class="game__sprint__score">Счёт:</div>
          <a class="close" href="/#/games">
            <svg class="svg_icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg> 
          </a>
          <div class="game__sprint__bonus__star" id="current_Bonus">
            <div class="game__sprint__bonus__area__1" id="current_Bonus__area__1"></div>
            <div class="game__sprint__bonus__area__2" id="current_Bonus__area__2"></div>
            <div class="game__sprint__bonus__area__3" id="current_Bonus__area__3"></div>
          </div>
          <div class="game__sprint__time__block">
            <div class="game__sprint__time__block_svg"><svg class="timer_svg" width="150" height="150">
                <circle class="circle" cx="80" cy="80" r="60"></circle>undefined
              </svg></div>
            <div class="game__sprint__time__count"></div>
          </div>
        </div>
        <div class="game__sprint__bonus__area__count" id="game__sprint__bonus__area__count">
          <div class="game__sprint__bonus__item1" id="game__sprint__bonus__item1"></div>
          <div class="game__sprint__bonus__item2" id="game__sprint__bonus__item2"></div>
          <div class="game__sprint__bonus__item3" id="game__sprint__bonus__item3"></div>
          <div class="game__sprint__bonus__item4" id="game__sprint__bonus__item4"></div>
        </div>
        <div class="game__sprint__checkAnswer__area" id="game__sprint__checkAnswer__area"></div>
        <div class="game__sprint__btns">
          <div class="button btn-true" id="trueBtn">Верно</div>
          <div class="game__sprint__play-content">
            <div class="game__sprint__word"></div>
            <div class="game__sprint__translation"></div>
          </div>
          <div class="button  btn-false" id="falseBtn">Неверно</div>
        </div>
      </div>
    </section>
    <div class="game__preloader hide__loader">
      <div class="game__loader__count"></div>
      <div class="game__loader"></div>
      <p class="game__loader-desc text">Приготовьтесь</p>
   </div>`;
    this.main.innerHTML = content; 
    this.startBtn = document.getElementById('startGame') as HTMLButtonElement;
    this.currentWord = document.querySelector('.game__sprint__word') as HTMLElement;
    this.timer = document.querySelector('.game__sprint__time__count') as HTMLElement;
    this.preloader = document.querySelector('.game__preloader') as HTMLElement;
    this.preloadCounter = document.querySelector('.game__loader__count') as HTMLElement;
    this.loader = document.querySelector('.game__sprint__loader') as HTMLElement;
    this.loadCounter = document.querySelector('.game__loader__count') as HTMLElement;
    this.currentWord = document.querySelector('.game__sprint__word') as HTMLElement;
    this.currentTranslation = document.querySelector('.game__sprint__translation') as HTMLElement;
    this.gameField = document.querySelector('.game__sprint') as HTMLElement;
    this.startScreen = document.querySelector('.game__startScreen') as HTMLElement;
    this.trueBtn = document.querySelector('.btn-true') as HTMLButtonElement;
    this.falseBtn = document.querySelector('.btn-false') as HTMLButtonElement;
    this.startBtn.addEventListener('click', () => this.sprintController.startRound());
    this.scoreElem = document.querySelector('.game__sprint__score') as HTMLElement;
    this.answerArea = document.getElementById('game__sprint__checkAnswer__area') as HTMLElement;
    this.currentBonus = document.getElementById('current_Bonus') as HTMLElement;
    this.bgTop = document.querySelector('.sprint__game__bg-top');
    this.main.addEventListener('click', async event => {
      const target = <HTMLElement>event.target;
      if (target.id === 'falseBtn' || target.id === 'trueBtn') {
        this.sprintController.checkAnswer(target.id);
      }
    });
    return this.main.innerHTML;
  }

  renderLevels() {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", "levels");
    wrapperElement.className ='levels';
    const titleElement = document.createElement('div');
    titleElement.className = 'levels__title';
    titleElement.innerHTML = 'Сложность';
    const levelElements = document.createElement('div');
    levelElements.className = 'levels__wrap';
    wrapperElement.append(titleElement);
    wrapperElement.append(levelElements);
    for (let i = 0; i < this.gameLevels; i += 1) {
      levelElements.append(SprintView.renderRadioLevel(i));
    }
    return wrapperElement.innerHTML;
  }

  static renderRadioLevel(i: number): HTMLLabelElement {

    const radioElement = document.createElement('label');
    radioElement.id = `radio${i}`;
    radioElement.className = 'radio';
    const spanElement = document.createElement('span');
    spanElement.className = 'radio__decor';
    spanElement.classList.add('bouncy');
    const InputElement = document.createElement('input');
    InputElement.className = 'radio__input';
    InputElement.value = i.toString();
    InputElement.type = 'radio';
    InputElement.name = 'group';
    if (i === 0) InputElement.checked = true;
    radioElement.append(InputElement);
    radioElement.append(spanElement);
    return radioElement;
  }

  renderBonus = (color: string): string => `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enable-background="new 0 0 1000 1000"
      xml:space="preserve"
    >
      <metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
      <g fill="${color}" stroke="none">
        <path
          d="M759.5,990c-11.3,0-22.6-2.9-32.7-8.5L506.4,859.3c-4-2.2-8.8-2.2-12.8,0L273.3,
          981.4c-27.9,15.5-64.1,8.5-84.5-15.5c-12.8-15.1-18.3-35-15.1-54.8l43-264.7c0.7-4.2-0.7-8.5-3.6-11.5L29.3,
          445.8c-17.8-18.3-23.8-44.8-15.7-69c8.1-24.2,28.8-41.6,54-45.5L318.1,293c4.4-0.7,8.1-3.5,10-7.5L438.7,
          49C450,25,473.4,10,500,10c26.6,0,50.1,15,61.3,39.1L672,285.5c1.9,4,5.6,6.9,10,7.5l250.5,38.4c25.2,3.9,
          45.8,21.3,53.9,45.4c8.1,24.3,2.1,50.7-15.7,69l-183.8,189c-2.9,3-4.3,7.3-3.6,11.5l43,264.8c3.2,19.7-2.3,
          39.7-15.2,54.8C798.2,981.2,779.3,990,759.5,990z M500,803.2c11.5,0,22.8,2.9,32.8,8.5l220.3,122.2c5.8,3.2,
          12.5,1.6,16.6-3.2c2.6-3,3.5-6.6,2.9-10.8l-43-264.7c-3.4-21.1,3.4-42.9,18.3-58.3l183.8-189c5.1-5.3,3.9-11.4,
          3.1-13.7c-0.8-2.3-3.4-7.8-10.6-9l-250.5-38.4c-22.4-3.4-41.5-17.7-51.1-38.3L512,72.1c-3.2-6.9-9.4-7.6-12-7.6c-2.5,
          0-8.8,0.7-12,7.7L377.4,308.5c-9.6,20.5-28.7,34.8-51.1,38.3L75.8,385.2c-7.2,1.1-9.8,6.6-10.6,9c-0.8,2.3-2.1,
          8.4,3.1,13.7l183.8,189c14.9,15.3,21.8,37.1,18.3,58.3l-43.1,264.7c-0.7,4.1,0.3,7.8,2.9,10.8c4.1,4.8,10.8,6.4,
          16.6,3.2l220.3-122.1C477.2,806.1,488.6,803.2,500,803.2z"
        />
      </g>
    </svg>
  `;


  getBonusCheck(i: string) {
    const check = `<img src="../../../assets/img/Sprint/checkMarker.png" class="game__sprint__true__check__item" alt="true">`;

    document.querySelector(`.game__sprint__bonus__area__${i}`).insertAdjacentHTML('beforeend', check);
  }

  getBonusStar(i: string) {
    let color = '';
    switch (i) {
      case '1':
        color = 'green';
      break;
      case '2':
        color = 'yellow';
        break;
      case '3':
        color = 'red'; 
        break;
      default:
      break;
    }
        const star = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    class="game__sprint__bonus__item__planet__icon${i}" alt="bonus">
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enable-background="new 0 0 1000 1000"
      xml:space="preserve">
      ${this.renderBonus(color)}
    </svg>
  `;
    document.querySelector(`.game__sprint__bonus__item${i}`).insertAdjacentHTML('beforeend', star);
  }

  showBonus(factor: number): void {
    this.answerArea.innerHTML = `Умножение очков на ${factor}!`;
    this.hideBonus();
  }

  hideBonus() {
    let answerTimer;
    if (answerTimer) {
      clearTimeout(answerTimer);
    }
    answerTimer = setTimeout(() => {
      this.answerArea.innerHTML = ' ';
    }, 2000);
  }

  clearBonus() {
    const bonusArea = this.currentBonus.childNodes as NodeListOf<HTMLElement>;
    bonusArea.forEach((elem) => {
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    });
  }

  startTimer() {
    document.querySelector('.circle').classList.add('start_timer');
    return this.timer;
  }

  addTimer(second: string) {
    this.timer.innerHTML = `${second}`;
  }


  getTrueCouple(trueword: IWord, truetranslate: IWord) {
    this.currentWord.textContent = `${trueword.word}`;
    this.currentTranslation.textContent = `${truetranslate.wordTranslate}`;
  }

  getFalseCouple(trueword: IWord, falsetranslate: IWord['wordTranslate']) {
    this.currentWord.innerHTML = `${trueword.word}`;
    this.currentTranslation.innerHTML = `${falsetranslate}`;
  }

  startGameTimer() {
    document.querySelector('.circle').classList.add('start_timer');
    return this.timer;
  }

  restartGameTimer() {
    if (document.querySelector('.circle').classList.contains('start_timer')) {
      document.querySelector('.circle').classList.remove('start_timer');
    }
    return this.timer;
  }

  getPreloader() {
    this.preloader.classList.remove('hide__loader');
    this.timeoutLoaderHide = window.setTimeout(() => {
      if (!this.preloader.classList.contains('hide__loader')) {
        clearInterval(this.timeoutLoaderHide);
        this.preloader.classList.add('hide__loader');
        this.startGameTimer();
        this.toggleGameControls();
        this.showBg();
      }
    }, 6000);
  }

  getLoaderTime(timeItem: number) {
    this.loadCounter.innerHTML = `${timeItem}`;
  }

  toggleStartScreen() {
    this.startScreen.classList.toggle('hide');
  }

  toggleGameControls() {
    this.gameField.classList.toggle('hide');
  }

  getScore(score: number): void {
    this.scoreElem.textContent = `Очки: ${score}`;
  }

  showBg() {
    this.bgTop.classList.toggle('bg-top-active')
  }

  


}
