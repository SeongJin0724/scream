module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  // 데모: 결제 준비 성공 응답 (카카오페이 형식 흉내)
  res.json({
    tid: "mock_tid_" + Date.now(),
    next_redirect_pc_url: "/payment/approval?pg_token=mock_pg_token&dealKey=" + (req.body?.partner_order_id || ""),
    created_at: new Date().toISOString(),
  });
};
