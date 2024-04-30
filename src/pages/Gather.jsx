import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/section/Main";
import { useCheckboxLogic } from "../components/data/CheckboxLogic";
import { gather } from "../components/data/gather";
import CheckBox from "../components/contents/CheckBox";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import ModalContent from "../components/contents/ModalContent";
export default function Gather() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const {
    isAllChecked,
    isTermsChecked,
    isPrivacyChecked,
    isAChecked,
    handleAllCheck,
    handleTermsCheck,
    handlePrivacyCheck,
    handleACheck,
  } = useCheckboxLogic();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTermsChecked && isPrivacyChecked) {
      navigate("/join");
    } else {
      alert("모든 필수 항목을 체크해주세요.");
    }
  };

  const openModal = (contents) => () => {
    setModalContents(contents);
    setModal(true);
  };
  return (
    <Main>
      <form className="terms_container" onSubmit={handleSubmit}>
        <div className="terms_inner">
          <div className="terms_item">
            <div className="terms_item_inner">
              <CheckBox checked={isAllChecked} onChange={handleAllCheck}>
                {isAllChecked ? (
                  <MdCheckBox className="terms_check_icon terms_icon terms_input_icon" />
                ) : (
                  <MdCheckBoxOutlineBlank className="terms_border_icon terms_icon terms_input_icon" />
                )}
                {gather[0].title}
              </CheckBox>

              <FiPlus
                className="terms_plus_icon terms_icon"
                onClick={openModal(gather[0].content)}
              />
            </div>
            <ModalContent isOpen={modal} onClose={() => setModal(false)}>
              <div> {modalContents}</div>
            </ModalContent>
          </div>
          <div className="terms_item">
            <div className="terms_item_inner">
              <CheckBox checked={isTermsChecked} onChange={handleTermsCheck}>
                {isTermsChecked ? (
                  <MdCheckBox className="terms_check_icon terms_icon terms_input_icon" />
                ) : (
                  <MdCheckBoxOutlineBlank className="terms_border_icon terms_icon terms_input_icon" />
                )}
                {gather[1].title}
              </CheckBox>

              <FiPlus
                className="terms_plus_icon terms_icon"
                onClick={openModal(gather[1].content)}
              />
            </div>
            <ModalContent isOpen={modal} onClose={() => setModal(false)}>
              <div> {modalContents}</div>
            </ModalContent>
          </div>
          <div className="terms_item">
            <div className="terms_item_inner">
              <CheckBox
                checked={isPrivacyChecked}
                onChange={handlePrivacyCheck}
              >
                {isPrivacyChecked ? (
                  <MdCheckBox className="terms_check_icon terms_icon terms_input_icon" />
                ) : (
                  <MdCheckBoxOutlineBlank className="terms_border_icon terms_icon terms_input_icon" />
                )}
                {gather[2].title}
              </CheckBox>

              <FiPlus
                className="terms_plus_icon terms_icon"
                onClick={openModal(gather[2].content)}
              />
            </div>
            <ModalContent isOpen={modal} onClose={() => setModal(false)}>
              <div> {modalContents}</div>
            </ModalContent>
          </div>
          <div className="terms_item">
            <div className="terms_item_inner">
              <CheckBox checked={isAChecked} onChange={handleACheck}>
                {isAChecked ? (
                  <MdCheckBox className="terms_check_icon terms_icon terms_input_icon" />
                ) : (
                  <MdCheckBoxOutlineBlank className="terms_border_icon terms_icon terms_input_icon" />
                )}
                {gather[3].title}
              </CheckBox>

              <FiPlus
                className="terms_plus_icon terms_icon"
                onClick={openModal(gather[3].content)}
              />
            </div>
            <ModalContent isOpen={modal} onClose={() => setModal(false)}>
              <div> {modalContents}</div>
            </ModalContent>
          </div>
        </div>
        <button className="terms_btn" onClick={handleSubmit}>
          약관 동의 후 회원가입하기
        </button>
      </form>
    </Main>
  );
}
