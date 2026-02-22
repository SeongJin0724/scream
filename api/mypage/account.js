module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  res.json({ message: "계좌 정보가 저장되었습니다." });
};
