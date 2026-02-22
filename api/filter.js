const { items } = require("./_mockData");

module.exports = (req, res) => {
  const { category } = req.query;
  if (!category || category === "all") {
    return res.json(items);
  }
  const filtered = items.filter((item) => item.category === category);
  res.json(filtered);
};
