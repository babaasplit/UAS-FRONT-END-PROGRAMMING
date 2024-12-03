angular.module('thriveSoulApp').service('AuthService', function($http) {
    // Pastikan API URL hanya didefinisikan sekali
    const API_URL = "http://localhost:3000";

    // Method untuk login
    this.login = function(userData) {
        return $http.post(`${API_URL}/auth/login`, userData);
    };

    // Method untuk register
    this.register = function(userData) {
        return $http.post(`${API_URL}/auth/register`, userData);
    };
});
