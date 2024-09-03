"use strict";
const prvBtn = document.querySelector('.prv');
const nextBtn = document.querySelector('.nxt');
const mapLst = document.querySelectorAll('.map');
let currentlySelected = 0;
if (prvBtn && nextBtn) {
    nextBtn.addEventListener("click", function () {
        if (mapLst.length > 0 && currentlySelected < mapLst.length) {
            mapLst[currentlySelected].classList.remove('active');
            currentlySelected++;
            if (currentlySelected < mapLst.length) {
                mapLst[currentlySelected].classList.add('active');
            }
            prvBtn.disabled = false;
        }
        if (mapLst.length === currentlySelected + 1) {
            nextBtn.disabled = true;
        }
    });
    prvBtn.addEventListener("click", function () {
        mapLst[currentlySelected].classList.remove('active');
        currentlySelected--;
        mapLst[currentlySelected].classList.add('active');
        nextBtn.disabled = false;
        if (currentlySelected === 0) {
            prvBtn.disabled = true;
        }
    });
}
//# sourceMappingURL=maps.js.map