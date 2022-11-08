import './food-item.js';

class FoodList extends HTMLElement {
  set foods(foods) {
    this.foods = foods;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    this._foods.forEach(food => {
      const foodItemElement = document.createElement('food-item');
      foodItemElement.food = food;
      this.appendChild(foodItemElement);
    });
  }
}

customElements.define('food-list', FoodList);