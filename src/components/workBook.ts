import Api from '../server/api';

class workBook {
    private api: Api;
    constructor() {
        this.api = new Api()
        this.sss()
    }

    async sss () {

        let words = await this.api.getWords('1', '1');
        console.log(words)
    }
}

export default workBook
