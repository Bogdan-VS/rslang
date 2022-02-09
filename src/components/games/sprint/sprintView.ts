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
      <button class="button" id="startGame">Начать</button>
      <a class="button prevBtn" href="#/">Назад</a>
      <div class="levels" id="levels">
      ${this.renderLevels()}
      <div class="game__sprint__user-words-block">
        <div class=" button game__sprint__user-words-button">Мои слова</div>
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
      <div class="game__sprint__wrap">
        <div class="game__sprint__main-field">
          <div class="game__sprint__score">Счёт:</div><a class="close" href="/#/games">
          <svg class="svg_icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
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
          <div class="button btn-circle-true">Верно</div>
          <div class="game__sprint__play-content">
            <div class="game__sprint__word"></div>
            <div class="game__sprint__translation"></div>
          </div>
          <div class="button  btn-circle-false">Неверно</div>
        </div>
      </div>
    </section>
    <div class="game__preloader hide__loader">
      <div class="game__loader__count"></div>
      <div class="game__loader"></div>
   </div>`;
    this.main.innerHTML = content; 
    this.startBtn = document.getElementById('startGame') as HTMLButtonElement;
    this.currentWord = document.querySelector('.game__sprint__word');
    this.timer = document.querySelector('.game__sprint__time__count') as HTMLElement;
    this.preloader = document.querySelector('.game__preloader') as HTMLElement;
    this.preloadCounter = document.querySelector('.game__loader__count') as HTMLElement;
    this.loader = document.querySelector('.game__sprint__loader') as HTMLElement;
    this.loadCounter = document.querySelector('.game__loader__count');
    this.currentWord = document.querySelector('.game__sprint__word');
    this.currentTranslation = document.querySelector('.game__sprint__translation');
    this.gameField = document.querySelector('.game__sprint');

    this.startScreen = document.querySelector('.game__startScreen')
    this.startBtn.addEventListener('click', () => this.sprintController.startRound());
    return this.main.innerHTML   
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

  getFalseCouple(trueword: IWord, falsetranslate: IWord['word']) {
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

  


}
