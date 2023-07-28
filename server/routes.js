class Routes {
  constructor(app, socket) {
    this.io = socket;
    this.app = app;
  }

  routesConfig() {
    this.appRoute();
    this.registerSocketEvent();
  }

  appRoute() {
    this.app.get("/", (index, response) => {
      response.render("index");
    });

    // ---- specify all other routes
  }

  registerSocketEvent() {
    this.io.on("connection", (socket) => {
      this.globalSocket = socket;
      socket.on("socket_connection", (cb) => {
        cb("Socket IO Connection Established");
        return;
      });
    });

    // ..... Listen Other socket connection as above  and take action
  }
}

module.exports = Routes;
