import React, { useState } from "react";

import { uldata1, uldata2, uldata3 } from "../data/footerdata";
import ModalContent from "../contents/ModalContent";
import { FcCloseUpMode } from "react-icons/fc";
import { FaCamera } from "react-icons/fa";
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
          <nav className="footer_nav">
            <ul className="footer_info">
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
              {uldata2.map((item, index) => (
                <li key={index}>
                  <Link to={item.src}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer_info3">
            {uldata3.map((item, index) => (
              <p className="p_wrap" key={index}>
                {item.content}
              </p>
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
            <ul className="footer_info4">
              <li>
                <Link to={"/company"}>회사소개</Link>
              </li>
              <li>
                <Link to={"/talented"}>인재채용</Link>
              </li>
              <li>
                <Link to={"/partnership"}>제휴제안</Link>
              </li>
              <li>
                <Link to={"/terms"}>이용약관</Link>
              </li>
              <li>
                <Link to={"/personal"} className="info41">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer_info5">
            <p className="p1">
              주식회사 · 대표 ㅇㅇㅇ 사업자등록번호 : 000-11-22222 통신판매업 :
              제 0123-C-4567호
            </p>
            <p className="p2">
              사업장소재지 : 경기도 성남시 호스팅 서비스 : 네이버 클라우드 ㈜
            </p>
            <p className="p3">신한은행 채무지급보증 안내</p>
            <p className="p4">
              당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
            <p className="p5">
              ㅇㅇ은 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
              개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와
              책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래
              체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에
              대한 책임은 ㅇㅇ에 있습니다.
            </p>
            <Link to={"/company"}>
              <FcCloseUpMode className="FcCloseUpMode" />
            </Link>
            <Link to={"/company"}>
              <FaCamera className="FaCamera" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
