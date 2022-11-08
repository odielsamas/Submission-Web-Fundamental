import css from 'bootstrap/dist/css/bootstrap.min.css';

class SearchElement extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <style>
        ${css}

        .search-container .form-control {
          padding: 10px 20px;
          border-radius: 50px;
        }

        .search-container .btn {
          color: white;
          font-weight: 700;
          border-radius: 0 50px 50px 0;
          padding: 0 17px;
        }

        .search-container .btn:hover {
          background-color: #FF884B;
          font-weight: 700;
          border-color: #FF884B;
        }
      </style>
      
      
      <div id="search-container" class="input-group mb-3 search-container py-4">
        <input type="text" class="form-control py-3" placeholder="Search food" aria-label="Recipient's username" aria-describedby="button-addon2" type="search">
        <button id="searchButtonElement" class="btn btn-warning" type="submit" id="button-addon2">Search</button>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-element', SearchElement);
