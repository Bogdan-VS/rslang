import './styles/style.scss';
import Render from './components/render';
import Authorize from './components/authorize';
import Api from './server/api';
import WorkBook from './components/workBook';
import { wordsPage } from './utils/workBook/const';
import AudioCall from './components/game-audioCall/audio-call';
import Games from './utils/header-navigation/games';

const api = new Api()
api.getWords(wordsPage.page, wordsPage.category).then(r => {
    const words = r;
    const workBook = new WorkBook(words)
    Render.render(words);
    WorkBook.checkAuthWorkBook()


    const authorize = new Authorize();
    const audioCall = new AudioCall();
    const games = new Games();
    games.init();
    audioCall.init();
    authorize.init();
})



