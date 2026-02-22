const { mockDeals } = require("./_mockData");

module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const { deal } = req.body || {};
  const completed = mockDeals.filter((d) => d.deal === deal && d.status === "완료");
  res.json([completed]);
};
