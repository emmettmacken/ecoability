const buybuttons = document.querySelectorAll('.card-button');
const buycount = document.getElementById('buycount');
let count = 0;

buybuttons.forEach(button => {
    button.addEventListener('click',
 function() {
        count++;
        buycount.textContent = count;
    });
});
