// Generated by CoffeeScript 1.10.0
(function() {
  define(["corejs"], function(Core) {
    return Core.register("database", function(sandbox) {
      return {
        init: function() {
          console.log("Starting database...");
          if (!sandbox.use("db-api")) {
            this.destroy();
          }
          sandbox.listen("db-setup", this.setup);
          return sandbox.listen("db-act", this.act);
        },
        setup: function(data) {
          var api, self;
          console.log("Setting up database...");
          api = sandbox.use("db-api");
          this.db = new api(data.name);
          self = this;
          return this.db.on("value", function(snapshot) {
            self.snapshot = snapshot;
            return sandbox.notify({
              type: "db-ready",
              data: {
                ready: true,
                snapshot: snapshot.val()
              }
            });
          });
        },
        act: function(data) {
          var location;
          if (!this.db) {
            console.log("Setup database first!");
            return null;
          }
          console.log("Database is acting...");
          location = this.db.child(data.location);
          switch (data.mode) {
            case "set":
              return location.set(data.info);
            case "update":
              return location.update(data.info);
            case "push":
              return location.push(data.info);
            case "remove":
              return location.remove();
            default:
              return location.push(data.info);
          }
        },
        destroy: function() {
          return console.log("Stopping database...");
        }
      };
    });
  });

}).call(this);
