const { mockUser, MOCK_TOKEN } = require("./_mockData");

module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const updatedInfo = req.body || {};
  const updatedUser = { ...mockUser, ...updatedInfo };
  return res.json({ user: updatedUser, newToken: MOCK_TOKEN });
};
