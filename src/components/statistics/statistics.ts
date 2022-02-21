import Api from '../../server/api';
import { currentToken, generalStatistics } from '../../utils/api/const';
import { IStatistics } from '../../utils/api/interfaces';
import { audioCall } from '../game-audioCall/difference/const';
import optional from './difference/const';
import { IAudioCallStat } from './difference/interface';
import UtilsStatistics from './utils';

class Statistics {
  static currentNewWords: string[] = [];

  statisticsPage: HTMLElement;

  statisticsBtn: HTMLElement;

  statisticsWrapper: HTMLElement;

  audioCallNewWords: HTMLElement;

  audioCallAnswers: HTMLElement;

  audioCallLongSeries: HTMLElement;

  uadioCallStatisticsItemBtn: HTMLButtonElement;

  statMessage: HTMLElement;

  api: Api;

  constructor() {
    this.statisticsWrapper = document.getElementById(
      'statistics-game__container'
    );
    this.uadioCallStatisticsItemBtn = document.getElementById(
      'audio-call__statistics-item'
    ) as HTMLButtonElement;
    this.statisticsPage = document.getElementById('main-statistics');
    this.api = new Api();
  }

  init() {
    this.addStartPage();
    this.audioCallNewWords = document.getElementById('audio-call__new-words');
    this.audioCallAnswers = document.getElementById('audio-call__answers');
    this.statMessage = document.getElementById('stat-message');
    this.audioCallLongSeries = document.getElementById(
      'audio-call__long-series'
    );

    this.uadioCallStatisticsItemBtn.addEventListener(
      'click',
      this.openStatisticsPage.bind(this)
    );
  }

  openStatisticsPage() {
    if (currentToken.id) {
      this.getStatisticsById();
    } else {
      this.statMessage.classList.add('');
    }
    this.addCorrectData();

    console.log(currentToken.id);
    console.log(optional.audioCall.currentNewWords);
    if (currentToken.id) {
      if (optional.audioCall.currentNewWords) {
        this.addStatistics();
      }
    }

    // this.getStatistics();
  }

  addStartPage() {
    this.statisticsWrapper.innerHTML = UtilsStatistics.renderGameStatistics();
  }

  async addStatistics() {
    generalStatistics.optional = optional;
    const result = await this.api.apsertStatistics(
      currentToken.id,
      generalStatistics
    );

    console.log(result);
  }

  async getStatisticsById() {
    const statistics = await this.api.getStatistics(currentToken.id);

    if (typeof statistics === 'number') {
      this.drawCurrentData(optional.audioCall);
    } else {
      const result: IStatistics = statistics;
      this.drawCurrentData(result.optional.audioCall);
    }
  }

  drawCurrentData(data: IAudioCallStat) {
    this.audioCallAnswers.textContent = `${String(data.correctAnswer)}`;
    this.audioCallLongSeries.textContent = `${String(data.betterSeries)}`;
    this.audioCallNewWords.textContent = `${String(
      data.currentNewWords.length
    )}`;
  }

  addCorrectData() {
    UtilsStatistics.getNewWords(audioCall.newWords, Statistics.currentNewWords);

    optional.audioCall.betterSeries = audioCall.betterSeries;
    optional.audioCall.correctAnswer = audioCall.correctAnswer;
    optional.audioCall.currentNewWords = Statistics.currentNewWords;
  }
}

export default Statistics;
