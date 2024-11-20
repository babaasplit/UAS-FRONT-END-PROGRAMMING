var app = angular.module('thriveSoulApp', []);

app.controller('MainController', function($scope) {
  // Initial page setup
  $scope.currentPage = 'home';
  $scope.navigate = function(page) {
    $scope.currentPage = page;
  };

  $scope.trendingRecipes = [
    { imgSrc: 'images/recipe1.jpg', description: 'Craft Your Own Signature Scents with Essential Oil Blends'},
    { imgSrc: 'images/recipe2.jpg', description: 'Natural Acne Solutions: 12 DIY Masks for Clearer Skin'},
    { imgSrc: 'images/recipe3.jpg', description: 'Exfoliate Naturally: Homemade Face Scrubs Using Pantry Staples'},
    { imgSrc: 'images/recipe4.jpg', description: 'Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost'},
  ];

   // Beauty Recipes Data
   $scope.beautyRecipes = [
    { imgSrc: 'images/beauty1.jpg', description: '10 DIY Travel Beauty Recipes to Pack for Your Next Trip' },
    { imgSrc: 'images/beauty2.jpg', description: '5 Face Massage Techniques for a Youthful Glow' },
    { imgSrc: 'images/beauty3.jpg', description: 'What You Need to Know About the Viral Skin Flooding Trend' },
    { imgSrc: 'images/beauty4.jpg', description: 'The Benefits of Green Tea for Your Skin and Hair' }
  ];

  $scope.haircareRecipes = [
    { imgSrc: 'images/haircare1.jpg', description: '10 DIY Hair Masks to Repair Damaged Hair' },
    { imgSrc: 'images/haircare2.jpg', description: '5 Natural Oils for Hair Growth and Thickness' },
    { imgSrc: 'images/haircare3.jpg', description: 'How to Make Your Own Dry Shampoo at Home' },
    { imgSrc: 'images/haircare4.jpg', description: 'The Best Scalp Treatments for Healthy Hair' },
  ];

  $scope.goodForYouRecipes = [
    { imgSrc: 'images/good1.jpg', description: 'Avocado Toast with Egg - A perfect healthy breakfast!'},
    { imgSrc: 'images/good2.jpg', description: 'Berry Smoothie Bowl - Refreshing and full of antioxidants.'},
    { imgSrc: 'images/good3.jpg', description: 'Quinoa Salad - Packed with protein and fresh veggies.'},
    { imgSrc: 'images/good4.jpg', description: 'Dark Chocolate Energy Bites - A guilt-free sweet treat.'}
  ];
  
  //FOOD PAGE
  $scope.currentPage = 'food';

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

  // CRUD logic for Beauty Tips
  $scope.beautyTips = [];
  $scope.isEditingBeauty = false;
  $scope.addOrUpdateBeauty = function() {
    if ($scope.isEditingBeauty) {
      // Update existing beauty tip
      var index = $scope.beautyTips.indexOf($scope.editingBeauty);
      $scope.beautyTips[index] = angular.copy($scope.beautyItem);
      $scope.isEditingBeauty = false;
    } else {
      // Add new beauty tip
      $scope.beautyTips.push(angular.copy($scope.beautyItem));
    } 
    $scope.clearBeautyForm();
  };
  $scope.deleteBeauty = function(item) {
    var index = $scope.beautyTips.indexOf(item);
    $scope.beautyTips.splice(index, 1);
  };
  $scope.editBeauty = function(item) {
    $scope.isEditingBeauty = true;
    $scope.editingBeauty = item;
    $scope.beautyItem = angular.copy(item);
  };
  $scope.clearBeautyForm = function() {
    $scope.beautyItem = {};
    $scope.isEditingBeauty = false;
  };


  // Subscribe functionality
  $scope.showSubscribePopup = false;

    $scope.openSubscribePopup = function() {
        $scope.showSubscribePopup = true;
    };

    $scope.closePopup = function() {
        $scope.showSubscribePopup = false;
    };


  $scope.navigate = function (page) {
    $scope.currentPage = page;
  };
  
});

$scope.beautyCategories = {
  skinCare: [
    { imgSrc: 'images/skinker1.jpg', description: 'Soothing Face Mask' },
    { imgSrc: 'images/skinker2.jpg', description: 'Glowing Skin Serum' },
    { imgSrc: 'images/skinker3.jpg', description: 'Hydrating Mist' }
  ]
};


$scope.beautyCategories = {
  skinCare: [
    { imgSrc: 'assets/images/skin1.jpg', description: 'Soothing Face Mask' },
    { imgSrc: 'assets/images/skin2.jpg', description: 'Glowing Skin Serum' },
    { imgSrc: 'assets/images/skin3.jpg', description: 'Hydrating Mist' },
    { imgSrc: 'assets/images/skin4.jpg', description: 'Gentle Exfoliant' }
  ],
  hairCare: [
    { imgSrc: 'assets/images/hair1.jpg', description: 'DIY Hair Oil' },
    { imgSrc: 'assets/images/hair2.jpg', description: 'Natural Shampoo' },
    { imgSrc: 'assets/images/hair3.jpg', description: 'Conditioning Mask' },
    { imgSrc: 'assets/images/hair4.jpg', description: 'Scalp Scrub' }
  ]
};

