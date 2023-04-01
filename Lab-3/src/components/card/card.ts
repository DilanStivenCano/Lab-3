import {getInfo} from '../../datapi'
import {characters} from './ts/index'

export default class Card extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    async connectedCallback(){
        const characters = await getInfo();
        this.render(characters);
    }
    
    render(characters: Array<characters>){
        
            if(!this.shadowRoot) return;{
                const resultsRick = characters.map(({name, image, species}) => `
                    
                    <div class="postcards">
                    <img src="${image}">
                    <h2>${name}</h2>
                    <h2>${species}</h2>
                    </div>
                `);
                this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="./style.css">
                    <div class="container1">
                    ${resultsRick.join("")}
                    </div>
                `
            }

    }
}

customElements.define('app-card', Card);