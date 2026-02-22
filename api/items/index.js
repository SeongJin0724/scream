const { items } = require("../_mockData");

module.exports = (req, res) => {
  res.json([items]);
};
