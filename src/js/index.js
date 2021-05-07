import '../scss/style.scss';

const elemRu = document.getElementsByClassName('ruSection');
const elemEng = document.getElementsByClassName('engSection');
const elemAr = document.getElementsByClassName('arSection');
function btnRuSlider(event) {
  event.preventDefault();
  for (let i = 0; i < elemRu.length; i++) {
    elemRu[i].classList.remove('ru');
    elemEng[i].classList.add('eng');
    elemAr[i].classList.add('ar');
  }

}
function btnEngSlider(event) {
  event.preventDefault();
  for (let i = 0; i < elemEng.length; i++) {
    elemEng[i].classList.remove('eng');
    elemRu[i].classList.add('ru');
    elemAr[i].classList.add('ar');
  }
}
function btnArSlider(event) {
  event.preventDefault();
  for (let i = 0; i < elemAr.length; i++) {
    elemAr[i].classList.remove('ar');
    elemEng[i].classList.add('eng');
    elemRu[i].classList.add('ru');
  }
}


window.onload = function () {
  const btnRu = document.getElementsByClassName('header__btnRU');
  for (let i = 0; i < btnRu.length; i++) {
    btnRu[i].addEventListener("click", btnRuSlider);
  }
  const btnEng = document.getElementsByClassName('header__btnENG');
  for (let i = 0; i < btnEng.length; i++) {
    btnEng[i].addEventListener("click", btnEngSlider);
  }
  const btnAr = document.getElementsByClassName('header__btnAR');
  for (let i = 0; i < btnAr.length; i++) {
    btnAr[i].addEventListener("click", btnArSlider);
  }
}
