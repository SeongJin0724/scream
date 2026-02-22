const { mockDeals, items } = require("./_mockData");

module.exports = (req, res) => {
  // 관리자: 서명(sign)이 없는 대기 중인 거래 반환
  const pending = mockDeals.filter((d) => !d.sign && d.status === "대기중").map((d) => {
    const item = items.find((i) => i.itemKey === d.itemKey) || {};
    return { ...d, img: item.img ? item.img.split(",")[0].trim() : "" };
  });
  res.json([pending]);
};
