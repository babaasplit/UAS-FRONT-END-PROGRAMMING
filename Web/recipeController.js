var app = angular.module('thriveSoulApp', []);

app.controller('RecipeController', function($scope, $location) {

    const recipes = [
        { 
            id: 1, 
            imgSrc: 'images/recipe1.jpg', 
            description: 'Craft Your Own Signature Scents with Essential Oil Blends', 
            details: 'Learn to mix essential oils to create unique and natural fragrances.' 
        },
        { 
            id: 2, 
            imgSrc: 'images/recipe2.jpg', 
            description: 'Natural Acne Solutions: 12 DIY Masks for Clearer Skin', 
            details: 'Step-by-step instructions to create acne-fighting face masks using natural ingredients.' 
        },
        { 
            id: 3, 
            imgSrc: 'images/recipe3.jpg', 
            description: 'Exfoliate Naturally: Homemade Face Scrubs Using Pantry Staples', 
            details: 'Create gentle scrubs with ingredients you already have at home.' 
        },
        { 
            id: 4, 
            imgSrc: 'images/recipe4.jpg', 
            description: 'Fresh Juicing Guide: 3 Simple Recipes for a Healthy Boost', 
            details: 'Prepare delicious and nutritious juices to energize your day.'
        },
        { 
            id: 5, 
            imgSrc: 'images/beauty1.jpg', 
            description: '5 Face Massage Techniques for a Youthful Glow', 
            details: 'ya begitu lah'
        },
        {
            id: 17, 
            imgSrc: 'images/skincare1.jpg', 
            description: 'Gentle Face Scrub', 
            details: 'yayayayayaya'
        }
        //dan seterusnya kau bikin sesuai id yg ada di app.js
    ];

    // Get Recipe ID from URL
    const queryParams = new URLSearchParams($location.absUrl().split('?')[1]);
    const recipeId = parseInt(queryParams.get('id'), 10);

    // Find the Recipe by ID
    $scope.recipe = recipes.find(r => r.id === recipeId) || null;
});