import { PathLink } from '../utils/enums';
import {
  IUserData,
  IUsersAllWords,
  IUserToken,
  IWord,
} from '../utils/interfaces';

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

  async getNewUserToken(id: string) {
    const responce = await fetch(
      `${this.baseLink}${PathLink.user}/${id}${PathLink.tokens}`
    );

    try {
      const userToken: IUserToken = await responce.json();

      return userToken;
    } catch (error) {
      return responce.status;
    }
  }

  async getAllUserWords(id: string) {
    const responce = await fetch(
      `${this.baseLink}${PathLink.user}/${id}${PathLink.words}`
    );

    try {
      const usersWords: IUsersAllWords[] = await responce.json();

      return usersWords;
    } catch (error) {
      return responce.status;
    }
  }

  async createUserWord(id: string, wordId: string, userWord: IUsersAllWords) {
    const responce = await fetch(
      `${this.baseLink}${PathLink.user}/${id}${PathLink.words}/${wordId}`,
      {
        method: 'POST',
        body: JSON.stringify(userWord),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    try {
      const wordsData: IUsersAllWords = await responce.json();

      return wordsData;
    } catch (error) {
      return responce.status;
    }
  }

  async getUserWordById(id: string, wordId: string) {
    const responce = await fetch(
      `${this.baseLink}${PathLink.user}/${id}${PathLink.words}/${wordId}`
    );

    try {
      const wordsData: IUsersAllWords = await responce.json();

      return wordsData;
    } catch (error) {
      return responce.status;
    }
  }

  async updateUserWord(id: string, wordId: string, userWord: IUsersAllWords) {
    const responce = await fetch(
      `${this.baseLink}${PathLink.user}/${id}${PathLink.words}/${wordId}`,
      {
        method: 'POST',
        body: JSON.stringify(userWord),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    try {
      const wordsData: IUsersAllWords = await responce.json();

      return wordsData;
    } catch (error) {
      return responce.status;
    }
  }

  async deleteUserWord(id: string, wordId: string) {
    const responce = await fetch(
      `${this.baseLink}${PathLink.user}/${id}${PathLink.words}/${wordId}`
    );

    try {
      const wordData: {} = await responce.json();

      return wordData;
    } catch (error) {
      return responce.status;
    }
  }
}

export default Api;
