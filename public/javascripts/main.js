// Generated by CoffeeScript 1.10.0
(function() {
  require.config({
    urlArgs: "nocache=" + (new Date).getTime(),
    paths: {
      "jquery": ["//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min", "../vendor/jquery/dist/jquery.min"],
      "corejs": "../vendor/core_js/dist/core.min",
      "firebase": ["//cdn.firebase.com/js/client/2.4.1/firebase", "../vendor/firebase/firebase"],
      "angular": ["//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min", "../vendor/angular/angular.min"],
      "ng-route": ["//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.min", "../vendor/angular-route/angular-route.min"],
      "bootstrap": ["//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min", "../vendor/bootstrap/dist/js/bootstrap.min"],
      "ng-fire": "//cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min"
    },
    shim: {
      "firebase": {
        exports: "Firebase"
      },
      "angular": {
        deps: ["jquery"],
        exports: "angular"
      },
      "ng-route": {
        deps: ["angular"]
      },
      "ng-fire": {
        deps: ["angular"]
      },
      "bootstrap": {
        deps: ["jquery"]
      }
    }
  });

  require(["jquery", "firebase", "corejs", "bootstrap", "angular", "modules/database", "modules/dispatcher", "modules/dashboard"], function(jQuery, Firebase, Core, Bootstrap, Angular, mod_database, mod_dispatcher, mod_dashboard) {
    Core.extend("$", jQuery);
    Core.extend("db-api", Firebase);
    Core.extend("angular", Angular);
    Core.register("main", function(sandbox) {
      return {
        init: function() {
          var $, self;
          console.log("Starting main...");
          self = this;
          $ = sandbox.use("$");
          return $(document).ready(function() {
            Core.start("database");
            Core.start("dispatcher");
            Core.start("dashboard");
            $("#ng-wait").hide(function() {
              return $(".ng-load").show();
            });
            return sandbox.listen("config-data", self.configure);
          });
        },
        configure: function(config) {
          this.config = config;
          return console.log("Obtained config data...");
        },
        destroy: function() {
          return console.log("Stopping main...");
        }
      };
    });
    return Core.start("main");
  });

}).call(this);
