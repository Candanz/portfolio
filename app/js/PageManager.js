class PageManager {
	constructor() {
		this.pages = [];
		this.current = 0;
		this.previous= 0;
	}

	addPage(page) {
		this.pages.push(page);
	}

	addPages() {
		if(arguments.length < 1) {
			console.error("addPages requires one or more arguments. " + arguments.length + " arguments passed.", this, arguments);
			return;
		}

		for(let arg of arguments) {
			this.addPage(arg);
		}
	}

	getCurrentPage() {
		return this.pages[this.current];
	}

	hashChanged() {
		if(this.pages.length == 0) return;

		var hash = window.location.hash;
		if(hash.length == 0) return;

		this.previous = this.current;

		this.current = this.pages.findIndex(x=> x.hash == hash);

		if(this.previous != this.current)
			document.dispatchEvent(new Event("pageChanged"));
	}

	pageChanged() {
		console.log("Page changed from: " + this.pages[this.previous].id + " to " + this.pages[this.current].id);
	}
}