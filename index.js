const next = document.getElementById('next');
const prev = document.getElementById('prev');
const cardContainer = document.querySelector('.cards-container');
const navMenu = document.getElementById('nav-menu');
const iconMenu = document.getElementById('menu-icon');

/* responsive navbar */
/******************************************** */
//function
const togglerActive = (e) => {
	iconMenu.parentElement.classList.toggle('active');
};

//events
iconMenu.addEventListener('click', togglerActive);

/********************************************* */
// const mainSlider = document.querySelector('.slider');
// let card = document.querySelector('.card');
let allowedShowItem;
// window.screen.width<=995 && window.screen.width < 610 ? allowedShowItem= 2 : window.screen.width<=610 ? allowedShowItem= 1:console.log('3');
if (window.screen.width > 995) {
	allowedShowItem = 3;
} else if (window.screen.width <= 995 && window.screen.width > 610) {
	allowedShowItem = 2;
	console.log('2');
} /*if (window.screen.width <= 610)*/ else {
	allowedShowItem = 1;
	console.log('1');
}

// card.offsetWidth = (mainSlider.clientWidth / activeItem);
let cardWidth = document.querySelector('.card').offsetWidth;
const itemLength = [...document.querySelectorAll('.cards-container .card')]
	.length;
console.log(document.querySelectorAll('.card'));

let activeItem = allowedShowItem;
console.log(activeItem, allowedShowItem, itemLength);

window.onresize = () => {
	cardWidth = document.querySelector('.card').offsetWidth;
	window.screen.width >= 995 ? (allowedShowItem = 2) : (allowedShowItem = 3);
	window.screen.width >= 610 ? (allowedShowItem = 1) : (allowedShowItem = 3);
	activeItem = allowedShowItem;
};

let left = 0;
let nextCard = (e) => {
	if (activeItem !== itemLength) {
		left -= cardWidth;
		cardContainer.style.transform = `translateX(${(left -= 20)}px)`;
		activeItem++;
		// console.log(cardWidth);
		// console.log(activeItem)
		// console.log(itemLength)
	} else return false;
};

let prevCard = (e) => {
	if (activeItem > allowedShowItem) {
		left += cardWidth;
		cardContainer.style.transform = `translateX(${(left += 20)}px)`;
		activeItem--;
		// console.log(cardWidth);
		// console.log(activeItem)
		// console.log(itemLength)
	} else return false;
};

next.addEventListener('click', nextCard);
prev.addEventListener('click', prevCard);
/************************************************************** */
/************************************************************** */
/************************************************************** */
// second slider
/************************************************************** */
/************************************************************** */
let activeChefItems = [...document.getElementsByClassName('slider-item')]
	.length;
let chefItemWidth = document.querySelector('.slider-item').offsetWidth;
const nextItem = document.querySelector('.chef-main-slider .next');
const prevItem = document.querySelector('.chef-main-slider .prev');
const movedItemChef = document.querySelector('.moved-chef-slider');

// functions
let leftMove = 0;
let allowedShowedChef = 1;
let itemToShow = allowedShowedChef;
console.log(activeChefItems, chefItemWidth, itemToShow, allowedShowedChef);

let nextItemChef = (e) => {
	if (itemToShow != activeChefItems) {
		nextItem.classList.remove('disabled');
		prevItem.classList.remove('disabled');
		leftMove -= chefItemWidth;
		movedItemChef.style.transform = `translateX(${leftMove}px)`;
		itemToShow++;
	} else {
		nextItem.classList.add('disabled');
		return false;
	}
};

let prevItemChef = (e) => {
	if (itemToShow != allowedShowedChef) {
		prevItem.classList.remove('disabled');
		nextItem.classList.remove('disabled');
		leftMove += chefItemWidth;
		movedItemChef.style.transform = `translateX(${leftMove}px)`;
		itemToShow--;
	} else {
		prevItem.classList.add('disabled');
		return false;
	}
};

// events
nextItem.addEventListener('click', nextItemChef);
prevItem.addEventListener('click', prevItemChef);
