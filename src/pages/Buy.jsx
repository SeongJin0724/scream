import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/section/Main";
import Apply from "../components/contents/Apply";
import ApplyResultModal from "../components/contents/ApplyResultModal";
import axios from "axios";

export default function Buy() {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token]);

  const [formData, setFormData] = useState({
    deal: "구매",
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
            `${process.env.REACT_APP_API_URL}/api/applyOfferDeal`,
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
          type: "구매",
          fee: 0.03,
          total: "총 결제금액",
          deliveryFee: "선불 · 구매자부담",
          desc: "상품 희망 상태",
        }}
      />
      {success && <ApplyResultModal type="구매신청" />}
    </Main>
  );
}
