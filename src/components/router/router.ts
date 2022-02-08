import GamesController from "../games/gamesController";
import Render from "../render";

class AppController {
  currentController!:
  | GamesController
  | Render;

  currentRoute = '';

  routeMap: {
    games: GamesController;
    first: Render;
  };

  main: HTMLElement;

  chunk: string;

  constructor() {
    this.main = document.getElementById('mainPage');
    this.routeMap = {
      games: new GamesController(),
      first: new Render(),
    };
  }

  start(): void {
    document.querySelectorAll('.header__nav a').forEach((elem: Element) => {
      elem.addEventListener('click', (event: Event) => {
        this.route((elem.getAttribute('href') || '{}'));
        event.preventDefault();
      });
    });
    this.route('first');
    this.currentController = Render;
  }

  route(path: string): string | void {
    if (this.currentController === GamesController) {
      this.routeMap.games.deactivate();
      this.main.innerHTML = Render.renderMainPage();
      this.currentController = Render;
      return this.main.innerHTML
    }
    if (this.currentController === Render) {
      this.routeMap.games.activate();
      this.currentController = GamesController;
    }
    this.show(path);
    return ''
  }

  show(path: string): void {
    if (this.currentRoute) {
      document.getElementById(this.currentRoute)?.classList.add('hide');
    }
    this.currentRoute = path;
    document.getElementById(path)?.classList.remove('hide');
  }
}

export default AppController;