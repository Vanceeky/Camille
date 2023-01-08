let modal = document.querySelector(".modal");
let cartModal = document.querySelector(".cart-modal");

let cartBtn = document.querySelector(".cart-btn");
let loginBtn = document.querySelector(".login-btn");
let closeBtn = document.querySelector(".close")
let cart_close = document.querySelector(".cart_close");

cartBtn.addEventListener("click", openCart);
loginBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
cart_close.addEventListener("click", closeCart)

window.addEventListener("click", outsideClick);

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

function outsideClick(e) {
    if(e.target === modal){
        closeModal()
    }

    if(e.target === cartModal){
        closeCart()
    }

}

function closeCart() {
    cartModal.style.display = "none";
}

function openCart(){
    cartModal.style.display = "block";
}



