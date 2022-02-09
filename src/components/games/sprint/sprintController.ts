import { currentToken } from '../../../utils/api/const';
import { IToken, IWord } from '../../../utils/api/interfaces';
import SprintModel from './sprintModel';
import SprintView from './sprintView';

export default class SprintController {

  baseUrl: string;

  sprintView: SprintView;

  sprintModel: SprintModel;

  level: number;

  hard: number;

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

  constructor() {
    this.currentToken = currentToken;
    this.sprintModel = new SprintModel();
    this.sprintView = new SprintView(this);
    this.level = 0;
    this.hard = 0;
    this.step = 0;
    this.loadTime = 5;
    this.trueArray = [];
    this.isCorrect = true;
    this.intervalLoaderTime = 0;
    this.roundTime = 0;
    this.seconds = 60;
  }

  activate(): void {
    this.sprintView.renderPage();
  }

  async makeGameArray(group: string) {
    this.trueArray = await this.sprintModel.getSomeWords(group);
    this.makeQuestions();
    return this.trueArray;
  }

  static translateCheck(word: IWord['wordTranslate'], wrongTranslate: Array<IWord['wordTranslate']>) {
    const result = wrongTranslate.filter((e) => e !== word);
    return result;
  }


  makeQuestions() {
    const rand = Math.floor(Math.random() * 2);
    if (rand) {
      this.sprintView.getTrueCouple(this.trueArray[this.step], this.trueArray[this.step]);
      this.isCorrect = true;
    } else {
      this.sprintView.getFalseCouple(this.trueArray[this.step],
        this.sprintModel.shuffleArray(SprintController.translateCheck(this.trueArray[this.step].wordTranslate,
        this.sprintModel.gameFalseWords))[this.step]);
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

  startRound() {
    this.sprintView.toggleStartScreen();
    this.makeGameArray(this.hard.toString());
    this.sprintView.getPreloader();
    this.addLoadTimer();
   
    // this.game = true;
  }


}
