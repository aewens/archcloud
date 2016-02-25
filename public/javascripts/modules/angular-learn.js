// Generated by CoffeeScript 1.10.0
(function() {
  define(["corejs"], function(Core) {
    return Core.register("angular-learn", function(sandbox) {
      return {
        init: function() {
          var angular, app;
          console.log("Starting angular-learn...");
          angular = sandbox.use("angular");
          if (!angular) {
            this.destroy();
          }
          app = angular.module("angular-learn", []);
          app.factory("Data", function() {
            return {
              fname: "Austin",
              lname: "Ewens",
              name: "Austin Ewens"
            };
          });
          app.controller("NameCtrl", function($scope, Data) {
            $scope.data = Data;
            return $scope.updateName = function() {
              var name;
              name = $scope.data.fname + " " + $scope.data.lname;
              return $scope.data.name = name;
            };
          });
          app.controller("ReverseCtrl", function($scope, Data) {
            return $scope.data = Data;
          });
          return angular.bootstrap(document, ["angular-learn"]);
        },
        destroy: function() {
          return console.log("Stopping angular-learn...");
        }
      };
    });
  });

}).call(this);
