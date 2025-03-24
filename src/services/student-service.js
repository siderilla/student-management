export default class StudentService {

	constructor() {

	}

	async loadStudents() {
		this.students = JSON.parse(localStorage.getItem('students') || await this.getStudentsFromJson());
		localStorage.setItem('students', JSON.stringify(this.students));
		return this.students
	}

	getStudentsFromJson() {
        const resp = fetch('/assets/students.json');
		return resp.json();
    }

}