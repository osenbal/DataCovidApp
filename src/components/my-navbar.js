import coronaPng from '../img/coronavirus.png';

class MyNavbar extends HTMLElement {
  constructor() {
    super();
    this.shadowMyNavbar = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowMyNavbar.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                }

                :host {
                    text-align: center;
                    width:  100%;
                    background-color: #5C3D2E;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    display: block;
                }
                :host > div {
                    display: flex;
                    justify-content: center;
                }
                :host > div > img {
                    align-self: center;
                    width: 30px;
                    height: 30px;
                }
                :host > div > h2 {
                    padding: 16px;
                    font-size: 1.5em;
                    color: white;
                }
            </style>
            
            <div>
                <img src="${coronaPng}" alt="logo.png">
                <h2>Data Covid-19</h2>
            </div>
        `;
  }
}

customElements.define('my-navbar', MyNavbar);
