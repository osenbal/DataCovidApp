class MyJumbotron extends HTMLElement {
  constructor() {
    super();
    this.shadowAppBar = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowAppBar.innerHTML = `
        <style>
            :host {
                display: block;
                margin: 2% 5%;
            }
            
            :host > h2 {
                color: #FEF6FB;
                font-size: 2em;
                margin-bottom: 20px;
            }
            
            :host > p {
                font-size: 1.2em;
            }
            
            @media screen and (min-width: 768px) {
                :host > h2 {
                    font-size: 3em;
                    margin-bottom: 20px;
                }
            }
        </style>

        <h2>Data Covid adalah Seputar dan Statistik Pesebaran Covid-19 di Dunia Khususnya Indonesia</h2>`;
  }
}

customElements.define('my-jumbotron', MyJumbotron);
