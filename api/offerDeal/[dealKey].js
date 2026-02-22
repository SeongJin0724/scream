const { mockDeals, items } = require("../_mockData");

module.exports = (req, res) => {
  const dealKey = parseInt(req.query.dealKey);
  const deal = mockDeals.find((d) => d.dealKey === dealKey);
  if (!deal) {
    // dealKey가 목 데이터에 없으면 샘플 반환
    const sampleItem = items[0];
    return res.json({
      dealKey,
      itemKey: sampleItem.itemKey,
      itemTitle: sampleItem.title,
      size: sampleItem.sizes[0] || "FREE",
      price: sampleItem.launchPrice,
      totalPrice: Math.floor(sampleItem.launchPrice * 1.01),
      fee: Math.floor(sampleItem.launchPrice * 0.01),
      deadline: "2026-05-31T00:00:00.000Z",
      deal: "판매",
    });
  }
  const item = items.find((i) => i.itemKey === deal.itemKey) || {};
  res.json({ ...deal, img: item.img ? item.img.split(",")[0].trim() : "" });
};
