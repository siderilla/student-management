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

    connectedCallback(){
        this.style();
        this.render()
    }

    style(){
        const style = document.createElement('style');
        style.innerText = `
            .card{
				width: 100%;
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(4, auto);
				gap: 10px;
				padding: 0 20px;
				box-sizing: border-box;
				z-index: 1;
				position: relative;
				font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
        `
        this.shadow.appendChild(style);
    }

    render(){
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('card');
        mainDiv.innerHTML = `
            <div>
                <strong>Nome: </strong><span>${this.student.name}</span>
            </div>
            <div>
                <strong>Età: </strong><span>${this.student.yob}</span>
            </div>
        `
        this.shadow.appendChild(mainDiv);
    }



}

customElements.define('student-card', StudentCard)