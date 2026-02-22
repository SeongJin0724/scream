module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  res.json({ message: "거래가 취소 처리되었습니다." });
};
