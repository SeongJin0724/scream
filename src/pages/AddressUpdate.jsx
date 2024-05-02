import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Main from "../components/section/Main";
import Modal from "react-modal";

export default function AddressUpdate(props) {
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        <button onClick={openModal}>새 배송지 추가</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              position: "relative",
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "16px",
              width: "560px",
              height: "600px",
            },
          }}
        >
          <div>
            <strong>새 주소 추가</strong>
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
        </Modal>
      </div>
    </Main>
  );
}
