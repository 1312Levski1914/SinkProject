var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for(var i = 0 ; i < removeCartItemButtons[i]; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(){
        console.log('hello WOrlds');
    })
    document.getElementById("myBtn").addEventListener("click", function() {
        document.getElementById("demo").innerHTML = "Hello World";
      });
}
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
    function showMore(){
    document.getElementById('moreNav').classList.toggle('show');
}
// JS for sound
function playAudio(url) {
    new Audio(url).play();
}
function showProduct(){
    let productElement = document.getElementById('shop');
    productElement.style.display = 'block';
}
function showCart(){
    let cart = document.getElementById('cart');
    cart.style.display='block';
}