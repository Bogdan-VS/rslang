class Authorize {
  mainPage: HTMLElement;

  auth: HTMLFormElement;

  signIn: HTMLButtonElement;

  authClose: HTMLElement;

  subSignUpBtn: HTMLElement;

  signInAuth: HTMLElement;

  signUpAuth: HTMLElement;

  constructor() {
    this.mainPage = document.getElementById('mainPage');
    this.auth = document.getElementById('auth') as HTMLFormElement;
    this.signIn = document.getElementById('sign-in') as HTMLButtonElement;
    this.authClose = document.getElementById('auth-close');
    this.subSignUpBtn = document.getElementById('sub-sign-up__btn');
    this.signInAuth = document.getElementById('sign-in__auth');
    this.signUpAuth = document.getElementById('sign-up__auth');
    this.init();
  }

  init() {
    this.signIn.addEventListener('click', this.openAuthorize.bind(this));
    this.authClose.addEventListener('click', this.closeAuthorize.bind(this));
    this.subSignUpBtn.addEventListener('click', this.openSignUp.bind(this));
  }

  openAuthorize() {
    this.auth.classList.add('auth__active');
  }

  closeAuthorize() {
    this.auth.classList.remove('auth__active');
    setTimeout(() => this.addShowOrHide(this.signUpAuth, this.signInAuth), 250);
  }

  openSignUp() {
    this.addShowOrHide(this.signInAuth, this.signUpAuth);
  }

  addShowOrHide(firstName: HTMLElement, secondName: HTMLElement) {
    firstName.classList.add('hide');
    secondName.classList.remove('hide');
  }
}

export default Authorize;
