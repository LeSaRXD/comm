const open_tos = () => {
	if (!window.location.hash.includes("tos"))
		return;

	const tos = document.querySelector("details[aria-labelledby='tos']");
	tos.open = true;
	document.style["scroll-behavior"] = "unset";
	tos.scrollIntoView();
	document.style["scroll-behavior"] = null;
}
document.addEventListener("DOMContentLoaded", open_tos);
window.addEventListener("popstate", open_tos);
