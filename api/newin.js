const { items } = require("./_mockData");

module.exports = (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  // 최신순(itemKey 내림차순)으로 5개씩 반환
  const sorted = [...items].sort((a, b) => b.itemKey - a.itemKey);
  const page = sorted.slice(offset, offset + 5);
  res.json([page]);
};
