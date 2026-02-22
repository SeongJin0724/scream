const { items } = require("../_mockData");

module.exports = (req, res) => {
  const itemKey = parseInt(req.query.itemKey);
  const item = items.find((i) => i.itemKey === itemKey);
  if (!item) return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
  res.json([item]);
};
