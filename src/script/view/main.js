import '../components/food-list.js';
import '../components/search-element.js'
import DataSource from "../data/data-source";

const main = () => {
  const searchElement = document.querySelector('search-element');
  const foodListElement = document.querySelector('food-list');

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataSource.searchFood(searchElement.value);
      renderResult(results);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    foodListElement.foods = results;
  };

  const fallbackResult = message => {
    foodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
