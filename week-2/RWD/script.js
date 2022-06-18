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

function windowResize(x) {
  	if (x.matches) { // If media query matches
    	menu.style.display = "flex"; 	
  	} else {
  		menu.style.display = "none";
  		menuBtn.style.display = 'block';
    	closeBtn.style.display = 'none';
  	}
}

const x = window.matchMedia("(min-width: 800px)")
x.addListener(windowResize); // Attach listener function on state changes


const actionBtn = document.querySelector('#actionBtn button');
const extraGridContainer = document.querySelector('#extra');
const extraGrids = extraGridContainer.children;
actionBtn.addEventListener('click', () => {
	extraGridContainer.style.display = 'grid';
	for (const extraGrid of extraGrids) {
		extraGrid.classList.remove("hide");
	}
});