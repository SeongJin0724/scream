import React, { useState } from "react";
import Modal from "react-modal"; // react-modal 라이브러리에서 Modal 컴포넌트를 임포트합니다.
import DaumPostcode from "react-daum-postcode"; // Daum 주소 검색 컴포넌트를 임포트합니다.
import Main from "../components/section/Main";
import ModalContent from "../components/contents/ModalContent";
import { IoIosClose } from "react-icons/io";

Modal.setAppElement("#root"); // 모달의 앱 요소를 설정합니다.

export default function AddressUpdate() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reactOpenModal, setReactOpenModal] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [detailedAddress, setDetailedAddress] = useState("");

  // 모달을 여는 함수
  const reactOpenModalHandler = () => {
    setReactOpenModal(true);
  };

  // 모달을 닫는 함수
  const reactCloseModal = () => {
    setReactOpenModal(false);
  };
  // 모달을 여는 함수
  const openModal = () => {
    setModalIsOpen(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // Daum 주소 검색 완료 핸들러
  const completeHandler = (data) => {
    console.log(data);
    closeModal(); // 주소 선택 후 모달 닫기
  };

  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };

  return (
    <Main>
      <button onClick={reactOpenModalHandler}>새 배송지 추가</button>
      <Modal
        isOpen={reactOpenModal}
        onRequestClose={reactCloseModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "600px", // Set width as required
            border: "1px solid #ccc", // Optional border styling
            padding: "20px", // Optional padding
          },
        }}
      >
        <button onClick={openModal}>모달 열기</button>
        <div className="address_modal_wrap">
          <ModalContent isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Daum 주소 검색</h2>
            <DaumPostcode onComplete={completeHandler} />

            <button onClick={closeModal} className="modal-button">
              <IoIosClose />
            </button>
          </ModalContent>
        </div>
        <div className="address_wrap">
          <div className="address_wrap_myaccount">
            <label className="address_title">우편번호</label>
            <input
              type="number"
              value={zonecode}
              readonly="readonly"
              placeholder="우편 번호를 검색하세요"
            />
          </div>
          <div className="address_wrap_myaccount">
            <label className="address_title">주소</label>
            <input
              type="text"
              value={address}
              readonly="readonly"
              placeholder="우편 번호 검색 후, 자동입력 됩니다"
            />
          </div>
          <div className="address_wrap_myprivate">
            <label className="address_title">상세 주소</label>
            <input
              value={detailedAddress}
              onChange={inputChangeHandler}
              placeholder="건물, 아파트, 동/호수 입력"
            />
          </div>
        </div>
      </Modal>
    </Main>
  );
}
