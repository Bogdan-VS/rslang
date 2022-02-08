import './styles/style.scss';
import Render from './components/render';
import Authorize from './components/authorize';
import AppController from './components/router/router';

Render.render();
const authorize = new Authorize();
const app = new AppController();
app.start();

authorize.init();
