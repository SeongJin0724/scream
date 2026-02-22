const { mockReviews } = require("./_mockData");

module.exports = (req, res) => {
  if (req.method === "GET") {
    // Style.jsx: GET /api/reviews → [[...reviews]]
    return res.json([mockReviews]);
  }
  if (req.method === "POST") {
    // MyStyle.jsx: POST /api/reviews {user_id, review: false} → user's reviews
    const { user_id } = req.body || {};
    const userReviews = mockReviews.filter((r) => String(r.user_id) === String(user_id));
    return res.json([userReviews]);
  }
  res.status(405).json({ message: "Method not allowed" });
};
