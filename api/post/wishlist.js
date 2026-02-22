module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  res.json({ message: "위시리스트에 추가되었습니다.", wishKey: Math.floor(Math.random() * 9000) + 1000 });
};
