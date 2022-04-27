import './style.scss';
import random from './random';

document.addEventListener('DOMContentLoaded', function() {
    let quote = document.getElementById("quote")
    quote.innerHTML = random();

    let nextButton = document.getElementsByClassName("next")[0];
    
    nextButton.addEventListener("click", function() {
        quote.innerHTML = random();
    })
});