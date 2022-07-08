const username = document.getElementById('name');
const form = document.querySelector('form');
const errorName = document.querySelector('.error-name')

function checkValidityInputs() {
    const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        console.log(inputs)
      if (input.checkValidity() === true) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
      }
    });
  });
}

