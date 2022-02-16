import Api from "../../../server/api";
import { IToken, IWord } from "../../../utils/api/interfaces";

export default class SprintModel {

  gameWords: IWord[];

  gameFalseWords: Array<IWord['wordTranslate']>;
  
  words: IWord[];

  api: Api;

  currentToken: IToken;

  page: string;

  constructor() {
    this.api = new Api();
    this.words = [];
    this.gameWords = [];
    this.gameFalseWords = [];
    this.page = '0';
  }

  shuffleArray<T>(array: T[]): T[] {
    const result = array;
    for (let i = array.length - 1; i > 0; i -=1 ) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  async getSomeWords(group: string): Promise<IWord[]> {
    let page = parseInt(this.page, 10);
    const pages = new Set;
    while (pages.size < 5) {
      page = Math.floor(Math.random() * 29)
      pages.add(page)
    }
    const pagesArr = [...pages] as number[];
    const promiseArr = pagesArr.map((item) => this.api.getWords(item, group)) as Array<Promise<IWord[]>>;

    let data = await (await Promise.all(promiseArr)).flat(1);
    // let data =  a this.api.getWords(this.page, group);
    data = this.shuffleArray(data);
    console.log(data)
    this.gameWords = [];
    this.gameFalseWords = [];
    data.forEach((elem) => {
      this.gameWords.push(elem);
      this.gameFalseWords.push(elem.wordTranslate);
    });
    return this.gameWords;
  }


  // async getUserWords() {
  //   this.gameWords = [];
  //   this.gameFalseWords = [];
  //   const words = await this.api.getAllUserWords(this.currentToken.id);
  //   let userWords = (words as IUsersAllWords[]).splice(10);
  //   (userWords as IUsersAllWords['optional']) = userWords.map((word: IUsersAllWords) => word.optional);
  //   userWords = this.shuffleArray(userWords);
  //   userWords.forEach((elem: IUsersAllWords['optional']) => {
  //     this.gameWords.push(elem);
  //     this.gameFalseWords.push(elem.wordTranslate);
  //   });
  //   return this.gameWords;
  // }

}
