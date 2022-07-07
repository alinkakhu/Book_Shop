const header = document.createElement("header");
header.className = "header";
let body = document.querySelector("body");
body.appendChild(header);
let cart = document.createElement('div');
cart.className = "header-cart";
let shopingCart = document.createElement('a')
cart.appendChild(shopingCart)
header.appendChild(cart)

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
let books=[{
  "author": "Douglas Crockford",
  "imageLink": "https://static.frontendmasters.com/assets/courses/2016-06-20-good-parts-javascript-web/thumb.webp",
  "title": "JavaScript: The Good Parts: The Good Parts",
  "price": 30,
  "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
},
  {
    "author": "David Herman",
    "imageLink": "https://www.bookcity.pl/bigcovers/2/1/8/6/9780321812186.jpg",
    "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "price": 22,
    "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
  },
  {
    "author": "David Flanagan",
    "imageLink": "https://static01.helion.com.pl/global/okladki/326x466/e_1uas.jpg",
    "title": "JavaScript: The Definitive Guide",
    "price": 40,
    "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
  },
  {
    "author": " Eric Elliott",
    "imageLink": "https://static01.helion.com.pl/global/okladki/326x466/e_2g9q.jpg",
    "title": "Programming JavaScript Applications",
    "price": 19,
    "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
  },
  {
    "author": "Addy Osmani",
    "imageLink": "https://static01.helion.com.pl/global/okladki/326x466/e_2g1y.jpg",
    "title": "Learning JavaScript Design Patterns",
    "price": 32,
    "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
  },
  {
    "author": "Boris Cherny",
    "imageLink": "https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/3/2/3299906536732.jpg",
    "title": "Programming TypeScript",
    "price": 28,
    "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
  },
  {
    "author": "Alex Banks, Eve Porcello",
    "imageLink": "https://static01.helion.com.pl/global/okladki/326x466/e_1uaz.jpg",
    "title": "Learning React, 2nd Edition",
    "price": 25,
    "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
  },
  {
    "author": "Bradley Meck Alex Young and Mike Cantelon",
    "imageLink": "https://images.manning.com/360/480/resize/book/9/be0e700-8ac5-44b7-92fc-0a0d250969be/Cantelon-Node-2ed.png",
    "title": "Node.js in Action",
    "price": 38,
    "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
  },
  {
    "author": "Kyle Simpson",
    "imageLink": "https://image.ceneostatic.pl/data/products/105588761/i-you-don-t-know-js-yet-get-started.jpg",
    "title": "You Don't Know JS Yet: Get Started",
    "price": 26,
    "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
  },
  {
    "author": "John Resig and Bear Bibeault",
    "imageLink": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420641519l/24346149.jpg",
    "title": "Secrets of the JavaScript Ninja",
    "price": 33,
    "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
  }
]

const gallery=books.map(({ title, author, imageLink, description,price}) => {

    return  `<div class = 'wrapper'><div class = 'picture'><img
      class="gallery__image"
      src="${imageLink}" width = '250' height = '300'/></div>

<div class = 'description'><h2 class = card-title> ${title}</h2>
<p class = 'autor'>${author}</p>
<p class = 'price'>${price}</p>

<button>Add to cart</button>

<button data-modal-target='#modal'>Show more</button>   <div class= 'modal' id = 'modal'>
  <div class = 'modal-header'><h2 class = 'modal-title'>${title}</h2><button data-close-button class = 'close'>&times</button></div>
   <p class = 'modal-body'>${description}</p></div>   <div id = 'overlay'></div> </div>
   </div>

`;
//

    }).join("")
gallerydiv.insertAdjacentHTML('afterbegin', gallery);
const showmore = document.querySelectorAll('[data-modal-target]');
const close = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

showmore.forEach(button => {
  button.addEventListener('click', (e) => {
  //  const modal = document.querySelector(button.dataset.modalTarget);

//  openModal(modal)
    // e.target.closest('.modal').classList.add('active');
    let title = e.target.closest('div').querySelector('.card-title');
    let modal = e.target.closest('div').querySelector('.modal');
    modal.classList.add('active')

    console.log(modal)

})
})

close.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
})
})
function openModal( modal) {
  if (modal == null) return

    modal.classList.add('active')

  overlay.classList.add('active');



}
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active')
}
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal)
  })
})


