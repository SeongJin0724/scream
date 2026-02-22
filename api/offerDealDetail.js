const { mockDeals } = require("./_mockData");

module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const { user_id, deal } = req.body || {};
  const filtered = mockDeals.filter((d) => d.deal === deal);
  res.json([filtered]);
};
