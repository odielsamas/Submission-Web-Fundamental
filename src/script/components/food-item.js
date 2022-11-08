import css from 'bootstrap/dist/css/bootstrap.min.css';

class FoodItem extends HTMLElement {

  set food(food) {
    this.food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        ${css}
      </style>
      
      <div class="card" style="width: 80%; margin: 0 auto">
        <img src="${this._food.strMealThumb}" style="height: 450px;" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this._food.strMeal}</h5>
          <p class="card-text">${this._food.strInstructions}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('food-element', FoodItem);
