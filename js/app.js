// Navbar dark to light on scroll

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
	window.scrollY >= 675
		? nav.classList.add('light')
		: nav.classList.remove('light');
});

// Header change when bottom nav circle is pressed

const header = document.querySelector('header');
const headerText = document.querySelectorAll('.header-text');
const headerNav = document.querySelectorAll('.nav-circle');
const headerBackground = document.querySelectorAll('.header-background');

for (let i = 0; i < headerNav.length; i++) {
	headerNav[i].addEventListener('click', () => {
		for (let j = 0; j < headerNav.length; j++) {
			headerNav[j].classList.remove('active');
			headerText[j].classList.add('hide');
			headerText[j].classList.remove('show');
			headerBackground[j].classList.add('hideBG');
			headerBackground[j].classList.remove('showBG');
		}
		headerNav[i].classList.add('active');
		headerText[i].classList.add('show');
		headerText[i].classList.remove('hide');
		headerBackground[i].classList.add('showBG');
		headerBackground[i].classList.remove('hideBG');
		headerBackground[
			i
		].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
		url(/assets/headerBG${i}-min.jpg)`;
	});
}

// Mobile Nav animation

const mobileMenu = document.querySelector('.mobile-menu-btn');
const mobileNavLinks = document.querySelector('.nav-mobile-links');

mobileMenu.addEventListener('click', () => {
	mobileNavLinks.classList.toggle('showMobileNav');
	mobileNavLinks.classList.toggle('hideMobileNav');
});
