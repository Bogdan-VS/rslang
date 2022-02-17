import './styles/style.scss';
import Render from './components/render';
import Authorize from './components/authorize';
import Api from './server/api';
import WorkBook from './components/workBook';
import AudioCall from './components/game-audioCall/audio-call';

const api = new Api();

api.getWords('0', '0').then((r) => {
  const words = r;
  Render.render(words);
  const authorize = new Authorize();
  const audioCall = new AudioCall();
  audioCall.init();
  authorize.init();
  const workBook = new WorkBook();
});
