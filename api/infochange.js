module.exports = (req, res) => {
  if (req.method !== "PUT") return res.status(405).end();
  res.json({ message: "정보가 변경되었습니다." });
};
