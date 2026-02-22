const { MOCK_TOKEN } = require("./_mockData");

module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "이메일과 비밀번호를 입력해주세요." });
  }
  // 데모: 어떤 이메일/비밀번호든 로그인 성공
  return res.json({ token: MOCK_TOKEN, message: "로그인 성공" });
};
