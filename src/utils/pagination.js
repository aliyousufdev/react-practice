import {slice} from "ramda";

export function paginate(items, pageNumber, perPage) {
	const startIndex = (pageNumber - 1) * perPage;
	return slice(startIndex, startIndex + perPage, items);
}