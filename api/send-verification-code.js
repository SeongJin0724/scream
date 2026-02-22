module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  // 데모: 항상 성공 (실제 이메일 발송 없음)
  res.json({ message: "인증 코드가 발송되었습니다." });
};
