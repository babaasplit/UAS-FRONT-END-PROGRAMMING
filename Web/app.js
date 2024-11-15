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
    }
  ];
  
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
