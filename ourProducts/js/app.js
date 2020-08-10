const allProductsBtn = document.querySelector('.all-productsBtn');
const featuredProdBtn = document.querySelector('.featured-productsBtn');
const flashBtn = document.querySelector('.flash-dealsBtn');
const lastBtn = document.querySelector('.last-minuteBtn');
const allProducts = document.querySelectorAll('.product-card');
const featured = document.querySelectorAll('.featured');
const flash = document.querySelectorAll('.flash');
const last = document.querySelectorAll('.last');

allProductsBtn.addEventListener('click', (e) => {
	e.preventDefault();
	for (let product of allProducts) {
		product.classList.remove('showProduct');
		product.classList.remove('hideProduct');
	}
});

featuredProdBtn.addEventListener('click', (e) => {
	e.preventDefault();
	for (let product of allProducts) {
		product.classList.add('hideProduct');
		product.classList.remove('showProduct');
	}
	for (let product of featured) {
		product.classList.remove('hideProduct');
		product.classList.add('showProduct');
	}
});

flashBtn.addEventListener('click', (e) => {
	e.preventDefault();
	for (let product of allProducts) {
		product.classList.add('hideProduct');
		product.classList.remove('showProduct');
	}
	for (let product of flash) {
		product.classList.remove('hideProduct');
		product.classList.add('showProduct');
	}
});

lastBtn.addEventListener('click', (e) => {
	e.preventDefault();
	for (let product of allProducts) {
		product.classList.add('hideProduct');
		product.classList.remove('showProduct');
	}
	for (let product of last) {
		product.classList.remove('hideProduct');
		product.classList.add('showProduct');
	}
});
