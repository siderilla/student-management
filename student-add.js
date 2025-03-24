class StudentAdd extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `<button id="add">Add student</button>`;
		this.shadowRoot.querySelector('#add');
	}
}

customElements.define('student-add', StudentAdd);