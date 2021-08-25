class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowSearchBar = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_clickEvent"] }] */
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowSearchBar
      .querySelector('#search-input')
      .value.toLowerCase();
  }

  render() {
    this.shadowSearchBar.innerHTML = `
        <style>
            :host > .search-container {
                margin-top: 50px;
                width: 100%;
                padding: 16px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                top: 10px;
                background-color: ##2B2B2B;
                box-sizing: border-box;
            }
            
            :host > .search-container > input {
                background-color: #2B2B2B;
                color: white;
                width: 75%;
                padding: 16px;
                box-sizing: border-box;
                border: 0;
                border-bottom: 1px solid #a3ddcb;
                font-weight: bold;
            }
            
            :host > .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #caf7e3;
            }
            
            :host > .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            :host > .search-container > input::placeholder {
                color: #99bbad;
                font-weight: normal;
            }
            
            :host > .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                box-sizing: border-box;
                background-color: #4F0E0E;
                color: white;
                border: 0;
                text-transform: uppercase;
                border-radius: 10px;
            }
            
            @media screen and (max-width: 550px) {
                :host .search-container {
                    flex-direction: column;
                    position: static;
                }
                
                :host .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
                
                :host .search-container > button {
                    width: 100%;
                }
            }
            
        </style>
        <div class="search-container">
            <input id="search-input" type="search" placeholder="Search by Province in Indonesia">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
    `;

    this.shadowSearchBar
      .querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
