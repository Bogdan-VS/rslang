import { PathLink } from '../utils/enums';
import { IUserData, IWord } from '../utils/interfaces';

class Api {
  baseLink: string;

  constructor() {
    this.baseLink = 'http://localhost:8080';
  }

  async getWords() {
    const responce = await fetch(`${this.baseLink}${PathLink.words}`);
    const words: IWord[] = await responce.json();

    return words;
  }

  async getWord(id: string) {
    const responce = await fetch(`${this.baseLink}${PathLink.wordId}${id}`);
    const word: IWord = await responce.json();

    return word;
  }

  async createNewUser(userData: IUserData) {
    const responce = await fetch(`${this.baseLink}${PathLink.user}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    try {
      const userParam: IUserData = await responce.json();

      return userParam;
    } catch (error) {
      return responce.status;
    }
  }

  async getUser(id: string) {
    const responce = await fetch(`${this.baseLink}${PathLink.user}/${id}`);

    try {
      const user: IUserData = await responce.json();

      return user;
    } catch (error) {
      return responce.status;
    }
  }

  async UpdateUser(id: string, userData: IUserData) {
    const responce = await fetch(`${this.baseLink}${PathLink.user}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    try {
      const updateUser: IUserData = await responce.json();

      return updateUser;
    } catch (error) {
      return responce.status;
    }
  }

  async deleteUser(id: string) {
    const responce = await fetch(`${this.baseLink}${PathLink.user}/${id}`, {
      method: 'DELETE',
    });

    try {
      const user: {} = await responce.json();

      return user;
    } catch (error) {
      return responce.status;
    }
  }
}

export default Api;
