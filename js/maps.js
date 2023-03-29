
const prvBtn = document.querySelector('.prv');
const nextBtn = document.querySelector('.nxt');
const mapLst = document.querySelectorAll('.map');
let currentlySelected = 0;

nextBtn.addEventListener("click", function(){
    mapLst[currentlySelected].classList.remove('active');
    currentlySelected++;
    mapLst[currentlySelected].classList.add('active');
    prvBtn.disabled = false;
    if (mapLst.length === currentlySelected + 1){
        nextBtn.disabled = true;
    }
    
});

prvBtn.addEventListener("click", function(){
    mapLst[currentlySelected].classList.remove('active');
    currentlySelected--;
    mapLst[currentlySelected].classList.add('active');
    nextBtn.disabled = false;
    if (currentlySelected===0){
        prvBtn.disabled = true;
    }
});

