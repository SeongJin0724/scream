module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  // 데모: 항상 인증 성공
  res.json({ message: "이메일이 인증되었습니다." });
};
