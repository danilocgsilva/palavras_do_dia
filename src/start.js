import './style.scss';
import random from './random';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("quote").innerHTML = random();
});