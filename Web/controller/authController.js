angular.module('thriveSoulApp').controller('AuthController', function($scope, AuthService) {
    $scope.loginData = { username: '', password: '' };
    $scope.registerData = { fullname: '', email: '', username: '', password: '', confirmPassword: '' };
  
    // Login Function
    $scope.login = function() {
      AuthService.login($scope.loginData)
        .then(function(response) {
          alert('Login successful!');
          $scope.closeLoginModal();
        })
        .catch(function(error) {
          alert('Login failed: ' + (error.data.message || 'Unknown error'));
        });
    };
  
    // Register Function
    $scope.register = function() {
      if ($scope.registerData.password !== $scope.registerData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      AuthService.register($scope.registerData)
        .then(function(response) {
          alert('Registration successful!');
          $scope.switchToLogin();
        })
        .catch(function(error) {
          alert('Registration failed: ' + (error.data.message || 'Unknown error'));
        });
    };
  });
  