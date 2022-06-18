const welcome = document.querySelector('#welcome');
const welcomeMsg = document.querySelector('#welcome h1');
welcome.addEventListener('click', () => {
	welcomeMsg.textContent = 'Have a Good Time!';
});

const menuToggle = document.querySelector('.menu-button-container');
const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.close-button');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
		menuBtn.style.display = 'block';
		closeBtn.style.display = 'none';
	} else {
		menu.style.display = 'flex';
		menuBtn.style.display = 'none';
		closeBtn.style.display = 'block';
	}

});

const actionBtn = document.querySelector('#actionBtn button');
const extraGrids = document.querySelectorAll('.extra');
actionBtn.addEventListener('click', () => {
	for (const extra of extraGrids) {
		extra.style.display = 'block';
	}
});