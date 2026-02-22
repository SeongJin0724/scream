module.exports = (req, res) => {
  res.json({
    aid: "mock_aid_" + Date.now(),
    tid: req.query.pg_token || "mock_tid",
    partner_order_id: req.query.dealKey || "",
    item_name: "SCREAM 상품",
    amount: { total: 0, tax_free: 0 },
    approved_at: new Date().toISOString(),
    message: "결제가 완료되었습니다.",
  });
};
