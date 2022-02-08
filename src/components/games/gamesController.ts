import GamesView from "./gamesView";


export default class GamesController {

  gamesView: GamesView;

  constructor() {
    this.gamesView = new GamesView();
  }

  activate(): void {
    this.gamesView.renderPage();
    console.log('GamesController activated')
  }

  deactivate(): void {
    console.log('GamesController deactivated')
  }

}
