import './styles/style.scss';
import Render from './components/render';
import Authorize from './components/authorize';

Render.render();
const authorize = new Authorize();

authorize.init();
