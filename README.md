# Time To Taste

A web application for searching and displaying meal information, with features for managing favourites. This application built using HTML, CSS, and JavaScript.

[preview](https://navajeevan09.github.io/time-to-taste-app/)

## Table of Contents

- [Features](#features)
- [Clone](#clone)
- [Usage](#usage)
- [Code Structure](#code-structure)

## Features

### Home Page

- As we type the search results it will show the meals in the web page, just like Google does for suggestions.
- Each search result meal have a favourite(like) button, information button.
- On clicking on the like button, it will add that particular meal in favourites list (in local storage)
- On clicking any particular search result (any meal image or info button), it will open a new page with more information about that meal(meal page)
- On Clicking on the Favourite button, it will open a new page with favourite meals(Favourites Page)

### Favourites Page

- Display a list of all the favourite meals from the local storage.
- favourite meals list have the same number of meals before and after closing the browser/refreshing the browser.
- On clicking on the delete button, it will remove that particular meal in favourites list (in local storage).

### Meal Info Page

- Display the information of the meal like its name, photo, instructions, location, you tube link.
- On Clicking on the Video button, it will open a you tube with that particular meal cooking instruction video.

## Clone

1. Clone the repository:

```bash
git clone https://github.com/Navajeevan09/time-to-taste-app.git
```

## Usage

1. Open `index.html` in your web browser.
2. Search for Meals: Enter a keyword in the search bar on the home page to search for meals. The results will be displayed below the search bar.
3. View Meal Info: Click on a meal from the search results to view detailed information about the meal.
4. Add to Favourites: Mark meals as favourites(use like button) to save them. You can view your favourite meals by clicking the "Favourites" button.
5. View Favourites: Click the "Favourites" button on the home page to navigate to the favourites page, where you can see and manage your saved meals.
6. Home page redirect: Click the "Home" button on the Favourites page to navigate to the Home page.

## Code Structure

### HTML

- The `index.html` file contains the home page information.
- The `favouritesPage\favouriteMealsPage.html` file contains the favourites page information.
- The `mealInfo\mealInfo.html` file file contains the meal info page information.

### CSS

- The `commonStyles.css` file contains the common styles.
- The `styles.css` file contains the styles for the home page.
- The `favouritesPage\favouritesStyles.css` file contains the styles for the favourites page.
- The `mealInfo\mealInfoStyles.css` file contains the styles for the meal info page.
- All CSS ensures the application is visually appealing and responsive.

### JavaScript

- The `script.js` file contains the home page search behaviors and fetching meals from the [Meal API](https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata) based on search, like button, info button and favourites page redirect button functionalities.
- The `favouritesPage\favourites.js` file contains the favourites page functionalities and home page redirect button functionality.
- The `mealInfo\mealInfo.js` file contains the meal info page functionality like featching particular meal info from [Meal API](https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) by passing meal id.
