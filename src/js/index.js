import '../scss/style.scss';
import './form';

const elemRu = document.getElementsByClassName('ruSection');
const elemEng = document.getElementsByClassName('engSection');
const elemAr = document.getElementsByClassName('arSection');

function changeLanguage(event,language){
  event.preventDefault();
  if(language=='ru'){
    for (let i = 0; i < elemRu.length; i++) {
      elemRu[i].classList.remove('ruLng');
      elemEng[i].classList.add('engLng');
      elemAr[i].classList.add('arLng');
    }
  }
  else if(language=='eng'){
    for (let i = 0; i < elemEng.length; i++) {
      elemRu[i].classList.add('ruLng');
      elemEng[i].classList.remove('engLng');
      elemAr[i].classList.add('arLng');
    }
  }
  else if(language=='ar'){
    for (let i = 0; i < elemAr.length; i++) {
      elemRu[i].classList.add('ruLng');
      elemEng[i].classList.add('engLng');
      elemAr[i].classList.remove('arLng');
    }
  }
}
function btnRuSlider(event) {
  event.preventDefault();
  changeLanguage(event,"ru");
}
function btnEngSlider(event) {
  event.preventDefault();
  changeLanguage(event,"eng");
}
function btnArSlider(event) {
  event.preventDefault();
  changeLanguage(event,"ar");
}

window.onload = function () {
  const btnRu = document.getElementsByClassName('btnRu');
  for (let i = 0; i < btnRu.length; i++) {
    btnRu[i].addEventListener("click", btnRuSlider);
  }
  const btnEng = document.getElementsByClassName('btnEng  ');
  for (let i = 0; i < btnEng.length; i++) {
    btnEng[i].addEventListener("click", btnEngSlider);
  }
  const btnAr = document.getElementsByClassName('btnAr');
  for (let i = 0; i < btnAr.length; i++) {
    btnAr[i].addEventListener("click", btnArSlider);
  }

}
