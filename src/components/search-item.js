import kasusImg from '../img/Polygon1.png';
import sembuhImg from '../img/Polygon2.png';

class SearchItem extends HTMLElement {
  constructor() {
    super();
    this.shadowSearchItem = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_data"] }] */
    this._data = data;
    this.render();
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["threeDigit"] }] */
  threeDigit(num) {
    const str = num.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 . ');
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }

  render() {
    this.shadowSearchItem.innerHTML = `
        <style>
            :host {
                margin-top: 5%;
                width: 100%;
                background-color: #F5E8C7;
                padding: 25px 50px;
                box-sizing: border-box;
                border-radius: 10px;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
            }
            :host:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            :host > h2 {
                text-align: center;
                color: #2D2424;
                font-size: 1.5em;
            }
            
            :host {
                display: grid;
                grid-template-areas:
                    "title title title"
                    "case case case"
                    "sembuh sembuh sembuh"
                    "more more more";
                gap: 10px;
            }
            :host h2 {
                grid-area: title;
                justify-self: center;
                margin-bottom: 16px;
            }
            
            :host > .case {
                grid-area: case;
                display: grid;
                grid-template-areas: "imgCase totalCase case";
                justify-content: space-between;
            }
            :host > .case > img {
                grid-area: imgCase;
                align-self: center;
                width: 50px;
            
            }
            :host > .case > h3 {
                grid-area: totalCase;
                font-size: 2em;
                align-self: center;
                color: #D54C4C;
            
            }
            :host > .case > p {
                grid-area: case;
                align-self: center;
            }
            
            :host > .sembuh {
                grid-area: sembuh;
                display: grid;
                grid-template-areas: "imgSembuh totalSembuh sembuh";
                justify-content: space-between;
            }
            
            :host > .sembuh > img {
                grid-area: imgSembuh;
                align-self: center;
                width: 50px;
            
            }
            :host > .sembuh > h3 {
                grid-area: totalSembuh;
                font-size: 2em;
                align-self: center;
                color: #708160;
            
            }
            :host > .sembuh > p {
                grid-area: sembuh;
                align-self: center;
            
            }
            :host > button {
                grid-area: more;
                justify-self: center;
                background-color: #50CB93;
                border: none;
                border-radius: 10px;
                padding: 5px 20px;
                color: white;
                box-shadow: 0 5px 12px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
            }

            :host > button:active {
                box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
                background-color: #50CB9F;
            }
            @media screen and (max-width: 480px) {
                :host > .sembuh > h3 {
                    font-size: 1.3em;
                }
                :host > .case > h3 {
                    font-size: 1.3em;
                }
            }
            @media screen and (min-width: 998px) {
                :host > .sembuh > h3 {
                    font-size: 1.8em;
                }
                :host > .case > h3 {
                    font-size: 1.8em;
                }
            }
            @media screen and (min-width: 1400px) {
                :host > .sembuh > h3 {
                    font-size: 2em;
                }
                :host > .case > h3 {
                    font-size: 2em;
                }
            }

            
        </style>

        <h2 style="text-align: center">${this._data.provinsi}</h2>
        <div class="case">
          <img src="${kasusImg}" alt="Total kasus">
          <h3>${this.threeDigit(this._data.kasus)}</h3>
          <p>Kasus</p>
        </div>
        <div class="sembuh">
          <img src="${sembuhImg}" alt="sembuh">
          <h3>${this.threeDigit(this._data.sembuh)}</h3>
          <p>Sembuh</p>
        </div>
    `;
  }
}

customElements.define('search-item', SearchItem);
