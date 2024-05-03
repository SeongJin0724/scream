import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressSearchPage = () => {
  const handleComplete = (data) => {
    window.opener.postMessage(data, window.location.origin);
    window.close(); // 주소 선택 후 창 닫기
  };

  return (
    <div>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
};

export default AddressSearchPage;
