class StudentEdit extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `<button id="edit">Edit student</button>`;
	}
}

customElements.define('student-edit', StudentEdit);
