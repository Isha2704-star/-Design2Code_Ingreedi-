function searchRecipe() {
  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    alert("Please enter an ingredient.");
    return;
  }

  const apiUrl = https://http://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = ""; // Clear previous results

      if (data.meals) {
        data.meals.forEach(meal => {
          const mealDiv = document.createElement("div");
          mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
          `;
          resultsDiv.appendChild(mealDiv);
        });
      } else {
        resultsDiv.innerHTML = "<p>No recipes found for that ingredient.</p>";
      }
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("Error fetching recipes. Please try again.");
    });
}