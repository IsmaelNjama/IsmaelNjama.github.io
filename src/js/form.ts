
const form = document.getElementById("myform") as HTMLFormElement | null;
const subBtn = document.getElementById("my-submit-btn") as HTMLButtonElement | null;

form?.addEventListener('input', function () {
    if (form.checkValidity()) {
        subBtn?.removeAttribute('disabled');
    }
})