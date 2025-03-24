class SuperHeader extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.style();
		this.render();
	}

	style() {
		const style = document.createElement('style');
		let bColor = this.getAttribute('b-color');
		if (!bColor) {
			bColor = 'crimson';
		}
		style.innerText = `
			.main-title{
				background-color: ${bColor};
				color: gold;
				}
		`
		this.appendChild(style);
	}

	render() {
		const title = document.createElement('h1');
		title.classList.add('main-title');
		const titleAttribute = this.getAttribute('super-header-id');
		const titleNode = document.createTextNode(titleAttribute);
		title.appendChild(titleNode);
		this.appendChild(title);
	}

}

customElements.define('super-header', SuperHeader);