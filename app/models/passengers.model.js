const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Passenger = sequelize.define(
    "passenger",
    {
      passenger_name: { type: Sequelize.STRING },
      passenger_age: { type: Sequelize.INTEGER },
      address: { type: Sequelize.STRING(100) },
    },
    {
      indexes: [
        { fields: ["passenger_name"], name: "UQ_passenger_name", unique: true },
      ],
    }
  );
  return Passenger;
};