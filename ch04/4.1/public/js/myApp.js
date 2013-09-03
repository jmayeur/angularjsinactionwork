var app = angular.module('Angello', ['Angello.login']).
    controller('MainCtrl', function ($scope, $http, loginService) {
        'use strict';

        $http.get('/login').success(function (res) {
            $scope.status = 'You are ' + (res.loggedIn?'':'not ') + 'logged in';
        });

        $scope.user = {
            name: 'jmayeur',
            password: 'foreverpassword'
        };

        $scope.login = function(){
            var result = loginService.login($scope.user, $scope.loginResult);
        };

        $scope.loginResult = function(result){
            $scope.status = 'You are ' + (result?'':'not ') + 'logged in';
        }
});


angular.module('Angello.login', ['ngCookies']).service('loginService',
    function ($rootScope, $http, $cookieStore) {
        'use strict';

        var login = function (user, callback) {
            $http.post('/login', user).success(function (res) {

                if (res.loggedIn) {
                    $cookieStore.put('sessionToken', res.token);
                }
                callback(res.loggedIn);
            });
        };

        var isLoggedIn = function () {
            $http.get('/login/status').success(function (status) {
                if (!status) {
                    $location.path('/login');
                }
            });
        };

        // API
        return {
            login: login,
            isLoggedIn: isLoggedIn
        };
});