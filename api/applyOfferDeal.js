module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  res.json({ message: "거래 신청이 완료되었습니다.", dealKey: Math.floor(Math.random() * 9000) + 1000 });
};
