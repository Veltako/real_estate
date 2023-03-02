const expanding = document.querySelector('.expanding-collection');
const Front = document.querySelector('.front');
const Back = document.querySelector('.back');

expanding.addEventListener('click', () => {
    Front.classList.toggle('clicked');
    Back.classList.toggle('show');
});