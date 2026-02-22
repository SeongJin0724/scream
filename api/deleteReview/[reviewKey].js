module.exports = (req, res) => {
  if (req.method !== "DELETE") return res.status(405).end();
  res.json({ message: "리뷰가 삭제되었습니다." });
};
