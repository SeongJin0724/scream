const { mockReviews, items } = require("../_mockData");

module.exports = (req, res) => {
  const reviewKey = parseInt(req.query.reviewKey);
  const review = mockReviews.find((r) => r.reviewKey === reviewKey);
  if (!review) return res.status(404).json({ message: "리뷰를 찾을 수 없습니다." });
  const item = items.find((i) => i.itemKey === review.itemKey) || {};
  res.json({
    reviewKey: review.reviewKey,
    itemKey: review.itemKey,
    img: item.img || review.img,
    title: item.title || "",
    brand: item.brand || "",
    launchPrice: item.launchPrice || 0,
    content: review.content,
  });
};
