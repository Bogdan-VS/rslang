import { IUsersAllWords, IWord } from "../../../utils/api/interfaces";

export default class SprintModel {

  gameWords: IWord[];

  baseUrl: any;

  gameFalseWords: Array<IWord['wordTranslate']>;
  
  words: IWord[];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.words = [];
    this.gameWords = [];
    this.gameFalseWords = [];
  }

  shuffleArray<T>(array: T[]): T[] {
    const result = array;
    for (let i = array.length - 1; i > 0; i -=1 ) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }


  async getUserWords() {
    this.gameWords = [];
    this.gameFalseWords = [];
    const words = await this.baseUrl.getAllUserWords();
    let userWords = words.splice(10);
    userWords = userWords.map((word: IUsersAllWords) => word.optional);
    userWords = this.shuffleArray(userWords);
    userWords.forEach((elem: IWord) => {
      this.gameWords.push(elem);
      this.gameFalseWords.push(elem.wordTranslate);
    });
    return this.gameWords;
  }

}
