import { InitialPage } from "./initial_page.js";
import './style.css';

const menu = document.querySelector('.menu')
const contact = document.querySelector('.contact')
const content = document.getElementById('content')

menu.addEventListener('click',() => {
    content.innerHTML = '';
    InitialPage('Dish Name 1', 'Dish Introduction');
    InitialPage('Dish Name 2', 'Dish Introduction');
    InitialPage('Dish Name 3', 'Dish Introduction');
    InitialPage('Dish Name 4', 'Dish Introduction');
    InitialPage('Dish Name 5', 'Dish Introduction');
    InitialPage('Dish Name 6', 'Dish Introduction');

})

contact.addEventListener('click',() => {
    content.innerHTML = '';
    InitialPage('Contact Name A', 'Contact Information');
    InitialPage('Contact Name B', 'Contact Information');
    InitialPage('Contact Name C', 'Contact Information');
    InitialPage('Contact Name D', 'Contact Information');
    InitialPage('Contact Name E', 'Contact Information');
})