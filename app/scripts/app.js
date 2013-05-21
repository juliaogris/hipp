'use strict';

angular.module('hippApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl'
      })
      .when('/find', {
        templateUrl: 'views/find.html',
        controller: 'FindCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
