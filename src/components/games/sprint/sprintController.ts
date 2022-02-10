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
      const temp = this.sprintModel.shuffleArray(filteredArr);
      temp.unshift(this.trueArray[this.step].wordTranslate);

      while (this.answered.has(temp[this.step])) {;
        const chunk = this.sprintModel.shuffleArray(filteredArr);
        temp[this.step] = chunk[this.step]
      }
      this.sprintView.getFalseCouple(this.trueArray[this.step], temp[this.step])

      this.isCorrect = false;
    }
  }

  addGameTimer() {
    clearInterval(this.roundTime);
    this.seconds = 60;
    this.roundTime = window.setInterval(() => {
      this.sprintView.addTimer(this.seconds.toString());
      this.seconds -= 1;
      if (this.seconds === -1) {
        this.sprintView.restartGameTimer();
        clearInterval(this.roundTime);
        this.seconds = 60;
        this.sprintView.addTimer(' ');
      }
    }, 1000);
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
      console.log(this.answered) 
      this.correctCount += 1;
      this.trueArray[this.step].correct = true;
      this.progressArray.push(this.trueArray[this.step]);
      this.progressArray[this.step].correct = true;
      this.score += 10 * this.factor;
      this.step += 1;
      this.makeQuestion();
    }
    else {
      this.correctCount = 0;
      this.trueArray[this.step].correct = false;
      this.progressArray.push(this.trueArray[this.step]);
      this.factor = 1;
      this.step += 1;
      this.makeQuestion();
    }
  }
}