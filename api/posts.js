const { mockReviews } = require("./_mockData");

module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const { user_id } = req.body || {};
  const userPosts = mockReviews.filter((r) => String(r.user_id) === String(user_id));
  res.json([userPosts]);
};
