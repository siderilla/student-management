class StudentCard extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    // set student(value){
    //     this._student = value;
    // }

    get student(){
        const studentStr = this.getAttribute('selected-student');
        if (studentStr) {
            return JSON.parse(studentStr);
        }
        return {name: 'giovanni', yob: 1981}
    }

	get age() {
        const now = new Date();
        const actualYear = now.getFullYear();
        const age = actualYear - this.student.yob;
        return age;
    }

    connectedCallback(){
        this.style();
        this.render()
    }

    style(){

	// alternativa migliore: chiami il css

		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = '../../style.css';  // percorso relativo al tuo index.html
		this.shadowRoot.appendChild(link);


        // const style = document.createElement('style');
        // style.innerText = `
        //     .card{
		//		 ...
        //     }
        // `
        // this.shadow.appendChild(style);
    }

    render(){
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('card');
        mainDiv.innerHTML = `
				<div><strong>Name:</strong><span>${this.student.name} ${this.student.surname}</span></div>
				<div><strong>Age:</strong><span>${this.age}</span></div>
				<div><strong>Gender:</strong><span>${this.student.gender}</span></div>
				<div><strong>Nationality:</strong><span>${this.student.nationality}</span></div>
        `
        this.shadow.appendChild(mainDiv);
    }



}

customElements.define('student-card', StudentCard)