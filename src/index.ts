import './styles/style.scss';
import Render from './components/render';
import Authorize from './components/authorize';
import Api from './server/api';
import WorkBook from './components/workBook';


const api = new Api()
api.getWords('0', '0').then(r => {
    const words = r;
    const workBook = new WorkBook()
    Render.render(words);
    workBook.checkAuthWorkBook()

    const authorize = new Authorize();
    authorize.init();
})

