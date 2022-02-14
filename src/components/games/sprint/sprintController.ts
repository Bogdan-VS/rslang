import { currentToken } from '../../../utils/api/const';
import { IToken, IWord } from '../../../utils/api/interfaces';

import SprintModel from './sprintModel';
import SprintView from './sprintView';

export default class SprintController {

  baseUrl: string;

  sprintView: SprintView;

  sprintModel: SprintModel;

  level: string;

  step: number;

  wordCount: number;

  wordControl: boolean;

  trueArray: IWord[];

  isCorrect: boolean;

  currentToken: IToken;

  intervalLoaderTime: number;

  loadTime: number;

  roundTime: number;

  seconds: number;

  correctCount: number;

  progressArray: IWord[];

  score: number;

  factor: number;

  answered: Set<IWord['wordTranslate']>;

  bonusStar: number;

  constructor() {
    this.currentToken = currentToken;
    this.sprintModel = new SprintModel();
    this.sprintView = new SprintView(this);
    this.answered = new Set;
    this.level = '0';
    this.step = 0;
    this.loadTime = 5;
    this.trueArray = [];
    this.progressArray = [];
    this.isCorrect = true;
    this.intervalLoaderTime = 0;
    this.roundTime = 0;
    this.seconds = 60;
    this.correctCount = 0;
    this.bonusStar = 0;
    this.score = 0;
    this.factor = 1;
  }

  activate(): void {
    this.sprintView.renderPage();
    this.chooseLvl();
  }

  chooseLvl() {
    document.querySelectorAll('.radio').forEach((elem) => {
      elem.addEventListener('click', () => {
        this.level = elem.id.slice(5);
        this.wordControl = false;
        return this.level;
      });
    });
  }

  async makeGameArray(group: string) {
    this.trueArray = await this.sprintModel.getSomeWords(group);
    this.makeQuestion();
    return this.trueArray;
  }

  static translateCheck(word: IWord['wordTranslate'], wrongTranslate: Array<IWord['wordTranslate']>) {
    const result = wrongTranslate.filter((e) => e !== word);

    // console.log(result)
    return result;
  }

  makeQuestion() {
    const rand = Math.floor(Math.random() * 2);
    if (rand) {
      this.sprintView.getTrueCouple(this.trueArray[this.step], this.trueArray[this.step]);
      this.isCorrect = true;
    } else {
      const filteredArr = SprintController.translateCheck(this.trueArray[this.step].wordTranslate,
      this.sprintModel.gameFalseWords);
      const shuffledArr = this.sprintModel.shuffleArray(filteredArr);
      shuffledArr.unshift(this.trueArray[this.step].wordTranslate);

      while (this.answered.has(shuffledArr[this.step])) {;
        const reshuffledArr = this.sprintModel.shuffleArray(filteredArr);
        shuffledArr[this.step] = reshuffledArr[this.step]
      }
      this.sprintView.getFalseCouple(this.trueArray[this.step], shuffledArr[this.step])

      this.isCorrect = false;
    }
  }

  // addGameTimer() {
  //   clearInterval(this.roundTime);
  //   this.roundTime = window.setInterval(() => {
  //     this.sprintView.addTimer(this.seconds.toString());
  //     this.seconds -= 1;
  //     if (this.seconds === -1) {
  //       this.sprintView.restartGameTimer();
  //       clearInterval(this.roundTime);
  //       this.seconds = 60;
  //       this.sprintView.addTimer(' ');
  //     }
  //   }, 1000);
  // }

  addGameTimer() {
    clearInterval(this.roundTime);
    this.roundTime = window.setInterval(this.onTick.bind(this), 1000);
    this.onTick();
  }

  onTick() {
    this.sprintView.addTimer(this.seconds.toString());
    this.seconds -= 1;
    if (this.seconds === -1) {
      this.sprintView.restartGameTimer();
      clearInterval(this.roundTime);
      this.seconds = 60;
      this.sprintView.addTimer(' ');
  }
  }   

  addLoadTimer() {
    this.intervalLoaderTime = window.setInterval(() => {
      this.sprintView.getLoaderTime(this.loadTime);
      this.loadTime -= 1;
      if (this.loadTime === -1) {
        this.addGameTimer();
        clearInterval(this.intervalLoaderTime);
        this.loadTime = 5;
      }
    }, 1000);
  }

  async startRound() {
    this.sprintView.toggleStartScreen();
    await this.makeGameArray(this.level);
    // console.log(this.trueArray)
    // console.log(this.sprintModel.gameFalseWords)
    this.sprintView.getPreloader();
    this.addLoadTimer();
  }

  checkAnswer(target: string) {
    if ((this.isCorrect && target === 'trueBtn') || (!this.isCorrect && target === 'falseBtn')) {
      this.answered.add(this.trueArray[this.step].wordTranslate)
      this.correctCount += 1;
      this.bonusCounter();
      this.sprintView.playAudio('correct');
      this.trueArray[this.step].correct = true;
      this.progressArray.push(this.trueArray[this.step]);
      this.progressArray[this.step].correct = true;
      this.score += 10 * this.factor;
      this.sprintView.getScore(this.score);
      this.addBonusCheck();
      this.step += 1;
      this.makeQuestion();
    }
    else {
      this.sprintView.playAudio('error');
      this.correctCount = 0;
      this.trueArray[this.step].correct = false;
      this.progressArray.push(this.trueArray[this.step]);
      this.factor = 1;
      this.step += 1;
      this.makeQuestion();
    }
  }

  addBonusCheck() {
    switch (this.correctCount) {
      case 1:
        this.sprintView.getBonusCheck('1');
        break;
      case 2:
        this.sprintView.getBonusCheck('2');
        break;
      case 3:
        this.sprintView.getBonusCheck('3');
        break;

      default:
        break;
    }
  }

  addBonusStar() {
    switch (this.bonusStar) {
      case 1:
        this.sprintView.getBonusStar('1');
        break;
      case 2:
        this.sprintView.getBonusStar('2');
        break;
      case 3:
        this.sprintView.getBonusStar('3');
        break;
      case 4:
        this.sprintView.getBonusStar('4');
        break;

      default:
        break;
    }
  }

  bonusCounter() {
    if (this.correctCount === 4 && this.factor < 16) {
      this.factor *= 2;
      this.sprintView.showBonus(this.factor);
      this.bonusStar += 1;
      this.addBonusStar();
      this.sprintView.getScore(this.score);
      setTimeout(() => {
        this.sprintView.clearBonus();
      }, 300);
      this.correctCount = 0;
    }
  }

  togglePlay() {
    if (this.sprintView.timer.innerHTML === '||') {
      this.addGameTimer();
    }
    else {
      this.sprintView.timer.innerHTML = '||';
      clearInterval(this.roundTime);
    }
  }

  playWord() {
    clearTimeout();
    this.sprintView.soundIcon.classList.add('pulse');
    setTimeout(
      () => this.sprintView.soundIcon.classList.remove('pulse'),
      1000
    );
    const audio = new Audio;
    const audioPath = this.trueArray[this.step].audio;
    audio.src = `http://localhost:8080/${audioPath}`;
    audio.play()
  }

}