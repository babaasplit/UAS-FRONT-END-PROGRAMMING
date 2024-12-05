// authService.js
angular.module('thriveSoulApp').service('AuthService', function($http) {
    const API_URL = "http://localhost:3000/auth";

    this.login = function(userData) {
        return $http.post(`${API_URL}/login`, userData);
    };

    this.register = function(userData) {
        return $http.post(`${API_URL}/register`, userData);
    };
});