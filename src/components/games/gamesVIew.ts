import SprintController from "./sprint/sprintController";

export default class GamesView {
  main: HTMLElement;

  sprintController: SprintController;

  constructor() {
    this.sprintController = new SprintController();
    this.main = document.getElementById('mainPage') as HTMLElement;
    this.main.addEventListener('click', async event => {
      const target = <HTMLElement>event.target;
    
      if (target.classList.contains('button')) {
        this.sprintController.activate();
      }
    });
  }

  renderPage() {
    const content = `
    <section class="section games-section" id="games">
    <div class="games-section__games-container">
      <div class="games-section__game">
        <div class="games-section__game__content">
          <div class="games-section__game__content-top content-item">
            <div class="content-item__logo">
              <div class="content-item__logo-container">
                <img alt="sprint" src="" class="content-item__logo__img" />
              </div>
            </div>
            <div class="content-item__name">
              <p class="content-item__name__text">Sprint</p>
            </div>
          </div>
          <div class="games-section__game__content-middle content-item">
            <p class="content-item__desc">
              Проверьте, сколько очков вы можете получить за одну минуту, делая
              обоснованные предположения о том, правильно переведено слово или нет
            </p>
          </div>
          <div class="games-section__game__content-bottom content-item">
            <button class="button content-item__button" type="button">
              <span class="content-item__button__label">Играть</span>
            </button>
          </div>
        </div>
      </div>
      <div class="games-section__game">
        <div class="games-section__game__content">
          <div class="games-section__game__content-top content-item">
            <div class="content-item__logo">
              <div class="content-item__logo-container">
                <img alt="audiocall" src="" class="content-item__logo__img" />
              </div>
            </div>
            <div class="content-item__name">
              <p class="content-item__name__text">Audiocall</p>
            </div>
          </div>
          <div class="games-section__game__content-middle content-item">
            <p class="content-item__desc">
              Проверьте насколько вы внимательный слушатель, пытаясь подобрать
              правильный перевод после услышанного слова.
            </p>
          </div>
          <div class="games-section__game__content-bottom content-item">
            <button
              class="button content-item__button"
              type="button"
            >
              <span class="content-item__button__label">play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>`
 
  this.main.innerHTML = content;    
  }
}