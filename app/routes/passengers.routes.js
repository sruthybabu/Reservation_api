const controller = require("../controllers/passengers.controller")

module.exports = function (app) {
  
  

  app.post("/passenger/createrecord", controller.createRecord);

  app.post("/passenger/updaterecord", controller.updateRecord);

  app.post("/passenger/getlist", controller.getList);

  app.post("/passenger/deleterecord", controller.deleteRecord);

};