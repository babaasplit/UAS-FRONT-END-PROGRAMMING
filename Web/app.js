var app = angular.module('thriveSoulApp', []);

app.controller('MainController', function($scope) {
  // Initial page setup
  $scope.currentPage = 'home';
  $scope.navigate = function(page) {
    $scope.currentPage = page;
  };

  $scope.trendingRecipes = [
    {
      imgSrc: 'images/recipe1.jpg',
      description: 'Craft Your Own Signature Scents with Essential Oil Blends'
    },
    {
      imgSrc: 'images/recipe2.jpg',
      description: 'Natural Acne Solutions: 12 DIY Masks for Clearer Skin'
    },
    {
      imgSrc: 'images/recipe3.jpg',
      description: 'Exfoliate Naturally: Homemade Face Scrubs Using Pantry Staples'
    },
    {
      imgSrc: 'images/recipe4.jpg',
      description: 'Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost'
    },
    {
      imgSrc: 'images/recipe5.jpg',
      description: 'Homemade Herbal Teas: Soothing Blends for Relaxation'
    },
    {
      imgSrc: 'images/recipe6.jpg',
      description: 'DIY Lip Balm: Nourish Your Lips Naturally'
    },
    {
      imgSrc: 'images/recipe7.jpg',
      description: 'Healthy Smoothie Bowls: Toppings and Ideas for a Vibrant Breakfast'
    },
    {
      imgSrc: 'images/recipe8.jpg',
      description: 'Plant-Based Meal Prep: Quick and Easy Vegan Recipes'
    },
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

    // Image About
    $scope.About1 = {
      imgSrc: 'images/about1.jpg'  
  };
  $scope.About2 = {
    imgSrc: 'images/about2.jpg'  
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

  // CRUD logic for Food Recipes
  $scope.foodItems = [];
  $scope.isEditingFood = false;
  $scope.addOrUpdateFood = function() {
    if ($scope.isEditingFood) {
      // Update existing food recipe
      var index = $scope.foodItems.indexOf($scope.editingFood);
      $scope.foodItems[index] = angular.copy($scope.foodItem);
      $scope.isEditingFood = false;
    } else {
      // Add new food recipe
      $scope.foodItems.push(angular.copy($scope.foodItem));
    }
    $scope.clearFoodForm();
  };
  $scope.deleteFood = function(item) {
    var index = $scope.foodItems.indexOf(item);
    $scope.foodItems.splice(index, 1);
  };
  $scope.editFood = function(item) {
    $scope.isEditingFood = true;
    $scope.editingFood = item;
    $scope.foodItem = angular.copy(item);
  };
  $scope.clearFoodForm = function() {
    $scope.foodItem = {};
    $scope.isEditingFood = false;
  };

  // Subscribe functionality
  $scope.subscriber = {};
  $scope.subscribe = function() {
    alert("Subscribed with email: " + $scope.subscriber.email);
    $scope.subscriber = {}; // Clear form after submission
  };
});
