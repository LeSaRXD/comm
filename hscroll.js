let selected_gallery = null;

document.addEventListener("DOMContentLoaded", () => {
	for (const gallery of document.getElementsByClassName("gallery")) {
		if (!(gallery instanceof HTMLElement)) break;
		gallery.style.cursor = "ew-resize";

		gallery.addEventListener("mousedown", () => gallery_down(gallery));
		document.addEventListener("mouseup", gallery_up);
		document.addEventListener("mouseleave", gallery_up);
		document.addEventListener("mousemove", gallery_move);
	}
});

const gallery_down = (gallery) => {
	selected_gallery = gallery;
	selected_gallery.style["scroll-snap-type"] = "unset";
	selected_gallery.style["scroll-behavior"] = "unset";
}
const gallery_up = () => {
	if (selected_gallery == null)
		return;

	console.log("up");

	selected_gallery.style["scroll-snap-type"] = null;
	selected_gallery.style["scroll-behavior"] = null;
	selected_gallery = null;
}
const gallery_move = (e) => {
	if (selected_gallery == null)
		return;

	selected_gallery.scrollLeft -= e.movementX;
}
