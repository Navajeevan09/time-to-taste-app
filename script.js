document.addEventListener("DOMContentLoaded", () => {
  // Getting elements from HTML document
  const searchElement = document.getElementById("search-input");
  const suggContElement = document.getElementById("suggestions-container");
  const favouriteBtn = document.getElementById("favourites-btn");
  
  // Event listener for searching the meal
  searchElement.addEventListener("input", (event) => {
    suggContElement.innerHTML = "";
    const searchString = event.target.value.trim();
    if (searchString.length > 0) {
      fetchMealsList(searchString).then(displayMeals).catch(console.error);
    }
  });

  // Funcition to fetch Meals List
  async function fetchMealsList(searchString) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.log(error);
      console.error("Error while fetching the data", error);
      return [];
    }
  }

  // Display meals in web page
  function displayMeals(meals) {
    suggContElement.innerHTML = "";
    if (meals.length > 0) {
      meals.forEach((meal) => {
        const mealsElement = `<div class="suggestion-item" >
                                <img class="strMealThumb" src="${meal.strMealThumb}">
                                <h5>${meal.strMeal}</h5>
                                <div id="like-info-btn">
                                <div class="like-div" data-id="${meal.idMeal}"><i class="fa-solid fa-heart fa-spin-pulse" style="color: #74C0FC;"></i></div>
                                <div class="meal-info-btn" data-id="${meal.idMeal}"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
                                </div>                 
                                </div>`;

        suggContElement.insertAdjacentHTML("beforeend", mealsElement);
      });

      document.querySelectorAll(".like-div").forEach((likeDiv) => {
        likeDiv.addEventListener("click", () => {
          if (likeDiv.classList.contains("liked")) return;

          likeDiv.classList.add("liked");
          const mealId = likeDiv.getAttribute("data-id");
          const meal = meals.find((meal) => meal.idMeal === mealId);

          if (meal) {
            addMealInLocalStorage(meal);
          }
        });
      });

      document.querySelectorAll(".meal-info-btn").forEach((mealInfo) => {
        mealInfo.addEventListener("click", (event) => {
          const mealId = event.currentTarget.getAttribute("data-id");
          window.location.href = `/mealInfo/mealInfo.html?id=${mealId}`;
        });
      });
    } else {
      suggContElement.innerHTML = `<div class="no-suggestion-items" ><h4>We couldn't find any items that match your search. Please try again.</h4></div>`;
    }
  }

  //function for add favourites in local storage
  function addMealInLocalStorage(meal) {
    let favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeals")) || [];
    if (!favouriteMeal.some((m) => m.idMeal === meal.idMeal)) {
      favouriteMeal.push(meal);
      localStorage.setItem("favouriteMeals", JSON.stringify(favouriteMeal));
    }
  }

  //Favourites page navigation
  favouriteBtn.addEventListener("click", () => {
    window.location.href = "/favouritesPage/favouriteMealsPage.html";
  });
});
