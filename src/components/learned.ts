import Api from '../server/api';
import WorkBook from './workBook';
import { IWord } from '../utils/api/interfaces';

class Learned {
    private api: Api;

    constructor() {
        this.api = new Api()
    }

    isLearned (word: IWord) {
        console.log(WorkBook.learnedArr.filter(i => i.id === word.id).length)
        return WorkBook.learnedArr.filter(i => i.id === word.id).length
    }

    async isHard (id: string) {
        const word = await this.api.getWord(id);
        return WorkBook.hardArr.filter(i => i.id === word.id).length
    }
}

export default Learned
