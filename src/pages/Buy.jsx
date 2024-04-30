import React, { useState } from "react";
import Main from "../components/section/Main";
import Apply from "../components/contents/Apply";

export default function Buy() {
  const [formData, setFormData] = useState({
    deal: "구매",
    dealItem: "",
    size: "",
    desc: "",
    price: "",
    fee: "",
    deadline: "",
    totalPrice: "",
  });

  const getData = (form) => {
    setFormData({ ...formData, ...form });
  };

  return (
    <Main>
      <Apply
        onGetData={getData}
        content={{
          type: "구매",
          fee: 0.03,
          total: "총 결제금액",
          deliveryFee: "선불 · 구매자부담",
          desc: "상품 희망 상태",
        }}
      />
    </Main>
  );
}
