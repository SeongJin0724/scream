import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import Apply from "../components/contents/Apply";
import axios from "axios";

export default function Sell() {
  const [formData, setFormData] = useState({
    deal: "판매",
    itemKey: "",
    userId: "",
    dealItem: "",
    size: "",
    desc: "",
    price: "",
    totalPrice: "",
    fee: "",
    deadline: "",
    sign: false,
  });
  const [apply, setApply] = useState(false);

  const getData = (form) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...form }));
    setApply(true);
  };

  useEffect(() => {
    if (apply) {
      const handleSubmit = async () => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/offerDeal`,
            formData
          );
          if (response.success) {
            setApply(false);
            console.log("데이터베이스에 성공적으로 추가되었습니다.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      handleSubmit();
    }
  }, [apply]);

  return (
    <Main>
      <Apply
        onGetData={getData}
        content={{
          type: "판매",
          fee: 0.07,
          total: "정산금액",
          deliveryFee: "선불 · 판매자부담",
          desc: "상품 상태 및 설명",
        }}
      />
    </Main>
  );
}
