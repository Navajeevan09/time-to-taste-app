document.addEventListener("DOMContentLoaded", () => {
  // Getting Elements from html document
  const searchElement = document.getElementById("search-input");
  const suggContElement = document.getElementById("suggestions-container");


  // Event Listener for searching the meal
  searchElement.addEventListener("input", (event) => {
    suggContElement.innerHTML = "";
    const searchString = event.target.value;
    if (searchString.length > 0) {
      const mealsList = async function () {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
          const data = await response.json();
          // console.log(data);
          return data.meals;
        } catch (error) {
          console.log(error);
          console.error("Error while fetching the data", error);
          return [];
        }
      };

      const displayMeals = async function () {
        const meals = await mealsList();
        meals.forEach((meal) => {
          const mealsElement = `<div class="suggestion-item">
                                <img id="strMealThumb" src="${meal.strMealThumb}">
                                <h5>${meal.strMeal}</h5>
                                <button><i class="fa-regular fa-heart"></i></button>
                                </div>`;
          suggContElement.insertAdjacentHTML("beforeend", mealsElement);
          console.log(meal);
        });
      };

      displayMeals();
    }
  });



});
