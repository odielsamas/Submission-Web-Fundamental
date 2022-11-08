import css from 'bootstrap/dist/css/bootstrap.min.css';

class JumbotronElement extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        ${css}

        jumbotron-element img {
          height: 40em;
        }

        jumbotron-element .carousel-caption {
          margin-bottom: 220px;
        }

        jumbotron-element .carousel-caption h5 {
          font-weight: bold;
          font-size: 40px;
        }

        jumbotron-element .carousel-caption p {
          font-size: 18px;
          margin: 16px;
        }

        jumbotron-element .carousel-caption .btn {
          color: white;
          font-weight: 700;
          border-radius: 50px;
          padding: 10px 20px;
          margin-top: 14px;
        }

        jumbotron-element .carousel-caption .btn:hover {
          background-color: #FF884B;
          font-weight: 700;
          border-radius: 50px;
          padding: 10px 20px;
          margin-top: 14px;
          border-color: #FF884B;
        }
      </style>
      
      <div class="container-fuild">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./src/images/img-3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>FOODIE RESTAURANT</h5>
              <p>Foodie is a delitious restaurant in Indonesia</p>
              <button type="button" class="btn btn-warning">Explore Menu</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./src/images/img-2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>DELICIOUS FOOD</h5>
              <p>Foodie has a variety of food menus that are certainly very tasty</p>
              <button type="button" class="btn btn-warning">Explore Menu</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./src/images/img-1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>HIGHT QUALITY MEALS</h5>
              <p>Foodie always maintains the quality of food for customers</p>
              <button type="button" class="btn btn-warning">Explore Menu</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    `;
  }
}

customElements.define('jumbotron-element', JumbotronElement);
