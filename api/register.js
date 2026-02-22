module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  // 데모: 항상 성공
  res.json({ message: "회원가입이 완료되었습니다." });
};
