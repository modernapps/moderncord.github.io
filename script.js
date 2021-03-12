function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function fade(element, element2) {
	let h1Elements = document.getElementById("div");
	h1Elements.classList.toggle("fade");
	let f1 = document.getElementById(element);
	f1.classList.toggle("fade");
	let f2 = document.getElementById(element2);
	f2.classList.toggle("fade");
}

async function on(overlay) {
	await sleep(1900);
	document.getElementById(overlay).style.display = "block";
}

async function off(overlay) {
	document.getElementById(overlay).style.display = "none";
}
