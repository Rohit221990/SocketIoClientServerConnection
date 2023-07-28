class Config {
  constructor(app) {
    //setting .html as the default template extention
    app.set("view engine", "html");

    // Initilization the ejs template engine
    app.engine("html", require("ejs").renderFile);

    //Telling express where it can find the templates
    app.set("views", __dirname + "/../views");

    // Files
    app.use(require("express").static(require("path").join("public_data")));
  }
}

module.exports = Config;
