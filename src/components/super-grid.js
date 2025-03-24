import StudentService from "../services/student-service.js"

class SuperGrid extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.service = new StudentService();
	}

	async connectedCallback() {
		const students = await this.service.loadStudents();
		this.render(students);
	}
	

	render(students) {
		this.shadowRoot.innerHTML = '';
		students.forEach(s => {
			const card = document.createElement('student-card');
			card.setAttribute('selected-student', JSON.stringify(s));
			this.shadowRoot.appendChild(card);
		});
	}

}

customElements.define('super-grid', SuperGrid);