let getLang = localStorage.getItem("langDir");
if (getLang) {
  if (getLang == 'rtl') {
    changeDir('rtl')
  }else {
    changeDir('ltr')
  }
}

// lang dir
let en = document.getElementById('eng-lang');
let ar = document.getElementById('ar-lang');

en.addEventListener('click', () => changeDir("ltr"));
ar.addEventListener('click', () => changeDir("rtl"));

function changeDir(dir) {
  document.documentElement.setAttribute('dir', dir);
  localStorage.setItem('langDir', dir);
}
