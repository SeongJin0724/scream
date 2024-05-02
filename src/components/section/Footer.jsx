import React, { useState } from "react";
import {
  uldata1,
  uldata2,
  uldata3,
  uldata4,
  uldata5,
  uldata6,
} from "../data/footerdata";
import ModalContent from "../contents/ModalContent";
import { FcCloseUpMode } from "react-icons/fc";
import { FaCamera } from "react-icons/fa";
import { BiCloset } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const openModal = (contents) => {
    setModalContents(contents);
    setModal(true);
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_top_inner">
            <nav className="footer_nav">
              <ul className="footer_info">
                <strong className="menu_title">이용안내</strong>
                {uldata1.map((item, index) => (
                  <li key={index} onClick={() => openModal(item.src)}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ModalContent isOpen={modal} onClose={() => setModal(false)}>
                <div>{modalContents}</div>
              </ModalContent>
            </nav>
            <nav className="footer_nav2">
              <ul className="footer_info2">
                <strong className="menu_title2">고객지원</strong>
                {uldata2.map((item, index) => (
                  <li key={index}>
                    <Link to={item.src}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer_info3">
            {uldata3.map((item, index) => (
              <div className="p_wrap" key={index}>
                {item.content}
              </div>
            ))}
            <Link className="p9" to={"/question"}>
              <input
                type="button"
                id="question_button"
                value="자주 묻는 질문"
              />
            </Link>
          </div>
        </div>
        <div className="footer_bottom">
          <nav className="footer_nav3">
            <div className="footer_info4_wrap">
              <ul className="footer_info4">
                {uldata4.map((item, index) => (
                  <li key={index}>
                    <Link to={item.src}>{item.title}</Link>
                  </li>
                ))}
                <Link to={"/footernotice"} className="menu_title3">
                  개인정보처리방침
                </Link>
              </ul>
              <div className="footer_info4_icon">
                <Link to={"/talented"}>
                  <FcCloseUpMode className="FcCloseUpMode" />
                </Link>
                <Link to={"/talented"}>
                  <FaCamera className="FaCamera" />
                </Link>
                <Link to={"/partnership"}>
                  <BiCloset className="BiCloset" />
                </Link>
              </div>
            </div>

            {uldata5.map((item, index) => (
              <div className="p_wrap" key={index}>
                {item.content}
              </div>
            ))}
          </nav>
          <div className="footer_nav4">
            {uldata6.map((item, index) => (
              <div className="p_wrap2" key={index}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
