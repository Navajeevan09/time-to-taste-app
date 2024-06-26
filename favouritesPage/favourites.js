document.addEventListener("DOMContentLoaded", () => {
  // Function for rendor the page
  function rendorPage() {
    // Getting elements from document
    const homePageBtn = document.getElementById("back-to-home-btn");
    const favouriteContainerEl = document.getElementById("favourites-container");

    favouriteContainerEl.innerHTML = "";

    // Getting favourites from local storage
    const favouriteMeals = JSON.parse(localStorage.getItem("favouriteMeals")) || [];

    if (favouriteMeals.length > 0) {
      favouriteMeals.forEach((favouriteMeal) => {
        if (favouriteMeal) {
          const mealsElement = `<div class="suggestion-item">
                                <img class="strMealThumb meal-info-redirect" data-id="${favouriteMeal.idMeal}" src="${favouriteMeal.strMealThumb}">
                                <h5>${favouriteMeal.strMeal}</h5>
                                 <div class="delete-div" data-id="${favouriteMeal.idMeal}"><i class="fa-solid fa-trash"></i></div>
                                </div>`;

          favouriteContainerEl.insertAdjacentHTML("beforeend", mealsElement);
        }
      });

      // Delete buttons event listener
      document.querySelectorAll(".delete-div").forEach((deletediv) => {
        deletediv.addEventListener("click", (event) => {
          event.currentTarget.parentNode.remove();
          const mealId = event.currentTarget.getAttribute("data-id");
          deleteMealFromFav(mealId);
        });
      });
    } else {
      favouriteContainerEl.innerHTML = `<div class="no-suggestion-items" ><h4>No favourite meals found. Please like in home page and try again.</h4></div>`;
    }

    // Deleting from local storage
    function deleteMealFromFav(mealId) {
      const updatedFavMeals = favouriteMeals.filter((meal) => meal.idMeal !== mealId);
      localStorage.setItem("favouriteMeals", JSON.stringify(updatedFavMeals));
      rendorPage();
    }

    //Home page navigation
    homePageBtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });

    //Meal Info Page Redirect
    document.querySelectorAll(".meal-info-redirect").forEach((mealInfo) => {
      mealInfo.addEventListener("click", (event) => {
        const mealId = event.currentTarget.getAttribute("data-id");
        window.location.href = `../mealInfo/mealInfo.html?id=${mealId}`;
      });
    });
  }
  rendorPage();
});
