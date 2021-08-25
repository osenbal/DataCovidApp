/* eslint-disable */
import './search-item.js';

/* eslint-enable */
class SearchList extends HTMLElement {
  constructor() {
    super();
    this.shadowSearchList = this.attachShadow({ mode: 'open' });
  }

  set datas(datas) {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_datas"] }] */
    this._datas = datas;
    this.render();
  }

  renderError(message) {
    this.shadowSearchList.innerHTML = `
        <style>
          .placeholder {
            font-weight: lighter;
            color: white;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        </style>
        <h2 class="placeholder">${message}</h2>
    `;
  }

  render() {
    this.shadowSearchList.innerHTML = '';
    this._datas.forEach((data) => {
      const searchItemElement = document.createElement('search-item');
      searchItemElement.data = data;
      this.shadowSearchList.appendChild(searchItemElement);
    });
  }
}

customElements.define('search-list', SearchList);
