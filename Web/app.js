var app = angular.module('thriveSoulApp', []);

app.controller('MainController', function($scope, $window, AuthService, $http) {
  // Initial page setup
  $scope.currentPage = 'home';

  // Navigation function
  $scope.navigate = function(page) {
    $scope.currentPage = page;
  };

  $scope.loadRecipes = function() {
    $http.get('http://localhost:3000/recipes')
      .then(function(response) {
        console.log('Loaded recipes:', response.data); // Log data untuk debugging
        $scope.trendingRecipes = response.data;
      })
      .catch(function(error) {
        console.error('Error loading recipes:', error);
      });
  };
  
// Butuh domcontentonload untuk load trendingrecipe, dll
  // Recipe data
  $scope.trendingRecipes = [];

  $scope.beautyRecipes = [
    { id: 5, imgSrc: 'images/beauty1.jpg', description: '10 DIY Travel Beauty Recipes to Pack for Your Next Trip' },
    { id: 6, imgSrc: 'images/beauty2.jpg', description: '5 Face Massage Techniques for a Youthful Glow' },
    { id: 7, imgSrc: 'images/beauty3.jpg', description: 'What You Need to Know About the Viral Skin Flooding Trend' },
    { id: 8, imgSrc: 'images/beauty4.jpg', description: 'The Benefits of Green Tea for Your Skin and Hair' }
  ];

  $scope.haircareRecipes = [
    { id: 9, imgSrc: 'images/haircare1.jpg', description: '10 DIY Hair Masks to Repair Damaged Hair' },
    { id: 10, imgSrc: 'images/haircare2.jpg', description: '5 Natural Oils for Hair Growth and Thickness' },
    { id: 11, imgSrc: 'images/haircare3.jpg', description: 'How to Make Your Own Dry Shampoo at Home' },
    { id: 12, imgSrc: 'images/haircare4.jpg', description: 'The Best Scalp Treatments for Healthy Hair' },
  ];

  $scope.goodForYouRecipes = [
    { id: 13, imgSrc: 'images/good1.jpg', description: 'Avocado Toast with Egg - A perfect healthy breakfast!'},
    { id: 14, imgSrc: 'images/good2.jpg', description: 'Berry Smoothie Bowl - Refreshing and full of antioxidants.'},
    { id: 15, imgSrc: 'images/good3.jpg', description: 'Quinoa Salad - Packed with protein and fresh veggies.'},
    { id: 16, imgSrc: 'images/good4.jpg', description: 'Dark Chocolate Energy Bites - A guilt-free sweet treat.'}
  ];

  $scope.searchResults = [];

  // Function to receive all data from database
  $scope.loadAllData = function() {
    $http.get('http://localhost:3000/recipes')
    .then(function(response) {
      console.log(response.data)
      $scope.trendingRecipes = response.data;
    })
  }
  // Function to search for recipes
  $scope.searchRecipes = function(keyword) {
    if (!keyword) {
      alert("Please enter a search keyword.");
      return;
    }

    const keywordLower = keyword.toLowerCase();
    $scope.searchResults = [];

    // Combine all categories and search for matching recipes
    Object.keys($scope.recipes).forEach(category => {
      $scope.searchResults.push(
        ...$scope.recipes[category].filter(recipe =>
          recipe.title.toLowerCase().includes(keywordLower)
        )
      );
    });
  };

  // Function to navigate to specific recipe
  $scope.navigateToRecipe = function(recipeId) {
    $window.location.href = 'recipe.html?id=' + recipeId;
  };

   // Add Recipe Modal
   $scope.showAddRecipeModal = false;
   $scope.newRecipe = {}; // New recipe object

   // Open Add Recipe Modal
   $scope.openAddRecipeModal = function(section) {
     $scope.currentSection = section;
     $scope.showAddRecipeModal = true;
   };

   // Close Add Recipe Modal
   $scope.closeAddRecipeModal = function() {
     $scope.showAddRecipeModal = false;
     $scope.newRecipe = {}; // Reset form
   };

   // Function to add recipe
   $scope.addRecipe = function() {
     const recipe = {
       title: $scope.newRecipe.title,
       description: $scope.newRecipe.description,
       ingredients: $scope.newRecipe.ingredients.split(','),
       category: $scope.currentSection,
       imageUrl: $scope.newRecipe.imageUrl,
     };

     // POST request to backend to add recipe
     $http.post('http://localhost:3000/recipes', recipe)
       .then(function(response) {
         alert('Recipe added successfully!');
         const newRecipe = {
          id: response.data.id, // Pastikan backend mengembalikan ID baru
          imgSrc: recipe.imageUrl,
          description: recipe.description,
        };
        $scope.trendingRecipes.push(newRecipe);
         $scope.loadRecipes(); // Reload recipes after adding
         $scope.closeAddRecipeModal(); // Close modal
       })
       .catch(function(error) {
         console.error('Error adding recipe:', error);
         alert('Failed to add recipe.');
       });
   };

  // Subscribe Modal
  $scope.showSubscribePopup = false;

  // Close Subscribe Popup
  $scope.closePopup = function () {
    $scope.showSubscribePopup = false;
  };
  
  // Subscribe function
  $scope.subscribe = function () {
    if ($scope.subscriber && $scope.subscriber.email) {
      alert('Thank you for subscribing!');
      $scope.closePopup();
    } else {
      alert('Please enter a valid email.');
    }
  };

  // Initial recipes load
  $scope.loadRecipes = function() {
    $http.get('http://localhost:3000/recipes')
      .then(function(response) {
        $scope.trendingRecipes = response.data; // Assuming the backend returns an array of recipes
      })
      .catch(function(error) {
        console.error('Error loading recipes:', error);
      });
  };

  $scope.addRecipe = function() {
    const recipe = {
      title: $scope.newRecipe.title,
      description: $scope.newRecipe.description,
      ingredients: $scope.newRecipe.ingredients.split(','),
      category: $scope.currentSection,
      imageUrl: $scope.newRecipe.imageUrl,
    };
  
    // Log data yang dikirim ke backend
    console.log('Recipe data to be sent:', recipe);
  
    $http.post('http://localhost:3000/recipes', recipe)
      .then(function(response) {
        alert('Recipe added successfully!');
        $scope.loadRecipes();  // Reload recipes after adding
        $scope.closeAddRecipeModal();  // Close modal
      })
      .catch(function(error) {
        console.error('Error adding recipe:', error);
        alert('Failed to add recipe.');  // Tampilkan pesan error di UI
      });
  };
});


document.addEventListener('DOMContentLoaded', function () {
  // Pastikan fungsi loadAllData dipanggil setelah halaman selesai dimuat
  const scope = angular.element(document.querySelector('[ng-controller="MainController"]')).scope();
  scope.$apply(function () {
    scope.loadAllData();
  });
});
