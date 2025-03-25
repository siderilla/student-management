export default class StudentService {

	constructor() {

	}

	async loadStudents() {
		let storedStudents = localStorage.getItem('students');
		if (storedStudents) {
			try {
				this.students = JSON.parse(storedStudents);
			} catch (error) {
				console.error(_, error);
				return this.getStudentsFromJson()
				.then
			}
		}
		this.students = JSON.parse(localStorage || await this.getStudentsFromJson());
		localStorage.setItem('students', JSON.stringify(this.students));
		return this.students;
	}

	async getStudentsFromJson() {
        const resp = await fetch('./assets/students.json');
		return resp.json();
    }

}