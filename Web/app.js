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

    // Function to receive all data from database
    $scope.loadAllData = function() {
      $http.get('http://localhost:3000/recipes')
      .then(function(response) {
        console.log(response.data)
        $scope.trendingRecipes = response.data;
      })
    }

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
  

   // Login Modal
   $scope.loginData = { username: '', password: '' };
   $scope.showLoginModal = true;
   $scope.showRegisterModal = false;
 
   // Login function
   $scope.login = function() {
     AuthService.login($scope.loginData)
       .then(function(response) {
         alert('Login Successful');
         // Simpan token atau informasi pengguna di sini jika diperlukan
         $scope.closeLoginModal();
       })
       .catch(function(error) {
         alert('Login Failed: ' + (error.data.message || 'Unknown error'));
       });
   };
 
   // Close Login Modal
   $scope.closeLoginModal = function() {
     $scope.showLoginModal = false;
   };
  // Register Modal
  $scope.registerData = { fullname: '', email: '', username: '', password: '', confirmPassword: '' };

  // Register function
  $scope.register = function() {
    if ($scope.registerData.password !== $scope.registerData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    AuthService.register($scope.registerData)
    .then(function(response) {
      alert('Register Successful');
      // Simpan token atau informasi pengguna di sini jika diperlukan
      $scope.showLoginModal = true;
    })
    .catch(function(error) {
      alert('Register Failed: ' + (error.data.message || 'Unknown error'));
    });
  };

  // Close Register Modal
  $scope.closeRegisterModal = function() {
    $scope.showRegisterModal = false;
  };

  // Switch between login and register modals
  $scope.switchToRegister = function() {
    $scope.showLoginModal = false;
    $scope.showRegisterModal = true;
  };

  $scope.switchToLogin = function() {
    $scope.showLoginModal = true;
    $scope.showRegisterModal = false;
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

  // Skin Care Recipes
  $scope.skinCare = [
    { id: 17, imgSrc: 'images/skincare1.jpg', description: 'Gentle Face Scrub' },
    { id: 18, imgSrc: 'images/skincare2.jpg', description: 'Soothing Face Mask' },
    { id: 19, imgSrc: 'images/skincare3.jpg', description: 'Hydrating Serum' },
    { id: 20, imgSrc: 'images/skincare4.jpg', description: 'Nourishing Night Cream' },
  ];

  // Hair Care Recipes
  $scope.hairCare = [
    { id: 21, imgSrc: 'images/haircare1.jpg', description: 'Deep Conditioning Treatment' },
    { id: 22, imgSrc: 'images/haircare2.jpg', description: 'Herbal Hair Rinse' },
    { id: 23, imgSrc: 'images/haircare3.jpg', description: 'Volumizing Mousse' },
    { id: 24, imgSrc: 'images/haircare4.jpg', description: 'Frizz Control Serum' },
  ];

  // Additional sections for image and information display
  $scope.About1 = { imgSrc: 'images/about1.jpg' };
  $scope.About2 = { imgSrc: 'images/about2.jpg' };
  $scope.About3 = { imgSrc: 'images/about3.webp' };
  $scope.About5 = { imgSrc: 'images/about5.png' };
  $scope.About6 = { imgSrc: 'images/about6.png' };

  $scope.EssentialsOils = [
    { name: 'Difussing', image: 'images/Diffusing.jpg' },
    { name: 'Ask an Aromatherapist', image: 'images/Ask an Aromatherapist.jpg' },
    { name: 'Remedies', image: 'images/Remedies.jpg' },
  ];

  $scope.diys = [
    { name: 'Candles', image: 'images/Candles.jpg' },
    { name: 'Perfume', image: 'images/Perfume.jpg' },
    { name: 'Cleaning', image: 'images/Cleaning.jpg' },
    { name: 'Massage', image: 'images/Massage.jpg' }
  ];

  $scope.LivingWellnes = [
    { name: 'Crafts', image: 'images/Crafts.jpg' },
    { name: 'DIY Jewelry', image: 'images/DIY Jewelry.jpg' },
    { name: 'Crystals', image: 'images/Crystals.jpg' },
    { name: 'Wellness', image: 'images/Wellness.jpg' }
  ];

  // Food Page Data
  $scope.drinks = [
    { name: 'Smoothies', image: 'images/smoothies.jpg' },
    { name: 'Coffee + Tea', image: 'images/coffee.jpg' },
    { name: 'Juice + Water', image: 'images/juice.jpg' },
    { name: 'Drinks + Cocktails', image: 'images/cocktails.jpg' }
  ];

  $scope.meals = [
    { name: 'Breakfast', image: 'images/breakfast.jpg' },
    { name: 'Lunch', image: 'images/lunch.jpg' },
    { name: 'Dinner', image: 'images/dinner.jpg' },
    { name: 'Dessert', image: 'images/dessert.jpg' }
  ];
});
//search Home

