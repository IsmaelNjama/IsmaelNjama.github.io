const form = document.getElementById("myform");
const subBtn = document.getElementById("my-submit-btn");

form?.addEventListener("input", function () {
  if (form.checkValidity()) {
    subBtn?.removeAttribute("disabled");
  }
});
