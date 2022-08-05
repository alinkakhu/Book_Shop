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

  if (house.value.length == 0) {
  return
}

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

   if (flat.value.length == 0) {
  return
}

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
  const dateInput = document.getElementById('date')
  let userDate = document.getElementById('date').value
  userDate = new Date(userDate)
  if (today > userDate) {
    dateInput.nextElementSibling.textContent = 'The field is invalid';
    dateInput.style.borderColor = "red";
    return false
  } else {
    dateInput.nextElementSibling.textContent = '';
    dateInput.style.borderColor = "black";
  return true
  }

}
const submit = document.getElementById("submit");



function submitBtn() {


  submit.setAttribute("disabled", "disabled");
  form.addEventListener("keyup", enableCompleteBtn);
  form.addEventListener("change", enableCompleteBtn);

  function enableCompleteBtn() {
    if (form.checkValidity() === true && validateDate()   ) {
      submit.removeAttribute("disabled");
      submit.classList.remove('disabled')
    } else {
      submit.setAttribute("disabled", "disabled");
      submit.classList.add('disabled')
    }
  }
}

validateHouse()
submitBtn()


const orderForm = document.querySelector('.order');
const overlay = document.querySelector('.overlay')

function showInfo(e) {
  e.preventDefault();

    orderForm.classList.add('active')
  overlay.classList.add('active');
  const street = document.querySelector('.street');
  const house = document.querySelector('.house');
  const delDate = document.querySelector('.date');
  const flat = document.querySelector('.flat');
  const name = document.querySelector('.name');
  const surname = document.querySelector('.surname');

orderForm.innerHTML = `
    <button data-close-button class='close-form'>&times</button>
<h2>The order created!</h2>
<p>Delivery address: <span class="adress">${street.value} ${house.value}, ${flat.value}</span></p>
<p>Customer: <span class="customer">${name.value} ${surname.value}</span></p>
<p>Delivery date: <span class="delDate">${delDate.value}</span></p>

`
  document.querySelector('.close-form').addEventListener('click', function () {
    orderForm.classList.remove('active');
    overlay.classList.remove('active')
})

  overlay.addEventListener('click', () => {
    orderForm.classList.remove('active');
    overlay.classList.remove('active')
    })

}
 submit.addEventListener('click', showInfo)