class SuperFooter extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	get info() {
		return this.getAttribute('super-info') || 'hai dimenticato le info';

	}

	get backgroundColor() {
		let bColor = this.getAttribute('b-color');
		if (!bColor) {
			bColor = 'crimson';
		}
		return bColor;
	}

	connectedCallback() {
		this.style();
		this.render();
	}

	style() {
		const style = document.createElement('style');
		style.innerText = `
			.footer-info{
				background-color: ${this.backgroundColor};
				color: black;
				}
		`
		this.shadowRoot.appendChild(style);
	}

	render() {
		const info = document.createElement('p');
		info.classList.add('footer-info');
		const infoNode = document.createTextNode(this.info);
		info.appendChild(infoNode);
		this.shadowRoot.appendChild(info);
	}
	

}

customElements.define('super-footer', SuperFooter);