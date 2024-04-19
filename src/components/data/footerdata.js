import Guideline from "../../pages/Guideline";
import Standards from "../../pages/Standards";
import Policy from "../../pages/Policy";
import Penalty from "../../pages/Penalty";
import Notice from "../../pages/Notice";
import Service from "../../pages/Service";
import Storeinfo from "../../pages/Storeinfo";
import Acceptance from "../../pages/Acceptance";
import Company from "../../pages/Company";
import Talented from "../../pages/Talented";
import Partnership from "../../pages/Partnership";
import Terms from "../../pages/Terms";
import Personal from "../../pages/Personal";
import { Link } from "react-router-dom";

export const uldata1 = [
  {
    title: "검수기준",
    src: <Standards />,
  },
  {
    title: "이용정책",
    src: <Policy />,
  },
  {
    title: "페널티 정책",
    src: <Penalty />,
  },
  {
    title: "커뮤니티 가이드라인",
    src: <Guideline />,
  },
];
export const uldata2 = [
  {
    title: "공지사항",
    src: "/notice",
  },
  {
    title: "서비스 소개",
    src: "/service",
  },
  {
    title: "스토어 안내",
    src: "/storeinfo",
  },
  {
    title: "판매자 방문접수",
    src: "/acceptance",
  },
];
export const uldata3 = [
  {
    content: <p className="p6">고객센터 1234-5678</p>,
  },
  {
    content: (
      <p className="p7">
        운영시간 평일 10:00 - 18:00(토∙일, 공휴일휴무) 점심시간 평일 13:00 -
        14:00
      </p>
    ),
  },

  {
    content: <p className="p8"> 1:1 문의하기는 앱에서만 가능합니다.</p>,
  },
];
export const uldata4 = [
  {
    title: "회사소개",
    src: "/company",
  },
  {
    title: "인재채용",
    src: "/talented",
  },
  {
    title: "제휴제안",
    src: "/partnership",
  },
  {
    title: "이용약관",
    src: "/terms",
  },
];
export const uldata5 = [
  {
    content: (
      <p className="p1">
        크림 주식회사 · 대표 김창욱<span className="blank"></span>사업자등록번호
        : 570-88-01618
        <Link className="p10" id="p10" to={"/question"}>
          사업자정보확인
        </Link>
        <span className="blank"></span>
        통신판매업 : 제 2021-성남분당C-0093호 사업장소재지 : 경기도 성남시
        분당구 분당내곡로 131 판교테크원 타워1, 8층
        <span className="blank"></span>호스팅 서비스 : 네이버 클라우드 ㈜
      </p>
    ),
  },
];

export const uldata6 = [
  {
    content: <p className="p2">신한은행 채무지급보증 안내</p>,
  },

  {
    content: (
      <p className="p3">
        당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을
        체결하여 안전거래를 보장하고 있습니다.
        <Link className="p11" id="p11" to={"/question"}>
          서비스가입 사실 확인
        </Link>
      </p>
    ),
  },
  {
    content: (
      <p className="p4">
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은
        개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은
        각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서
        고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에
        있습니다.
      </p>
    ),
  },
];
