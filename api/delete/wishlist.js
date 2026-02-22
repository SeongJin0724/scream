module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  res.json({ message: "위시리스트에서 삭제되었습니다." });
};
