import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import Apply from "../components/contents/Apply";
import ApplyResultModal from "../components/contents/ApplyResultModal";
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
  const [success, setSuccess] = useState(false);

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
          if (response.data.success) {
            setApply(false);
            setSuccess(true);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      handleSubmit();
    }
  }, [apply]);

  useEffect(() => {
    if (success) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [success]);

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
      {success && <ApplyResultModal type="판매" />}
    </Main>
  );
}
