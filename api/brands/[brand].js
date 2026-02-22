const { items } = require("../_mockData");

module.exports = (req, res) => {
  const { brand } = req.query;
  const filtered = items.filter(
    (item) => item.brand.toLowerCase() === brand.toLowerCase()
  );
  res.json([filtered]);
};
