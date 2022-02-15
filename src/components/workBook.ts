import Api from '../server/api';
import { IWord } from '../utils/api/interfaces';
import Render from './render';
import colorThemes from '../utils/workBook/enums';

class WorkBook {
    private api: Api;

    private words: IWord[];

    private currentPage: number;

    private wordsGroup: string;

    constructor() {
        this.words = []
        this.api = new Api()
        this.listen()
        this.currentPage = 1;
        this.wordsGroup = colorThemes.a1.wordsGroup
    }


    static renderWordCard = (word: IWord) => `<div class="word-card">
          <div class="word-card__img" style="background: url('https://raw.githubusercontent.com/SashaLado/react-rslang-be/main/${word.image}') center/cover"></div>
          <div class="word-card__text-block">
            <h3 class="word-card__title">${word.word}</h3>
            <div class="word-card__translation text">${word.wordTranslate}</div>
            <div class="word-card__transcript-wrapper">
              <div class="word-card__transcript-text text">${word.transcription}</div>
              <div class="word-card__transcript-icon" id="${word.id}"></div>
            </div>
            <div class="word-card__usage-block">
              <p class="text">${word.textMeaning}</p>
              <p class="text text_translation">${word.textMeaningTranslate}</p>
            </div>
            <div class="word-card__usage-block">
              <p class="text">${word.textExample}</p>
              <p class="text text_translation">${word.textExampleTranslate}</p>
            </div>
          </div>
          <audio class="audio" id="audio1-${word.id}" src="https://raw.githubusercontent.com/SashaLado/react-rslang-be/main/${word.audio}"></audio>
          <audio class="audio" id="audio2-${word.id}" src="https://raw.githubusercontent.com/SashaLado/react-rslang-be/main/${word.audioExample}"></audio>
          <audio class="audio" id="audio3-${word.id}" src="https://raw.githubusercontent.com/SashaLado/react-rslang-be/main/${word.audioMeaning}"></audio>
        </div>`

    async updateStateWords (page: string, group: string) {
        this.words = await this.api.getWords(page, group);
        return this.words
    }

    changeColorThem ({ color, wordsGroup }: {color: string, wordsGroup: string}, target: HTMLButtonElement) {
        document.getElementById('workBookPage').style.backgroundColor = color;
        const wordsContainer = document.querySelector('.words-container');
        if (wordsContainer) {
            this.wordsGroup = wordsGroup
            this.updateStateWords('0', wordsGroup).then((r) => {
                wordsContainer.innerHTML = Render.renderWordsContainer(r);
                const transcriptElements: NodeListOf<HTMLTemplateElement> = document.querySelectorAll('.word-card__transcript-text');
                transcriptElements.forEach((el) => {
                    el.style.backgroundColor = color;
                })
            });
        }
    }

    changePage (id: HTMLButtonElement) {
        if (id.classList.contains('next')) {
            this.currentPage += 1;
            id.disabled = this.currentPage === 30;
        } else if (id.classList.contains('prev')) {
            this.currentPage -= 1;
            id.disabled = this.currentPage === 1;
        }
        const page = (this.currentPage - 1).toString();
        const wordsContainer = document.querySelector('.words-container');
        if (wordsContainer) {
            this.updateStateWords(page, this.wordsGroup).then((r) => {
                wordsContainer.innerHTML = Render.renderWordsContainer(r);
            })
        }
    }

    playSound (id: string) {
        const audios = document.querySelectorAll('audio') as unknown as HTMLAudioElement[];
        audios.forEach((audio) => {
            audio.pause()
        })
        const sound1 = document.getElementById(`audio1-${id}`) as unknown as HTMLAudioElement;
        const sound2 = document.getElementById(`audio2-${id}`) as unknown as HTMLAudioElement;
        const sound3 = document.getElementById(`audio3-${id}`) as unknown as HTMLAudioElement;

        sound1.play()
        sound1.onended = function () {
            sound2.play();
            sound2.onended = function () {
                sound3.play()
            }
        }
    }

    showWorkBook () {
        const mainPage = document.getElementById('mainPage');
        const workBookPage = document.getElementById('workBookPage');

        mainPage.style.display = 'none';
        workBookPage.style.display = 'block';
    }

    async listen () {
        document.addEventListener('click', (e) => {
            const target = e.target  as HTMLButtonElement;
            if (target.id === 'a1') {
                this.changeColorThem(colorThemes.a1, target)
            } else if (target.id === 'a2') {
                this.changeColorThem(colorThemes.a2, target)
            } else if (target.id === 'b1') {
                this.changeColorThem(colorThemes.b1, target)
            } else if (target.id === 'b2') {
                this.changeColorThem(colorThemes.b2, target)
            } else if (target.id === 'c1') {
                this.changeColorThem(colorThemes.c1, target)
            } else if (target.id === 'c2') {
                this.changeColorThem(colorThemes.c2, target)
            } else if (target.classList.contains('next')) {
                this.changePage(target)
            } else if (target.classList.contains('prev')) {
                this.changePage(target)
            } else if (target.classList.contains('word-card__transcript-icon')) {
                this.playSound(target.id)
            }  else if (target.id === 'workBookButton') {
                this.showWorkBook()
            }
        })
    }

}
export default WorkBook
