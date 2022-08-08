fetch('books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
           localStorage.setItem("books", JSON.stringify(data));
        });

const books = JSON.parse(localStorage.getItem("books"));

const header = document.createElement("header");
header.className = "header";

let body = document.querySelector("body");
body.appendChild(header);
let cart = document.createElement('div');

cart.innerHTML = `
					<div class="cart-body">
						<h4 class="main-title">Your order</h4>
						<div data-cart-empty class="alert alert-secondary" role="alert">
							Your cart is empty
						</div>

        <div class = 'cart-wrapper'>
								</div>
                <div class ='pay'>To pay: <span class = 'toPay'>0</span></div>
        <button class='confirm'> <a href="delivery.html">Confirm order</a></button></div> `


cart.className = "header-cart";
let shopingCart = document.createElement('a')
cart.appendChild(shopingCart)
header.appendChild(cart);



const overlay = document.createElement('div');

body.appendChild(overlay);
overlay.className = 'overlay';

let i = document.createElement('i');
shopingCart.appendChild(i);
i.className ="fa-solid fa-cart-shopping"
let h1 = document.createElement("h1");
h1.innerHTML = "Welcome To The Book Store";
h1.className = "header-title";
header.appendChild(h1);

let main = document.createElement('main');
body.appendChild(main)

let gallerydiv = document.createElement('div');
gallerydiv.className = 'card'
main.appendChild(gallerydiv);

renderGallery();

function renderGallery() {
  const gallery = books.map(({ title, author, imageLink, description, price, id }) => {

    return `<div class = 'main' data-id = '${id}'> <img
      class="gallery__image"
      src="${imageLink}" width = '250' height = '300'/>

<div class = 'description'><h2 class = card-title> ${title}</h2>
<p class = 'autor'>${author}</p>
<p class = 'price'>${price}</p>

<button class ="add" data-cart >Add to cart</button>

<button data-modal-target='#modal' class ="showMore">Show more</button>   <div class= 'modal' id = 'modal'>
  <div class = 'modal-header'><h2 class = 'modal-title'>${title}</h2><button data-close-button class = 'close'>&times</button></div>
   <p class = 'modal-body'>${description}</p></div>   </div>
   </div>

`;

  }).join("");

gallerydiv.insertAdjacentHTML('afterbegin', gallery);


}

const close = document.querySelectorAll('[data-close-button]');
const showmore = document.querySelectorAll('[data-modal-target]');



  showmore.forEach(button => {
    button.addEventListener('click', (e) => {
      let modal = e.target.closest('div').querySelector('.modal');
      let main = e.target.closest('div.main');
      main.classList.add('active');
      modal.classList.add('active')
      overlay.classList.add('active');



    })
  })


close.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
})
})
function openModal( modal) {
  if (!modal) return
    modal.classList.add('active')
  overlay.classList.add('active');



}
function closeModal(modal) {
  if (!modal) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.querySelector('.main').classList.remove('active');
}
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal)
  })
})


