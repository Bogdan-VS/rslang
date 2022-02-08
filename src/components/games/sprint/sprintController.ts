import SprintView from './sprintView';

export default class SprintController {

  baseUrl: string;

  sprintView: SprintView;

  level: number;

  time: number;


  constructor() {
    this.sprintView = new SprintView();
    this.level = 0;
    this.time = 0;
  }

  activate(): void {
    this.sprintView.renderPage();
  }

}
