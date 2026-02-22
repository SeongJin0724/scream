const { mockUser, MOCK_TOKEN } = require("./_mockData");

module.exports = (req, res) => {
  const auth = req.headers.authorization || "";
  const token = auth.replace("Bearer ", "").replace("bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "토큰이 없습니다." });
  }
  // 데모: 유효한 토큰이면 목 유저 반환
  return res.json({ user: mockUser });
};
