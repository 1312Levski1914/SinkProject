
/* Here is code for burger button */
function openBurgerMenu() {
    document.getElementById('burger-button').classList.toggle('change');
    document.getElementById("myDropDown").classList.toggle("show");
}
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
function showMore(){
    document.getElementById('moreNav').classList.toggle('show');
}
// JS for sound
function playAudio(url) {
    new Audio(url).play();
}