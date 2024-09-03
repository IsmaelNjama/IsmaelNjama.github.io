"use strict";
const form = document.getElementById("myform");
const subBtn = document.getElementById("my-submit-btn");
form === null || form === void 0 ? void 0 : form.addEventListener('input', function () {
    if (form.checkValidity()) {
        subBtn === null || subBtn === void 0 ? void 0 : subBtn.removeAttribute('disabled');
    }
});
//# sourceMappingURL=form.js.map