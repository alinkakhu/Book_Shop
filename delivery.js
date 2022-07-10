const username = document.getElementById('name');
const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');
const surname = document.getElementById('surname');
const street = document.getElementById('street');
const house= document.getElementById('house');
const flat= document.getElementById('flat');

function validateName() {

      if (username.checkValidity() === true) {
username.classList.remove("invalid");
        username.nextElementSibling.textContent = '';
 return true

      } else {
       username.classList.add("invalid");
      username.nextElementSibling.textContent = 'The field is invalid';
   return false

      }

}
function validateSurame() {

      if (surname.checkValidity() === true) {
surname.classList.remove("invalid");
        username.nextElementSibling.textContent = '';
 return true

      } else {
       surname.classList.add("invalid");
      surname.nextElementSibling.textContent = 'The field is invalid';
   return false

      }

}

function validateStreet() {

      if (street.checkValidity() === true) {
street.classList.remove("invalid");
       street.nextElementSibling.textContent = '';
 return true

      } else {
       street.classList.add("invalid");
     street.nextElementSibling.textContent = 'The field is invalid';
   return false

      }

}


function validateHouse() {

      if (house.checkValidity() === true) {
house.classList.remove("invalid");
       house.nextElementSibling.textContent = '';
 return true

      } else {
      house.classList.add("invalid");
    house.nextElementSibling.textContent = 'The field is invalid';
   return false

      }

}

function validateFlat() {

      if (flat.checkValidity() === true) {
flat.classList.remove("invalid");
       flat.nextElementSibling.textContent = '';
 return true

      } else {
      flat.classList.add("invalid");
   flat.nextElementSibling.textContent = 'The field is invalid';
   return false

      }

}


function validateDate() {
  let today = new Date()
  console.log(today)
  const dateInput = document.getElementById('date')
  let userDate = document.getElementById('date').value
  userDate = new Date(userDate)
  if (today > userDate) {
    console.log('gfgg')

    dateInput.nextElementSibling.textContent = 'The field is invalid';
    dateInput.style.borderColor = "red";
    return false
  } else {
    dateInput.nextElementSibling.textContent = '';
    dateInput.style.borderColor = "black";
  return true
  }

}


function submitBtn() {
  const submit = document.getElementById("submit");

  submit.setAttribute("disabled", "disabled");
  form.addEventListener("keyup", enableCompleteBtn);
  form.addEventListener("change", enableCompleteBtn);

  function enableCompleteBtn() {
    if (form.checkValidity() === true && validateDate() ) {
      submit.removeAttribute("disabled");
    } else {
      submit.setAttribute("disabled", "disabled");
    }
  }
}
submitBtn()



