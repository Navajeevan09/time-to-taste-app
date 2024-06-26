document.addEventListener("DOMContentLoaded", () => {
  const mealInfoContainerEl = document.getElementById("meal-info-container");

  const mealId = new URLSearchParams(window.location.search).get("id");

  fetchMealsList(mealId).then(displayMeals).catch(console.error);

  // Funcition to fetch Meals List
  async function fetchMealsList(mealId) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      return data.meals[0];
    } catch (error) {
      console.log(error);
      console.error("Error while fetching the data", error);
    }
  }

  // Display meal info in meal info page
  function displayMeals(meal) {
    const { strMeal, strMealThumb, strInstructions, strArea, strYoutube } = meal;
    const mealsElement = `<div id="meal-img">
                            <img src="${strMealThumb}"/>
                            </div>
                            <div id="meal-info">
                            <dl>
                    
                                <dt>Meal Name</dt>
                                <dd>${strMeal}</dd>
                                <dt>Cooking Instructions</dt>
                                <dd>${strInstructions}</dd>
                                <dt>Location</dt>
                                <dd>${strArea}</dd>
                                
                            </dl>
                            <button><a href="${strYoutube}">Video<a></button>
                            </div>`;

    mealInfoContainerEl.innerHTML = mealsElement;
  }
});
