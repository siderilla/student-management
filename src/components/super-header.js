class SuperHeader extends HTMLElement{

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.style();
        this.render();
    }

    style(){
        const style = document.createElement('style');
        let bColor = this.getAttribute('b-color');

        style.innerText = `
            .main-title{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 10%;
				color: #ffffff;
				z-index: 1; /* posiziona l'elemento corrente sopra agli altri! */
				position: relative;
			    font-family: Verdana, Geneva, Tahoma, sans-serif;
                background-color: ${bColor};
            }
        `
        this.shadow.appendChild(style);
    }

    render(){
        const title  = document.createElement('h1');
        title.classList.add('main-title');
        const titleAttribute = this.getAttribute('super-title');
        const titleNode = document.createTextNode(titleAttribute);
        title.appendChild(titleNode);
        this.shadow.appendChild(title);
    }

}

customElements.define('super-header', SuperHeader);