const { mockWishlist } = require("../_mockData");

module.exports = (req, res) => {
  const auth = req.headers.authorization || "";
  if (!auth) return res.json([[]]); // 비로그인 시 빈 위시리스트
  res.json([mockWishlist]);
};