document.addEventListener("DOMContentLoaded", () => {
  // Tangkap elemen form dan input
  const searchForm = document.querySelector('.d-flex');
  const searchInput = document.querySelector('.form-control');

  // Simulasi data resep
  const recipes = {
    trendingRecipes: [
      { id: 1, title: 'Craft Your Own Signature Scents with Essential Oil Blends', imageUrl: 'images/recipe1.jpg' },
      { id: 2, title: 'Natural Acne Solutions: 12 DIY Masks for Clearer Skin', imageUrl: 'images/recipe2.jpg' },
      { id: 3, title: 'Exfoliate Naturally: Homemade Face Scrubs Using Pantry Staples', imageUrl: 'images/recipe3.jpg' },
      { id: 4, title: 'Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost', imageUrl: 'images/recipe4.jpg' },
      { id: 1, title: "Craft", description: "Craft your own Signature with Essentials Oil Blends.", imgSrc: "images/recipe1.jpg" },
      { id: 2, title: "Natural", description: "Natural AcneNatural Acne Solutions: 12 DIY Masks for Clearer Skin.", imgSrc: "images/recipe2.jpg" },
      { id: 3, title: "Exfoliate Naturally", description: "Exfoliate Naturally: HomeMade face Scrbs Using Pantry Staples", imgSrc: "images/recipe3.jpg" },
      { id: 4, title: "Fresh Juicing Guide", description: "Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost", imgSrc: "images/recipe4.jpg" }
    ],
    beautyRecipes: [
      { id: 1, title: " DIY Travel Beauty", description: "10 DIY Travel Beauty Recipes to Pack for Your Next Trip", imgSrc: "images/beauty1.jpg" },
      { id: 2, title: "5 Face Massage", description: "5 Face Massage Techniques for a Youthful Glow.", imgSrc: "images/beauty2.jpg" },
      { id: 3, title: "Skin Flooding", description: "What You Need to Know About the Viral Skin Flooding Trend", imgSrc: "images/beauty3.jpg" },
      { id: 4, title: "The Benefits of Green", description: "The Benefits of Green Tea for Your Skin and Hair", imgSrc: "images/beauty4.jpg" }
      
    ],
    haircareRecipes: [
      { id: 1, title: "Hair Masks", description: "10 DIY Hair Masks to Repair Damaged Hair.", imgSrc: "images/haircare1.jpg" },
      { id: 2, title: "Natural Oils", description: "5 Natural Oils for Hair Growth and Thickness", imgSrc: "images/haircare2.jpg" },
      { id: 3, title: "Make Your Own", description: "How to Make Your Own Dry Shampoo at Home", imgSrc: "images/haircare3.jpg" },
      { id: 4, title: "The Best Scalp", description: "The Best Scalp Treatments for Healthy Hair.", imgSrc: "images/haircare4.jpg" }
    ],
    goodForYouRecipes: [
      { id: 7, title: "Avocado Toast with Egg", description: "Avocado Toast with Egg - A perfect healthy breakfast!", imgSrc: "images/good1.jpg" },
      { id: 7, title: "Berry Smoothie Bowl ", description: "Berry Smoothie Bowl - Refreshing and full of antioxidants.", imgSrc: "images/good2.jpg" },
      { id: 7, title: "Quinoa Salad ", description: "Quinoa Salad - Packed with protein and fresh veggies.", imgSrc: "images/good3.jpg" },
      { id: 7, title: "Dark Chocolate Energy Bites", description: "Nutrient-packed and delicious.", imgSrc: "images/good4.jpg" },
    ]
  };

  // Fungsi untuk mencari resep
  function searchRecipes(keyword) {
    const keywordLower = keyword.toLowerCase();
    const results = [];

    //  kategori resep dan cari yang cocok
    Object.keys(recipes).forEach(category => {
      results.push(
        ...recipes[category].filter(recipe =>
          recipe.title.toLowerCase().includes(keywordLower)
        )
      );
    });

    return results;
  }

  //  untuk form submit
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah refresh halaman

    const query = searchInput.value.trim();

    if (query) {
      const results = searchRecipes(query);
      displaySearchResults(results);
    } else {
      alert("Masukan Kata yang ingin anda cari.");
    }
  });

  // Fungsi untuk menampilkan hasil pencarian
  function displaySearchResults(results) {
        const container = document.querySelector(".container");

        // jika tidak ada hasil pencarian
        if (results.length === 0) {
            container.innerHTML = `
                <h2 class="text-center mt-5 display-4">No Results Found</h2>
                <p class="text-center mb-5 lead">We couldn't find any recipes matching your search. Try different keywords.</p>
                <div class="text-center">
                    <button class="btn btn-primary" onclick="window.location.reload()">Back to Home</button>
                </div>
            `;
            return;
        }

        // Jika ada hasil, tampilkan
        container.innerHTML = `
            <h2 class="text-center mt-5 display-4">Search Results</h2>
            <p class="text-center mb-5 lead">Found ${results.length} result(s) for your search.</p>
            <div class="row g-4">
                  ${results.map((recipe, index) => `
                <div class="${results.length === 1 ? 'col-lg-6 col-md-8' : 'col-lg-3 col-md-4 col-sm-6'} d-flex">
                    <div class="card shadow-sm rounded-3 border-0 overflow-hidden">
                        <img src="${recipe.imgSrc}" class="card-img-top rounded-top" alt="${recipe.title}">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title text-center">${recipe.title}</h5>
                            <p class="card-text text-center text-truncate" title="${recipe.description}">${recipe.description}</p>
                            <a href="#!" class="btn btn-secondary btn-sm mt-auto w-100">View Recipe</a>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>

        `;
    }
});