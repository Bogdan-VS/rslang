import { IWord } from '../../utils/api/interfaces';

class UtilsStatistics {
  static showPage(currentPage: HTMLElement) {
    const collectionPage: NodeListOf<HTMLElement> =
      document.querySelectorAll('.page');

    collectionPage.forEach((element) => {
      element.classList.add('hide');
    });

    currentPage.classList.remove('hide');
  }

  static getNewWords(collection: IWord[], currentCollection: string[]) {
    collection.forEach((element) => {
      currentCollection.push(element.word);
    });
  }

  static renderGameStatistics = () => `
    <p>Количество новых слов за сегодня:<span id="audio-call__new-words"></span>
    <p>Процент правильных ответов:<span id="audio-call__answers"></span>
    <p>Самая длинная серия правильных ответов:<span id="audio-call__long-series"></span>
  `;
}

export default UtilsStatistics;
