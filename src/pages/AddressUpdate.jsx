import React, { useState } from "react";
import Main from "../components/section/Main";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

export default function AddressUpdate(props) {
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const saveAddress = () => {
    // 새 주소 정보를 savedAddresses 배열에 추가
    setSavedAddresses((prev) => [
      ...prev,
      { zonecode, address, detailedAddress },
    ]);
    closeModal(); // 모달 닫기
  };
  const openAddressSearch = () => {
    const addressWindow = window.open(
      "/address-search-page",
      "addressSearch",
      "width=600,height=500"
    );
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) {
        return; // 동일 출처 정책을 준수
      }

      const { zonecode, address } = event.data;
      setZonecode(zonecode); // 우편번호 설정
      setAddress(address); // 주소 설정
      window.removeEventListener("message", handleMessage); // 이벤트 리스너 제거
    };

    window.addEventListener("message", handleMessage);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };
  return (
    <Main>
      <div className="address_container">
        <nav className="address_nav">
          <h3 className="address_nav_title">마이 페이지</h3>
          <ul className="address_shopinfo">
            <li className="address_shopinfo_li">
              <h3 className="address_shopinfo_title">쇼핑 정보</h3>
              <ul className="address_shopinfo_sub_ul">
                <li className="address_shopinfo_sub_li">
                  <a href="/company">구매내역</a>
                </li>
                <li className="address_shopinfo_sub_li">
                  <a href="/company">판매내역</a>
                </li>
                <li className="address_shopinfo_sub_li">
                  <a href="/company">관심</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="address_myinfo">
            <li className="address_myinfo_li">
              <h3 className="address_myinfo_title">내 정보</h3>
              <ul className="address_myinfo_sub_ul">
                <li className="address_myinfo_sub_li">
                  <a href="/mypage/infochange">로그인 정보</a>
                </li>
                <li className="address_myinfo_sub_li">
                  <a href="/mypage/profilechange">프로필 관리</a>
                </li>
                <li className="address_myinfo_sub_li">
                  <a href="/mypage/address">주소록</a>
                </li>
                <li className="address_myinfo_sub_li">
                  <a href="/company">결제 정보</a>
                </li>
                <li className="address_myinfo_sub_li">
                  <a href="/company">판매 정산 계좌</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <button onClick={openModal} className="address_plusbtn">
          새 배송지 추가
        </button>
        <div>
          {savedAddresses.map((addr, index) => (
            <div key={index}>
              <p>우편번호: {addr.zonecode}</p>
              <p>주소: {addr.address}</p>
              <p>상세주소: {addr.detailedAddress}</p>
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "530px", // Set width as required
              height: "600px",
              border: "1px solid #ccc", // Optional border styling
              padding: "30px 60px", // Optional padding
              borderRadius: "16px",
              backgroundColor: "rgb(255, 255, 255)",
            },
          }}
        >
          <div className="address_wrap">
            <h3 className="address_wrap_myaccount_h3">새 주소 추가</h3>
            <div className="address_wrap_myaccount">
              <label className="address_title">이름</label>
              <input type="text" placeholder="수령인의 이름" />
            </div>
            <div className="address_wrap_myaccount">
              <label className="address_title">휴대폰 번호</label>
              <input type="text" placeholder="-없이 입력" />
            </div>
            <div className="address_wrap_myaccount">
              <button onClick={closeModal} className="address_closebtn">
                <IoIosClose />
              </button>
              <label className="address_title">우편번호</label>
              <button
                type="button"
                className="address_plusbtn2"
                onClick={openAddressSearch}
              >
                주소 찾기
              </button>
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
            <div className="address_wrap_myaccount">
              <label className="address_title">상세 주소</label>
              <input
                value={detailedAddress}
                onChange={inputChangeHandler}
                placeholder="건물, 아파트, 동/호수 입력"
              />
            </div>
            <button onClick={saveAddress} className="address_plusbtn3">
              주소 저장
            </button>
          </div>
        </Modal>
      </div>
    </Main>
  );
}
