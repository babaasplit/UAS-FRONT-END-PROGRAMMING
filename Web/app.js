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
  
  // Therapy Image
  $scope.currentPage = 'therapy';

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
  


  $scope.beautyCategories = {
    skinCare: [
      { imgSrc: 'images/skincare1.jpg', description: 'Gentle Face Scrub' },
      { imgSrc: 'images/skincare2.jpg', description: 'Soothing Face Mask' },
      { imgSrc: 'images/skincare3.jpg', description: 'Hydrating Serum' },
      { imgSrc: 'images/skincare4.jpg', description: 'Nourishing Night Cream' },
    ],
    hairCare: [
      { imgSrc: 'images/haircare1.jpg', description: 'Deep Conditioning Treatment' },
      { imgSrc: 'images/haircare2.jpg', description: 'Herbal Hair Rinse' },
      { imgSrc: 'images/haircare3.jpg', description: 'Volumizing Mousse' },
      { imgSrc: 'images/haircare4.jpg', description: 'Frizz Control Serum' },
    ],
  };
  
  
});


