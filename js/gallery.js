let gallery = null;

document.addEventListener("DOMContentLoaded", () => {
	gallery = document.getElementById("gallery");
	if (!gallery) {
		console.warn("No #gallery in DOM");
		return;
	}

	gallery.addEventListener("click", close_gallery);
	window.addEventListener("popstate", close_gallery);
	gallery.addEventListener("wheel", scroll_gallery);
	window.addEventListener("keydown", (e) => { if (e.key == "Escape") close_gallery(); });

	for (const image of document.getElementsByClassName("card_image")) {
		image.addEventListener("mousedown", open_gallery);
	}
});

const open_gallery = (e) => {
	const max_idx = parseInt(e.target.dataset.maxIdx);
	const new_children = Array.from({ length: max_idx }, (_, idx) => {
		const child = e.target.cloneNode();
		child.classList.remove("card_image");
		child.src = child.src.replace("1.webp", `${idx + 1}.webp`);
		return child;
	});
	gallery.replaceChildren(...new_children);

	gallery.style.display = null;
	gallery.scrollLeft = 0;
}
const close_gallery = () => {
	gallery.replaceChildren();
	gallery.style.display = "none";
	gallery.scrollLeft = 0;
}
const scroll_gallery = (e) => {
	e.preventDefault();
	gallery.scrollLeft += Math.sign(e.deltaY) * window.innerWidth / 2;
}
