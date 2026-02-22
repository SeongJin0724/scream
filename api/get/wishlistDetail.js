const { mockWishlist } = require("../_mockData");

module.exports = (req, res) => {
  const itemKey = parseInt(req.query.itemKey);
  const auth = req.headers.authorization || "";
  if (!auth) return res.json({ data: [] });
  const match = mockWishlist.filter((w) => w.itemKey === itemKey);
  res.json({ data: match });
};
