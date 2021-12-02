function openMore(){
    document.getElementById('webDropDown').classList.toggle('show');
    window.onclick = function(event){
        if(!event.target.matches('.dropBtn')){
            let dropDown = document.getElementsByClassName('dropdown-content');
            
            for(let i=0; i<dropDown.length ; i++){
                let openDropDown = dropDown[i];
                if(openDropDown.classList.contains('show')){
                    openDropDown.classList.remove('show');
                }
            }
        }
    }
}

/* When user click on button show nav */
/* Close the dropdown menu if user click outside of it  */
/* Here is code for burger button */
function openBurgerMenu() {
    document.getElementById('burger-button').classList.toggle('change');
    document.getElementById("myDropDown").classList.toggle("show");
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropBurger')) {
            let dropdowns = document.getElementsByClassName("dropDownContent");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.getElementById('burger-button').classList.remove('change');
                }
            }
        }
    }
}
    function showMore() {
    let dropdown = document.getElementById('webDropDown');
    dropdown.style.display = 'flex';
}
function mobileCart(){
    let div = document.getElementById('shop');
    if(div.style.display !== 'none'){
        div.style.display = 'none';
    }else{
        div.style.display = 'block';
    }
    showCart();
}
function showProduct(){
   
    let shop = document.getElementById('ShopButton');
    
    shop.onclick = function(){
        let div = document.getElementById('shop');
        if(div.style.display !== 'none'){
            div.style.display = 'none';
        }else{
            div.style.display = 'block';
        }
    }
    
    
}
function showCart(){
    let cart = document.getElementById('cart');
        if(cart.style.display !== 'none'){
            cart.style.display = 'none';
        }else{
            cart.style.display = 'block';
        }
    
    
}
const productsE1 = document.querySelector('.shop-items');
const cartProductE = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.cart-total-title');
const totalItemsInCart = document.querySelector('.total-item-in-cart');


function renderProducts(){
    products.forEach( (product) => {
        productsE1.innerHTML += `
            <div class = 'shop-itemss'>
                <img src="${product.imgSrc}" alt="${product.name}" class="shop-item-image">
                <div class="shop-item-details">
                    <span class="shop-item-title">${product.name}</span>
                    <span class="shop-item-price">${product.price}</span>
                    <button class="btn btn-primary shop-item-button" type ="button" onclick ="toCart(${product.id})">ADD TO CART</button>
                </div>
            </div>
        `
        
    })
}
renderProducts();
let cart = [];
function toCart(id){
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnits('plus', id)
    }else{
    
        const item = products.find((product) => product.id == id);
        
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
        
    }
    updateCart()
}   
function removeItemFromCart(id){
    cart = cart.filter((item) => item.id !== id)
    updateCart();

}

function updateCart(){
    renderCartItems();
    renderSubtotal();
}
function renderSubtotal(){
    let totalPrice = 0, 
        totalItems = 0;
    
    cart.forEach((item)=>{
        totalPrice += item.price * item.numberOfUnits;
        totalItems+= item.numberOfUnits;
    })

    subtotalEl.innerHTML = `Total ( ${totalItems} items):
        <span class="cart-total-price">$ ${totalPrice.toFixed(2)}</span>`;
    totalItemsInCart.innerHTML = totalItems;
}
function renderCartItems(){
    cartProductE.innerHTML = '';
    cart.forEach((item) => {
        cartProductE.innerHTML += `
        <div class="cart-row">
            <div class="cart-item cart-column" onclick = 'removeItemFromCart(${item.id})'>
                <img src="${item.imgSrc}" alt="${item.name}" class="cart-item-image">
                <span class="cart-item-title">${item.name}</span>
            </div>
            <span class="cart-price cart-column">${item.price}</span>
            <div class="cart-quantity cart-column">
                <div class= 'units'>
                    <div class = 'btn minus' onclick = 'changeNumberOfUnits("minus", ${item.id})'>-</div>
                    <div class = 'number'>${item.numberOfUnits}</div>
                    <div class = 'btn plus' onclick = 'changeNumberOfUnits("plus", ${item.id})'>+</div>
                </div>
                <button class="btn btn-danger" type="button" onclick = 'removeItemFromCart(${item.id})' >REMOVE</button>
            </div>
        </div>
        `
    })
}

function changeNumberOfUnits(action,id){
    cart = cart.map((item)=>{
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === 'minus' && numberOfUnits > 1){
                numberOfUnits--
            }else if (action === 'plus' && numberOfUnits < item.instock){
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    })
    updateCart();
}