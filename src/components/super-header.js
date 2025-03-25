class SuperHeader extends HTMLElement{

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.style();
        this.render();
    }

    style() {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = '../../style.css';
		this.shadowRoot.appendChild(link);
		
        // const style = document.createElement('style');
        // let bColor = this.getAttribute('b-color');

        // style.innerText = `
        //     .main-title{
		// 		...
        //     }
        // `
        // this.shadow.appendChild(style);
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