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
    content: <p className="p9"> 1:1 문의하기는 앱에서만 가능합니다.</p>,
  },
];
// export const uldata2 = [
//   {
//     title: "notice",
//     src: <Notice />,
//   },
//   {
//     title: "service",
//     src: <Service />,
//   },
//   {
//     title: "storeinfo",
//     src: <Storeinfo />,
//   },
//   {
//     title: "Acceptance",
//     src: <Acceptance />,
//   },
// ];

// export const uldata3 = [
//   {
//     title: "company",
//     src: <Company />,
//   },
//   {
//     title: "talented",
//     src: <Talented />,
//   },
//   {
//     title: "partnership",
//     src: <Partnership />,
//   },
//   {
//     title: "terms",
//     src: <Terms />,
//   },
//   {
//     title: "personal",
//     src: <Personal />,
//   },
// ];
