// ******************************
// home section changing skills
// ******************************
// ******************************
// let words = document.querySelectorAll(".word");
// words.forEach((word) => {
// 	let letters = word.textContent.split("");
// 	word.textContent = "";
// 	letters.forEach((letter) => {
// 		let span = document.createElement("span");
// 		span.textContent = letter;
// 		span.className = "letter";
// 		word.append(span);
// 	});
// });
// let currentWordIndex = 0;
// let maxWordIndex = words.length - 1;
// words[currentWordIndex].style.opacity = "1";

// let changeText = () => {
// 	let currentWord = words[currentWordIndex];
// 	let nextWord =
// 		currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

// 	Array.from(currentWord.children).forEach((letter, i) => {
// 		setTimeout(() => {
// 			letter.className = "letter out";
// 		}, i * 80);
// 	});
// 	nextWord.style.opacity = "1";
// 	Array.from(nextWord.children).forEach((letter, i) => {
// 		letter.className = "letter behind";
// 		setTimeout(() => {
// 			letter.className = "letter in";
// 		}, 340 + i * 80);
// 	});
// 	currentWordIndex =
// 		currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
// };
// changeText();
// setInterval(changeText, 3000);

// ******************************
// home section active header link
// ******************************
// ******************************

let menuLi = document.querySelectorAll(".head_links");
let section = document.querySelectorAll("section");

function activeMenu() {
	let len = section.length;
	while (--len && window.scrollY - 97 < section[len].offsetTop) {}
	menuLi.forEach((sec) => sec.classList.remove("a_active"));
	menuLi[len].classList.add("a_active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// ******************************
// sticky navbar ///////////
// ******************************
// ******************************
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 5);
});
// ******************************
// skills ///////////
// ******************************
// ******************************
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
	let dots = elem.getAttribute("data-dots");
	let marked = elem.getAttribute("data-percent");
	let percent = Math.floor((dots * marked) / 100);
	let points = "";
	let rotate = 360 / dots;

	for (let i = 0; i < dots; i++) {
		if (i > percent) {
			points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
		} else {
			points += `<div class="points marked" style="--i:${i}; --rot:${rotate}deg"></div>`;
		}
	}
	elem.innerHTML = points;
	console.log("updated");
});

// ******************************
// portfolio gallery ///////////
// ******************************
// ******************************
let mixer = mixitup(".port-container");

// ******************************
// portfolio navigation ///////////
// ******************************
// ******************************
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navItems = document.querySelector(".nav-items");
let isOpen = false;
function closeNav() {
	close.style.display = "none";
	open.style.display = "block";
	navItems.style.transform = `translateY(-200%)`;
}
function openNav() {
	open.style.display = "none";
	close.style.display = "block";
	navItems.style.transform = `translateY(0%)`;
}
open.addEventListener("click", () => {
	openNav();
	isOpen = true;
});
close.addEventListener("click", () => {
	closeNav();
	isOpen = false;
});
const navLinks = document.querySelectorAll(".nav-items__nav-item");
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		if (isOpen) {
			closeNav();
			isOpen = false;
		}
	});
});
window.addEventListener("click", (e) => {
	// console.log(e.target)
	if (
		isOpen &&
		!e.target.classList.contains("navigation") &&
		!e.target.classList.contains("open")
	) {
		closeNav();
		isOpen = false;s
	}
});
