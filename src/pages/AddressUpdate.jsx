import React, { useState } from "react";
import Main from "../components/section/Main";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import { useAuth } from "../components/contents/AuthContext";
import axios from "axios";

export default function AddressUpdate(props) {
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const { user, updateUser } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: "유저",
    profileImage: "https://via.placeholder.com/150x150",
    email: "None@naver.com",
    nickname: "닉네임",
    phoneNumber: "010-0000-0000",
  });
  const saveAddress = () => {
    if (editIndex >= 0) {
      // 주소 수정
      const updatedAddresses = [...savedAddresses];
      updatedAddresses[editIndex] = { zonecode, address, detailedAddress };
      setSavedAddresses(updatedAddresses);
      setEditIndex(-1); // 수정 모드 해제
    } else {
      // 새 주소 추가
      setSavedAddresses((prev) => [
        ...prev,
        { zonecode, address, detailedAddress },
      ]);
    }
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
      setZonecode(zonecode);
      setAddress(address);
      window.removeEventListener("message", handleMessage); // 이벤트 리스너 제거
    };

    window.addEventListener("message", handleMessage);
  };

  const openModal = (index) => {
    if (index >= 0) {
      // 주소 수정 모드
      const { zonecode, address, detailedAddress } = savedAddresses[index];
      setZonecode(zonecode);
      setAddress(address);
      setDetailedAddress(detailedAddress);
      setEditIndex(index);
    } else {
      // 새 주소 추가 모드
      setZonecode("");
      setAddress("");
      setDetailedAddress("");
      setEditIndex(-1);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };
  const AddressUpdateApi = async () => {
    try {
      // 저장된 주소 정보를 하나의 문자열로 결합
      const addressString = savedAddresses
        .map(
          (addr) => `${addr.address}, ${addr.detailedAddress}, ${addr.zonecode}`
        )
        .join("; ");

      // 서버로 전송할 데이터 객체 생성
      const data = {
        user_id: user.user_id, // 사용자 ID
        address: addressString, // 결합된 주소 정보 문자열
        // 필요한 추가 정보가 있다면 여기에 포함
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/mypage/address`,
        data
      );

      // updateUser 함수를 사용하여 사용자 정보를 업데이트
      // 이 예에서는 사용자의 주소 정보만 업데이트되지만, 필요에 따라 다른 정보도 업데이트할 수 있습니다.
      updateUser({ ...user, address: addressString });

      alert("기본배송지로 설정되었습니다.");
    } catch (error) {
      console.error("Failed to update user:", error);
      throw error; // 오류 발생 시 다시 throw하여 호출 코드에서 처리할 수 있도록 함
    }
  };
  return (
    <Main>
      <div className="address_container_wrap">
        <h1 className="address_wrap_h1">주소록</h1>
        <div className="address_wrap_btn">
          <button onClick={openModal} className="address_plusbtn">
            새 배송지 추가
          </button>
        </div>
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
                    <a href="/mypage/account">판매 정산 계좌</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="address_list">
            기본배송지:{user.address}
            {savedAddresses.map((addr, index) => (
              <div key={index} className="address_list_item">
                <p>
                  ({addr.zonecode}){addr.address}&nbsp;상세주소:
                  {addr.detailedAddress}
                </p>
                <div className="address_btn_wrap">
                  <button
                    className="address_defalutbtn"
                    onClick={AddressUpdateApi}
                  >
                    기본배송지
                  </button>
                  <button
                    onClick={() => openModal(index)}
                    className="address_updatebtn"
                  >
                    수정
                  </button>
                  <button className="address_deletebtn">삭제</button>
                </div>
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
                padding: "30px 60px", //  Optional padding
                borderRadius: "16px",
                backgroundColor: "rgb(255, 255, 255)",
              },
            }}
            ariaHideApp={false}
          >
            <div className="address_wrap">
              <h3 className="address_wrap_myaccount_h3">주소 추가/수정</h3>
              <div className="address_wrap_myaccount">
                <button onClick={closeModal} className="address_closebtn">
                  <IoIosClose />
                </button>
                <div className="address_wrap_myaccount_inner">
                  <label className="address_title">우편번호</label>

                  <input
                    type="number"
                    value={zonecode}
                    readOnly
                    placeholder="우편 번호를 검색하세요"
                  />
                  <button
                    type="button"
                    className="address_plusbtn2"
                    onClick={openAddressSearch}
                  >
                    주소 찾기
                  </button>
                </div>
              </div>
              <div className="address_wrap_myaccount">
                <label className="address_title">주소</label>
                <input
                  type="text"
                  value={address}
                  readOnly
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
                저장
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </Main>
  );
}
