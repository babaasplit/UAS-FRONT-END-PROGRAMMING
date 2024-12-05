app.service('RecipeService', function ($http) {
    const API_URL = 'http://localhost:5000/recipes';
  
    // Fetch all recipes from database
    this.getAllRecipes = function () {
      return $http.get(API_URL);
    };
  
    // Add a new recipe to the database
    this.addRecipe = function (recipe) {
      return $http.post(API_URL, recipe);
    };
  });
  