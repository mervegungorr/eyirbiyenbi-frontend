import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';

const home = angular
  .module('home', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('home', HomeComponent)
.controller('ctrl', ['$scope', function($scope) {
  $scope.item = {
    star: false,
    favorite: false,
    bookmark: false
  };
}])

.directive('buttonStar', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<button class="btn btn-icon"><span class="glyphicon glyphicon-star" ng-class="{active: item.star}"></span></button>',
    link: function(scope, elem) {
      elem.bind('click', function() {
        scope.$apply(function(){
          scope.item.star = !scope.item.star;
        });
      });
    }
  };
})

.directive('buttonFavorite', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<button class="btn btn-icon"><span class="glyphicon glyphicon-heart" ng-class="{active: item.favorite}"></span></button>',
    link: function(scope, elem) {
      elem.bind('click', function() {
        scope.$apply(function(){
          scope.item.favorite = !scope.item.favorite;
        });
      });
    }
  };
})

.directive('buttonBookmark', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<button class="btn btn-icon"><span class="glyphicon glyphicon-bookmark" ng-class="{active: item.bookmark}"></span></button>',
    link: function(scope, elem) {
      elem.bind('click', function() {
        scope.$apply(function(){
          scope.item.bookmark = !scope.item.bookmark;
        });
      });
    }
  };
}).name;

export default home;
