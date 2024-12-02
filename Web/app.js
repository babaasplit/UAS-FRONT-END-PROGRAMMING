var app = angular.module('thriveSoulApp', []);

app.controller('MainController', function($scope, $window) {
  $scope.navigateToRecipe = function(recipeId) {
    $window.location.href = 'recipe.html?id=' + recipeId;
  };

  // Initial page setup
  $scope.currentPage = 'home';
  $scope.navigate = function(page) {
    $scope.currentPage = page;
  };

  $scope.trendingRecipes = [
    { id: 1, imgSrc: 'images/recipe1.jpg', description: 'Craft Your Own Signature Scents with Essential Oil Blends'},
    { id: 2, imgSrc: 'images/recipe2.jpg', description: 'Natural Acne Solutions: 12 DIY Masks for Clearer Skin'},
    { id: 3, imgSrc: 'images/recipe3.jpg', description: 'Exfoliate Naturally: Homemade Face Scrubs Using Pantry Staples'},
    { id: 4, imgSrc: 'images/recipe4.jpg', description: 'Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost'},
  ];

   // Beauty Recipes Data
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
  
  //FOOD PAGE

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
  
  // Therapy Image

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

  // Image About
  $scope.About1 = {
    imgSrc: 'images/about1.jpg'  
  };
  $scope.About2 = {
    imgSrc: 'images/about2.jpg'  
  };
  $scope.About3 = {
    imgSrc: 'images/about3.webp'  
  };
  $scope.About5 = {
    imgSrc: 'images/about5.png'  
  };
  $scope.About6 = {
    imgSrc: 'images/about6.png'  
  };

  $scope.showSubscribePopup = false;

  $scope.closePopup = function () {
    $scope.showSubscribePopup = false;
  };
  
  $scope.subscribe = function () {
    if ($scope.subscriber && $scope.subscriber.email) {
      alert('Thank you for subscribing!');
      $scope.closePopup();
    } else {
      alert('Please enter a valid email.');
    }
  };

  $scope.skinCare = [
    { id: 17, imgSrc: 'images/skincare1.jpg', description: 'Gentle Face Scrub' },
    { id: 18, imgSrc: 'images/skincare2.jpg', description: 'Soothing Face Mask' },
    { id: 19, imgSrc: 'images/skincare3.jpg', description: 'Hydrating Serum' },
    { id: 20, imgSrc: 'images/skincare4.jpg', description: 'Nourishing Night Cream' },
  ];

  $scope.hairCare = [
    { id: 21, imgSrc: 'images/haircare1.jpg', description: 'Deep Conditioning Treatment' },
    { id: 22, imgSrc: 'images/haircare2.jpg', description: 'Herbal Hair Rinse' },
    { id: 23, imgSrc: 'images/haircare3.jpg', description: 'Volumizing Mousse' },
    { id: 24, imgSrc: 'images/haircare4.jpg', description: 'Frizz Control Serum' },
  ];

});

document.addEventListener("DOMContentLoaded", () => {
  // Tangkap elemen form dan input
  const searchForm = document.querySelector('.d-flex');
  const searchInput = document.querySelector('.form-control');

  // Simulasi data resep
  const recipes = {
    trendingRecipes: [
      { id: 1, title: "Avocado Salad", description: "Fresh and healthy salad.", imgSrc: "avocado.jpg" },
      { id: 2, title: "Spaghetti Bolognese", description: "Classic Italian pasta.", imgSrc: "spaghetti.jpg" }
    ],
    beautyRecipes: [
      { id: 3, title: "Cucumber Mask", description: "Hydrating face mask.", imgSrc: "cucumber.jpg" },
      { id: 4, title: "Honey Scrub", description: "Natural exfoliation.", imgSrc: "honey.jpg" }
    ],
    haircareRecipes: [
      { id: 5, title: "Coconut Oil Treatment", description: "Deep conditioning for hair.", imgSrc: "coconut.jpg" },
      { id: 6, title: "Aloe Vera Gel", description: "Soothing scalp care.", imgSrc: "aloe.jpg" }
    ],
    goodForYouRecipes: [
      { id: 7, title: "Quinoa Bowl", description: "Nutrient-packed and delicious.", imgSrc: "quinoa.jpg" },
      { id: 8, title: "Smoothie Blend", description: "Energy-boosting drink.", imgSrc: "smoothie.jpg" }
    ]
  };

  // Fungsi untuk mencari resep
  function searchRecipes(keyword) {
    const keywordLower = keyword.toLowerCase();
    const results = [];

    // Gabungkan semua kategori resep dan cari yang cocok
    Object.keys(recipes).forEach(category => {
      results.push(
        ...recipes[category].filter(recipe =>
          recipe.title.toLowerCase().includes(keywordLower)
        )
      );
    });

    return results;
  }

  // Event listener untuk form submit
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah refresh halaman

    const query = searchInput.value.trim();

    if (query) {
      const results = searchRecipes(query);
      displaySearchResults(results);
    } else {
      alert("Masukkan kata kunci pencarian.");
    }
  });

  // Fungsi untuk menampilkan hasil pencarian
  function displaySearchResults(results) {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <h2 class="text-center mt-5 display-4">Search Results</h2>
      <p class="text-center mb-5 lead">Menampilkan ${results.length} hasil untuk pencarian Anda.</p>
      <div class="row g-4">
        ${results.map(recipe => `
          <div class="col-lg-3 col-md-4 col-sm-6 d-flex">
            <div class="card shadow-sm rounded-3 border-0 overflow-hidden">
              <img src="${recipe.imgSrc}" class="card-img-top rounded-top" alt="${recipe.title}">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title text-center">${recipe.title}</h5>
                <p class="card-text text-center">${recipe.description}</p>
                <a href="#!" class="btn btn-secondary btn-sm mt-auto w-100">View Recipe</a>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }
});
