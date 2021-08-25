class TotalNationalData extends HTMLElement {
  constructor() {
    super();
    this.shadowNationalData = this.attachShadow({ mode: 'open' });
  }

  set NationalDatas(datas) {
    this.datas = datas;
    this.render();
  }

  render() {
    this.shadowNationalData.innerHTML = `
      <style>
        :host > .box-el {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            text-align: center;
        }
          
        :host > .box-el > h3 {
            font-size: 3em;
            color: #ffffff;
        }
          
        :host > .box-el > p {
            color: #ffffff;
        }
        :host > .box-el > p:first-letter {
            text-transform: capitalize;
        }
      </style>
    `;
    /* eslint-disable */
    for (let data in this.datas) {
      if (data !== 'lastUpdate') {
        const boxElement = document.createElement('div');
        boxElement.setAttribute('class', 'box_1 box-el');
        boxElement.innerHTML = `<h3>${this.threeDigit(
          this.datas[data],
        )}</h3>  <p>${data}</p>`;
        boxElement.setAttribute('style', 'background-color: #39311D');
        this.shadowNationalData.appendChild(boxElement);
      }
    }
    

    /* eslint-enable */
    const lastUpdateElement = document.createElement('h4');
    lastUpdateElement.innerHTML = `Last Update : ${new Date(
      this.datas.lastUpdate,
    ).toUTCString()} + 07.00`;
    lastUpdateElement.setAttribute('style', ' color: #FEF6FB;');
    this.shadowNationalData.appendChild(lastUpdateElement);
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
}

customElements.define('national-datas', TotalNationalData);
