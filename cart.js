const shoppingCart = document.querySelector('.fa-solid')
let wrapper = document.querySelector('.cart-wrapper')
const cartWrapper = document.querySelector('.cart-body')
const payBtn = document.querySelector('.pay')
function toggleCart() {
    cartWrapper.classList.add('show');
if (!cartWrapper.classList.contains('show')) {
        console.log('fdg');
        cartWrapper.classList.add('show')
    }

}
window.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.wrapper');
        const bookInfo = {
            title: card.querySelector('.card-title').textContent,
            author: card.querySelector('.autor').textContent,
            price: card.querySelector('.price').textContent,
            productId: card.getAttribute('data-id')

        }
        toggleCart()
         calcCartPrice()
    // let iteminCart =wrapper.querySelector(`[data-id="${bookInfo.productId}"]`)
    //     console.log(iteminCart);
    //     if (iteminCart) {
    //         const counterElement = iteminCart.querySelector('.quantity');
    //         counterElement.innerHTML++
    //         return
    // //     }

        const cartItemHtml = `<div class="cart-item"  data-id="${bookInfo.productId}">
              <div class = 'cart-author'><h4 class= 'author-title'>${bookInfo.author}</h4><button data-close class = 'close'>&times</button></div>
              	<div class="cart-title">${bookInfo.title}</div>

                       	<div class="price__currency">${bookInfo.price}</div>
                        <div class='quan'> Quantity: <div class ='quantity'>1</div></div>
                       </div>`;

        // wrapper.insertAdjacentHTML('beforebegin', cartItemHtml)

        let iteminCart =cartWrapper.querySelector(`[data-id="${bookInfo.productId}"]`)
        console.log(iteminCart);
        if (iteminCart) {
            const counterElement = iteminCart.querySelector('.quantity');
            counterElement.innerHTML++;
             calcCartPrice()
           return
        } else {
            wrapper.insertAdjacentHTML('beforeend', cartItemHtml);
            toggleCart()
            toggleCartStatus()
         calcCartPrice()}




    }

})
window.addEventListener('click',function deleteCartItem(e) {
    if (e.target.hasAttribute('data-close')) {
        const itemToRemove = e.target.closest('.cart-item');
        console.log(itemToRemove)
        itemToRemove.remove()
        toggleCartStatus()
        calcCartPrice()
}
})

function toggleCartStatus() {

    const wrapper = document.querySelector('.cart-wrapper')
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const confirm = document.querySelector('.confirm')
    console.log(wrapper.children)
    if (wrapper.children.length > 0) {
        console.log('full');
        cartEmpty.classList.add('none');
        confirm.classList.add('show');
        payBtn.classList.add('show')
    } else {
        console.log('emty');
        cartEmpty.classList.remove('none');
        confirm.classList.remove('show');
        payBtn.classList.remove('show')
    }
}
shoppingCart.addEventListener('click', function () {
    if (cartWrapper.classList.contains('show')) {
        console.log('fdg');
        cartWrapper.classList.remove('show')
    } else {
        cartWrapper.classList.add('show')
    }
})

function calcCartPrice() {

    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const priceEl = item.querySelector('.price__currency').textContent;
        const amount = item.querySelector('.quantity').textContent;

        const currentPrice = priceEl * amount;
        totalPrice += currentPrice;

    })

    console.log(totalPrice)
    document.querySelector('.toPay').textContent = totalPrice
}