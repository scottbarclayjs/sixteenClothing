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
		hideProducts(product);
	}
	for (let product of featured) {
		showProducts(product);
	}
});

flashBtn.addEventListener('click', (e) => {
	e.preventDefault();
	for (let product of allProducts) {
		hideProducts(product);
	}
	for (let product of flash) {
		showProducts(product);
	}
});

lastBtn.addEventListener('click', (e) => {
	e.preventDefault();
	for (let product of allProducts) {
		hideProducts(product);
	}
	for (let product of last) {
		showProducts(product);
	}
});

function hideProducts(product) {
	product.classList.add('hideProduct');
	product.classList.remove('showProduct');
}

function showProducts(product) {
	product.classList.remove('hideProduct');
	product.classList.add('showProduct');
}
