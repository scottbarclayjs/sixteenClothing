const accordionItem = document.querySelectorAll('.message-us-item');
const accordionItemP = document.querySelectorAll('.item-body');

for (let i = 0; i < accordionItem.length; i++) {
	accordionItem[i].style.zIndex = [i];
	accordionItem[i].addEventListener('click', () => {
		for (let para of accordionItemP) {
			para.classList.remove('showItem');
			para.classList.add('hideItem');
		}
		accordionItemP[i].classList.remove('hideItem');
		accordionItemP[i].classList.add('showItem');
	});
}
