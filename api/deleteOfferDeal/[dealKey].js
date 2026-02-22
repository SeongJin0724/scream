module.exports = (req, res) => {
  if (req.method !== "DELETE") return res.status(405).end();
  res.json({ message: "거래가 취소되었습니다." });
};
