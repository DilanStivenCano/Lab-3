(()=>{"use strict";class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){return n=this,e=void 0,o=function*(){const n=yield(e=void 0,t=void 0,o=void 0,s=function*(){const n=yield fetch("https://rickandmortyapi.com/api/character"),e=yield n.json();return console.log(e.results),e.results},new(o||(o=Promise))((function(n,c){function i(n){try{r(s.next(n))}catch(n){c(n)}}function a(n){try{r(s.throw(n))}catch(n){c(n)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(n){n(t)}))).then(i,a)}r((s=s.apply(e,t||[])).next())})));var e,t,o,s;this.render(n)},new((t=void 0)||(t=Promise))((function(s,c){function i(n){try{r(o.next(n))}catch(n){c(n)}}function a(n){try{r(o.throw(n))}catch(n){c(n)}}function r(n){var e;n.done?s(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,a)}r((o=o.apply(n,e||[])).next())}));var n,e,t,o}render(n){if(this.shadowRoot){const e=n.map((({name:n,image:e,species:t})=>`\n                    \n                    <div class="postcards">\n                    <img src="${e}">\n                    <h2>${n}</h2>\n                    <h2>${t}</h2>\n                    </div>\n                `));this.shadowRoot.innerHTML=`\n                    <link rel="stylesheet" href="./style.css">\n                    <div class="container1">\n                    ${e.join("")}\n                    </div>\n                `}}}customElements.define("app-card",n);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n                <link rel="stylesheet" href="./style.css">\n                <app-card></app-card>\n                ')}}customElements.define("app-container",e)})();