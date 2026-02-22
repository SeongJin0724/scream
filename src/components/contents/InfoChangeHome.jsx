import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import MyPageUi from "./MyPageUi";
import AccountForm from "./Account";

const API_BASE = process.env.REACT_APP_API_URL || "";

export default function InfoChangeHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const { user, updateUser } = useAuth();

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
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const inputChangeHandler = (event) => {
    setDetailedAddress(event.target.value);
  };

  const newAddresses = [
    ...savedAddresses,
    { zonecode, address, detailedAddress },
  ];
  const newAddressString = newAddresses
    .map((addr) => `${addr.address}, ${addr.detailedAddress}, ${addr.zonecode}`)
    .join("; ");

  const AddressUpdateApi = async () => {
    setSavedAddresses(newAddresses);

    try {
      const token = localStorage.getItem("accessToken");
      const data = {
        user_id: user.user_id,
        address: newAddressString,
      };

      const response = await axios.post(
        `${API_BASE}/api/mypage/address`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("주소 업데이트 성공:", response.data);
      } else {
        console.error("주소 업데이트 실패:", response.status);
      }
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
      throw error;
    }

    alert("기본배송지로 설정되었습니다.");
    updateHandleSubmit(newAddressString);
    closeModal();
  };

  const updateHandleSubmit = async (newAddressString) => {
    const updatedUserInfo = {
      user_id: user.user_id,
      address: newAddressString,
    };

    try {
      await updateUser(updatedUserInfo);
      alert("정보가 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("정보 업데이트 중 오류 발생:", error);
      alert("정보 업데이트에 실패했습니다.");
    }
  };

  const updateUserHandler = () => {
    axios
      .put(`${API_BASE}/api/infochange`, {
        email,
        password,
        tel,
        user_id: user.user_id,
      })
      .then(() => {
        updateUser({ email, password, tel, user_id: user.user_id });
      })
      .catch((error) => {
        console.error("회원 정보 수정 중 오류가 발생했습니다.", error);
      });
  };
  return (
    <MyPageUi>
      <div className="infochange_container">
        <div className="infochange_wrap">
          <div className="infochange_wrap_border">
            <h1 className="infochange_wrap_h1">로그인 정보</h1>
          </div>
          <h3 className="infochange_wrap_myaccount_h3">내 계정</h3>
          <div className="infochange_wrap_myaccount">
            <label className="infochange_title">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={user.email}
            />
          </div>
          <div className="infochange_wrap_myaccount">
            <label className="infochange_title">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </div>
          <h3 className="infochange_wrap_myprivate_h3">개인정보</h3>
          <div className="infochange_wrap_myprivate">
            <label className="infochange_title">전화번호</label>
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder={user.tel}
            />
          </div>
          <button onClick={updateUserHandler} className="infochange_btn">
            로그인 정보 수정
          </button>
        </div>
      </div>
      <div className="address_container">
        <div className="address_title_wrap">
          <h1 className="address_title">주소 정보</h1>
        </div>
        <h3 className="address_sub_title">기본배송지 </h3>
        <div className="address_content">{user.address}</div>
        <div className="address_wrap_btn">
          <button onClick={openModal} className="address_edit_btn">
            기본 배송지 수정
          </button>
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
            <button onClick={AddressUpdateApi} className="address_plusbtn3">
              저장
            </button>
          </div>
        </Modal>
      </div>
      <AccountForm />
    </MyPageUi>
  );
}