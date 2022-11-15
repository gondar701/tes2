let domside = document.querySelector('.domside');
let side = document.querySelector('.side');
side.addEventListener('click', ()=>{
  domside.classList.toggle('sidebar');
  domside.classList.toggle('hide');
})