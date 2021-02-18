function externalLinks_targetBlank() {
	/*
		Description:
		makes all external links open in a new tab
	*/
	let links = document.links;

	for (let i=0; i < links.length; i++) {
	   if (links[i].hostname != window.location.hostname)
	       links[i].target = '_blank';
	}
}

function init() {
	externalLinks_targetBlank();
}

window.addEventListener ? window.addEventListener("load", init, false) : window.attachEvent && window.attachEvent("onload", init);