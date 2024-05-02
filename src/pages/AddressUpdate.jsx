import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Main from "../components/section/Main";

export default function AddressUpdate(props) {
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState();

  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };

  const postCodeStyle = {
    width: "360px",
    height: "480px",
  };
  const completeHandler = (data) => {
    const { address, zonecode } = data;
    setAddress(address);
    setZonecode(zonecode);
  };
  const closeHandler = (state) => {
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    } else if (state === "COMPLETE_CLOSE") {
      setIsOpen(true);
    }
  };
  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };
  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };
  return (
    <Main>
      <div>
        <div>
          <strong>address</strong>
        </div>
        <div>
          <div>
            <div>{zonecode}</div>
            <button type="button" onClick={toggleHandler}>
              주소 찾기
            </button>
          </div>
          {isOpen && (
            <div>
              <DaumPostcode
                theme={themeObj}
                style={postCodeStyle}
                onComplete={completeHandler}
                onClose={closeHandler}
              />
            </div>
          )}
          <div>{address}</div>
          <input value={detailedAddress} onChange={inputChangeHandler} />
        </div>
      </div>
    </Main>
  );
}
