const { items } = require("./_mockData");

module.exports = (req, res) => {
  const term = (req.query.term || "").toLowerCase();
  if (!term) return res.json(items);
  const results = items.filter(
    (item) =>
      item.title.toLowerCase().includes(term) ||
      item.brand.toLowerCase().includes(term) ||
      item.korTitle.includes(term) ||
      item.korBrandName.includes(term)
  );
  res.json(results);
};
