const { mockDeals, items } = require("../../_mockData");

module.exports = (req, res) => {
  const itemKey = parseInt(req.query.itemKey);
  const item = items.find((i) => i.itemKey === itemKey);
  if (!item) return res.status(404).json({ message: "상품을 찾을 수 없습니다." });

  const sales = mockDeals
    .filter((d) => d.itemKey === itemKey && d.deal === "판매" && d.status === "대기중")
    .map((d) => ({ ...d }));

  const purchases = mockDeals
    .filter((d) => d.itemKey === itemKey && d.deal === "구매" && d.status === "대기중")
    .map((d) => ({ ...d }));

  // 아이템마다 기본 샘플 오퍼 생성 (빈 경우 대비)
  if (sales.length === 0) {
    sales.push({
      dealKey: 9000 + itemKey,
      itemKey,
      itemTitle: item.title,
      description: "정품 보증, 상태 최상",
      size: item.sizes[0] || "FREE",
      price: Math.floor(item.launchPrice * 1.1),
      deadline: "2026-05-31T00:00:00.000Z",
    });
  }
  if (purchases.length === 0) {
    purchases.push({
      dealKey: 9500 + itemKey,
      itemKey,
      itemTitle: item.title,
      description: "정품이면 바로 구매합니다",
      size: item.sizes[0] || "FREE",
      price: Math.floor(item.launchPrice * 0.95),
      deadline: "2026-05-31T00:00:00.000Z",
    });
  }

  res.json({ sales, purchases });
};
