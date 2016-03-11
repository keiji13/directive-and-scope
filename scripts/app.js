angular.module('app', [])
.controller('AppCtrl', function($scope) {
  $scope.name = 'Jay Conaco';
  $scope.color = "#333333";
  
  this.reverseName = function(){
      $scope.name = $scope.name.split('').reverse().join('');
  };
  
  this.randomColor = function(){
      $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  };
  
})
.directive('nameChanger', function(){
  return {
    restrict: 'E',
    replace:true,
    scope: false,
    template: ['<div class="form-group">',
      '<label for="name">Name</label>',
      '<input type="text" class="form-control" placeholder="Name" ng-model="name"></div>'].join('')
  }
})
.directive('nameChangerNew', function(){
  return {
    restrict: 'C',
    scope: true,
    template: ['<h5>My name is {{name}} inside new scoped directive </h5>',
      '<label for="name">Name</label>',
      '<input type="text" class="form-control" placeholder="Name" ng-model="name">'].join('')
  }
})
.directive('nameChangerIsolated', function(){
  return {
    restrict: 'A',
    scope: {
      name: '@nameChangerIsolated',
      color: '=',
      reverse: '&'
    },
    template: ['<h5 style="color:{{color}}">My name is {{name}} inside new scoped directive <button class="btn btn-primary" ng-click="reverse()">Reverse</button></h5>',
      '<label>Name</label>',
      '<input type="text" class="form-control" placeholder="Name" ng-model="name">',
      '<label>Color</label>',
      '<input type="text" class="form-control" placeholder="Color" ng-model="color">'].join('')
  };
})
.directive('page', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="container" ng-transclude></div>'
  };
})
.directive('pageContent', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="row" ng-transclude></div>'
  };
})
.directive('pageItem',function(){
  return {
    restrict: 'E',
    replace:true,
    transclude: true,
    template: '<div class="col-md-{{colSize}}" ng-transclude></div>',
    scope: {
      colSize: "@size"
    }
  };
}).
directive('bike', function (){
  return {
    restrict: 'E',
    scope: {
      brand: "@"
    },
    controller: function($scope){
      $scope.features = [];
      this.addFeature = function(feature){
        $scope.features.push(feature);  
      };
    },
    template: ['<h5>{{brand}}</h5>',
      '<ul>',
      '<li ng-repeat="feature in features">{{feature}}</li>',
      '</ul>'
      ].join('')
  };
})
.directive('brake', function(){
  return {
    restrict: 'A',
    require: '^bike',
    link: function(scope, element, attrs, bikeCtrl){
      bikeCtrl.addFeature('has ' + attrs.brake + ' brakes');
    }
  };
})
.directive('hardTail', function(){
  return {
    restrict: 'A',
    require: '^bike',
    link: function(scope, element, attrs, bikeCtrl){
      bikeCtrl.addFeature('has hard tail frame');
    }
  };
})
.directive('fullSuspension', function(){
  return {
    restrict: 'A',
    require: '^bike',
    link: function(scope, element, attrs, bikeCtrl){
      bikeCtrl.addFeature('has full suspension frame');
    }
  };
})
.directive('simple', function(){
  return {
    link: function(s, e, a){
       s.test = 0;
      $('.element').on('click', function(){
        s.test++;
        // apply to trigger digest
        s.$apply();
      });
      s.increment = function(){
        s.test++;
      };
    },
    template: '<button class="btn btn-primary element">Click Me <span class="badge">{{test}}</span></button><button class="btn btn-primary element" ng-click="increment()">Click Me <span class="badge">{{test}}</span></button>'
  }
});
