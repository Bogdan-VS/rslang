import Api from '../../server/api';
import { IUserData } from '../../utils/interfaces';

class Test {
  user: IUserData | number;

  api: Api;

  constructor() {
    this.user = null;
    this.api = new Api();
    this.init();
  }

  init() {
    this.getUser();
  }

  async getUser() {
    this.user = await this.api.createNewUser({
      name: 'ivan',
      email: 'ss@gmail.com',
      password: '1234ss123',
    });

    console.log(this.user);
  }
}

export default Test;
