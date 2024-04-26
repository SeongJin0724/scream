import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl"; // Import 수정
import Main from "../components/section/Main";

export default function Question() {
  // 현재 열려있는 아코디언의 상태를 관리합니다. null은 아무것도 열리지 않았음을 의미합니다.
  const [openAccordion, setOpenAccordion] = useState(null);

  // 아코디언을 토글하는 함수입니다. 인덱스를 인자로 받아 현재 열려있는 아코디언을 설정합니다.
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      // 이미 열려있는 아코디언을 클릭한 경우, 닫습니다.
      setOpenAccordion(null);
    } else {
      // 다른 아코디언을 클릭한 경우, 해당 아코디언을 엽니다.
      setOpenAccordion(index);
    }
  };

  return (
    <Main>
      <h2 className="accordionh2">자주묻는질문</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleAccordion(1)}
          >
            이용정책 - 페널티 정책
            {openAccordion === 1 ? <SlArrowUp /> : <SlArrowDown />}
          </button>
          <div
            className="accordion-content"
            style={{ display: openAccordion === 1 ? "block" : "none" }}
          >
            <div className="content-block">
              <div className="contentq">
                <p>&nbsp;</p>
                <p>
                  판매자와 구매자의 건전한 거래를 위하여 아래 사유에 따라
                  페널티가 부과됩니다.&nbsp;
                </p>
                <p>
                  결제정보 오류로 페널티 결제 실패 시,&nbsp;
                  <a href="https://kream.co.kr/agreement">이용약관</a>
                  &nbsp;제24조("서비스수수료")에 따라 별도의 고지없이 재결제를
                  시도합니다.
                </p>
                <p>&nbsp;</p>
                <h2>
                  <strong>판매거부</strong>
                </h2>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>판매 거래 대기 이후, 1시간 이내 판매 거부</td>
                        <td>
                          <h4>5.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>판매 거래 대기 이후, 1시간 이후 판매 거부</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>
                  <strong>발송지연</strong>
                </h2>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>판매 거래 체결 후,&nbsp;</p>
                          <p>48시간(일요일・공휴일 제외) 이내&nbsp;</p>
                          <p>발송 정보 미입력</p>
                        </td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>
                  <strong>미입고</strong>
                </h2>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>발송 정보 입력 후,&nbsp;</p>
                          <p>5일(일요일・공휴일 제외) 이내</p>
                          <p>검수센터에 미도착</p>
                        </td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>가송장 등 허위 정보 입력</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>거래 체결 전 상품 발송</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>
                  * 발송 정보 입력 시 지원하지 않는 배송 수단의 경우, 운송장
                  추적 불가, 도착 상품의 식별 곤란 등의 사유로 인해 입고가
                  불가하며 이에 해당하는 상품은 반송 처리됩니다.
                </p>
                <p>
                  * 반송 처리 등 정상적이지 않은 배송 방법을 통해 상품을
                  검수센터로 전달할 경우 상품 입고가 불가능합니다.
                </p>
                <p>
                  * 단, 부득이한 경우 발송 정보 입력 기한 이내에 고객센터를 통한
                  협의 및 KREAM의 사전 승인 하에 상품 동일성 식별이 가능하도록
                  조치한 경우에 한하여 상품 입고가 가능한 점 참고
                  부탁드립니다.&nbsp;
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>검수기준 악용</h2>
                <p>
                  아래 검수기준 위반시에는 페널티를 부과합니다. (패키지와 상품
                  공통 적용)
                </p>
                <p>&nbsp;</p>
                <h3>신발/의류/패션잡화</h3>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>상품 불일치</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>사이즈 불일치</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>기본 구성품 누락</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <h3>테크/라이프</h3>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>정보 불일치</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>가품, 손상/오염/사용감</h2>
                <p>
                  일반 거래는 판매가 기준이며, 보관 판매는 판매 상품 모든
                  사이즈의 전월 평균 거래가 기준입니다.&nbsp;
                </p>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>가품</td>
                        <td>
                          <h4>15.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>손상/오염/사용감</td>
                        <td>
                          <h4>15.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>페널티 감면 기준</h2>
                <p>&nbsp;</p>
                <p>
                  KREAM은 이용약관 제 24조 ("서비스 수수료") 다. 항에 따라
                  회원이 아래와 같은 특별한 사유에 해당하는 것으로 객관적으로
                  소명할 경우 기 부과된 페널티를 감경 또는 면제할 수 있습니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  KREAM은 해당 사안의 사실관계, 이전 사용이력, 거래행태 등을
                  종합적으로 분석하여 아래 사유에 해당하는지 여부를 최종
                  판단합니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  페널티 감경 또는 면제는 해당 회원의 부주의에도 불구하고
                  KREAM이 회원의 특별한 사정을 고려하여 예외적으로 실시하는
                  조치이므로 하기 특별 사유의 존재 여부는 해당 "회원"이
                  객관적으로 증명해야 할 책임이 있습니다.
                </p>
                <p>&nbsp;</p>
                <ul>
                  <li>서비스 사용 미숙에 따른 조작실수임이 명백한 경우</li>
                  <li>
                    명백히 택배사의 책임 있는 사유로 인하여 페널티 발생한 경우
                  </li>
                  <li>
                    고의성이 없이 가품 및 손상/오염/사용감 있는 제품을 판매한
                    것이 명백한 경우 (단, 페널티 감경이 이루어지더라도 가품 및
                    손상/오염/사용감 있는 제품 판매로 인한 이용정지 등의 절차는
                    진행될 수 있음)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleAccordion(2)}
          >
            이용정책 - 구매자 정책
            {openAccordion === 2 ? <SlArrowUp /> : <SlArrowDown />}
          </button>
          <div
            className="accordion-content"
            style={{ display: openAccordion === 2 ? "block" : "none" }}
          >
            <div className="content-block">
              <div className="contentq">
                <p>&nbsp;</p>
                <p>
                  판매자와 구매자의 건전한 거래를 위하여 아래 사유에 따라
                  페널티가 부과됩니다.&nbsp;
                </p>
                <p>
                  결제정보 오류로 페널티 결제 실패 시,&nbsp;
                  <a href="https://kream.co.kr/agreement">이용약관</a>
                  &nbsp;제24조("서비스수수료")에 따라 별도의 고지없이 재결제를
                  시도합니다.
                </p>
                <p>&nbsp;</p>
                <h2>
                  <strong>판매거부</strong>
                </h2>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>판매 거래 대기 이후, 1시간 이내 판매 거부</td>
                        <td>
                          <h4>5.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>판매 거래 대기 이후, 1시간 이후 판매 거부</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>
                  <strong>발송지연</strong>
                </h2>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>판매 거래 체결 후,&nbsp;</p>
                          <p>48시간(일요일・공휴일 제외) 이내&nbsp;</p>
                          <p>발송 정보 미입력</p>
                        </td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>
                  <strong>미입고</strong>
                </h2>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>발송 정보 입력 후,&nbsp;</p>
                          <p>5일(일요일・공휴일 제외) 이내</p>
                          <p>검수센터에 미도착</p>
                        </td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>가송장 등 허위 정보 입력</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>거래 체결 전 상품 발송</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>
                  * 발송 정보 입력 시 지원하지 않는 배송 수단의 경우, 운송장
                  추적 불가, 도착 상품의 식별 곤란 등의 사유로 인해 입고가
                  불가하며 이에 해당하는 상품은 반송 처리됩니다.
                </p>
                <p>
                  * 반송 처리 등 정상적이지 않은 배송 방법을 통해 상품을
                  검수센터로 전달할 경우 상품 입고가 불가능합니다.
                </p>
                <p>
                  * 단, 부득이한 경우 발송 정보 입력 기한 이내에 고객센터를 통한
                  협의 및 KREAM의 사전 승인 하에 상품 동일성 식별이 가능하도록
                  조치한 경우에 한하여 상품 입고가 가능한 점 참고
                  부탁드립니다.&nbsp;
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>검수기준 악용</h2>
                <p>
                  아래 검수기준 위반시에는 페널티를 부과합니다. (패키지와 상품
                  공통 적용)
                </p>
                <p>&nbsp;</p>
                <h3>신발/의류/패션잡화</h3>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>상품 불일치</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>사이즈 불일치</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>기본 구성품 누락</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <h3>테크/라이프</h3>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>정보 불일치</td>
                        <td>
                          <h4>10.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>가품, 손상/오염/사용감</h2>
                <p>
                  일반 거래는 판매가 기준이며, 보관 판매는 판매 상품 모든
                  사이즈의 전월 평균 거래가 기준입니다.&nbsp;
                </p>
                <figure class="tableq">
                  <table>
                    <tbody>
                      <tr>
                        <td>가품</td>
                        <td>
                          <h4>15.0%</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>손상/오염/사용감</td>
                        <td>
                          <h4>15.0%</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>페널티 감면 기준</h2>
                <p>&nbsp;</p>
                <p>
                  KREAM은 이용약관 제 24조 ("서비스 수수료") 다. 항에 따라
                  회원이 아래와 같은 특별한 사유에 해당하는 것으로 객관적으로
                  소명할 경우 기 부과된 페널티를 감경 또는 면제할 수 있습니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  KREAM은 해당 사안의 사실관계, 이전 사용이력, 거래행태 등을
                  종합적으로 분석하여 아래 사유에 해당하는지 여부를 최종
                  판단합니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  페널티 감경 또는 면제는 해당 회원의 부주의에도 불구하고
                  KREAM이 회원의 특별한 사정을 고려하여 예외적으로 실시하는
                  조치이므로 하기 특별 사유의 존재 여부는 해당 "회원"이
                  객관적으로 증명해야 할 책임이 있습니다.
                </p>
                <p>&nbsp;</p>
                <ul>
                  <li>서비스 사용 미숙에 따른 조작실수임이 명백한 경우</li>
                  <li>
                    명백히 택배사의 책임 있는 사유로 인하여 페널티 발생한 경우
                  </li>
                  <li>
                    고의성이 없이 가품 및 손상/오염/사용감 있는 제품을 판매한
                    것이 명백한 경우 (단, 페널티 감경이 이루어지더라도 가품 및
                    손상/오염/사용감 있는 제품 판매로 인한 이용정지 등의 절차는
                    진행될 수 있음)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleAccordion(3)}
          >
            이용정책 - 가품 ・ 손상/오염/사용감 있는 상품 판매에 대한 제재
            {openAccordion === 3 ? <SlArrowUp /> : <SlArrowDown />}
          </button>
          <div
            className="accordion-content"
            style={{ display: openAccordion === 3 ? "block" : "none" }}
          >
            <div className="content-block">
              <div className="contentq">
                <p>&nbsp;</p>
                <p>
                  가품 ・ 손상/오염/사용감 있는 상품 판매를 시도하여 적발된 경우
                  판매금액의 15.0% 페널티가 부과되며 판매자는 적발 즉시 이용정지
                  처리됩니다.
                  <br />
                  가품 판매의 경우 상표법 108조에 의거 민사상 손해배상 책임 및
                  형사상 7년 이하의 징역 또는 1억원 이하의 벌금 처벌을 받을 수
                  있습니다. 또한{" "}
                  <a href="https://kream.co.kr/agreement">이용약관</a> 제
                  27조(검수 등) 6항에 따라 가품 판매자는 상표법 등 관계 법령
                  위반 혐의로 수사기관에 신고될 수 있으며, 가품 판정 상품은
                  수사기관 제출, 압수 등으로 인하여 판매자에게 반환되지 않을 수
                  있습니다.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h2>소명자료 접수</h2>
                <p>
                  KREAM에서는 가품, 손상/오염/사용감 있는 상품으로부터 구매자를
                  안전하게 보호하고자 해당 제재를 실행하며, 이에 따라 선의의
                  피해자가 발생하지 않도록 소명서 및 관련 자료를 고객센터로
                  전달해주시면 내부 검토를 진행하고 있습니다.
                </p>
                <p>&nbsp;</p>
                <h3>
                  <strong>국내/해외 온라인결제 구매</strong>
                </h3>
                <p>① 상세 주문 내역</p>
                <p>•&nbsp; 상품명, 구매가, 결제일, 배송처 등 포함</p>
                <p>② 신용카드 명세서 또는 계좌이체 확인서</p>
                <p>•&nbsp; 신용카드 명세서: 결제일시, 가맹점 포함</p>
                <p>
                  •&nbsp; 계좌이체 확인서: 이체일시, 수신 계좌번호, 수신
                  계좌주명 포함
                </p>
                <p>&nbsp;</p>
                <h3>
                  <strong>직거래/지인거래</strong>
                </h3>
                <p>
                  ①&nbsp;<span>판매자와의 대화 내용 전문</span>
                </p>
                <p>
                  •&nbsp; 거래일시, 대화 시작 일시, 계좌번호, 발송한 운송장번호
                  등 포함
                </p>
                <p>
                  ②&nbsp;<span>계좌이체내역서(이체확인증) 또는 송금확인서</span>
                </p>
                <p>•&nbsp; 이체일시, 예금주명, 계좌번호, 금액 등 포함</p>
                <p>&nbsp;</p>
                <h3>오프라인 구매</h3>
                <p>① 구매영수증</p>
                <p>• &nbsp;구매처, 구매일시, 금액 포함</p>
                <p>② 카드결제전표, 또는 계좌이체확인서</p>
                <p>• &nbsp;가맹점명, 계좌번호, 결제/이체 일시, 금액 포함</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <button
            className="accordion-button"
            onClick={() => toggleAccordion(4)}
          >
            이용정책 - 커뮤니티 가이드라인
            {openAccordion === 4 ? <SlArrowUp /> : <SlArrowDown />}
          </button>
          <div
            className="accordion-content"
            style={{ display: openAccordion === 4 ? "block" : "none" }}
          >
            <div className="content-block">
              <div className="contentq">
                <p>
                  <br />
                  <br />
                  KREAM 내 STYLE 서비스는 회원들의 일상 속 스니커즈, 의류 등의
                  패션 스타일을 공유하여 서로 영감을 얻을 수 있는 공간입니다.
                  모두가 건강하고 즐겁게 사용할 수 있는 공간을 만들기 위해 함께
                  노력해주세요.
                </p>
                <p>&nbsp;</p>
                <p>
                  커뮤니티 가이드라인은 서비스를 안전하게 유지하고 보호하기 위해
                  만들어진 정책입니다. KREAM을 사용하면 이 가이드라인과
                  이용약관에 동의하게 됩니다. 이 가이드라인을 위반하는 경우
                  콘텐츠가 삭제되거나, 계정이 비활성화되는 등의 제재를 받을 수
                  있습니다.
                </p>
                <p>
                  <br />
                  &nbsp;
                </p>
                <h2>
                  <strong>커뮤니티 활동</strong>
                </h2>
                <p>&nbsp;</p>
                <ul>
                  <li>
                    커뮤니티 활동이란 회원이 KREAM의 STYLE 서비스에 사진 및
                    의견을 포함한 콘텐츠를 게시하는 활동입니다.
                  </li>
                  <li>
                    회원의 커뮤니티 활동은 다른 서비스 이용자가 콘텐츠를
                    다운로드하여 열람하거나 개인의 가정에서 비영리적인 목적으로
                    사적 이용하는 것을 허락한 것으로 간주합니다.
                  </li>
                  <li>
                    회원은 KREAM의 이용약관에 어긋나지 않는 콘텐츠만을 게시할 수
                    있습니다.
                  </li>
                  <li>
                    회원이 서비스 내에 게시하는 게시물은 서비스 및 관련 프로모션
                    등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는
                    일부 수정 또는 편집되어 게시될 수 있습니다.
                  </li>
                </ul>
                <p>
                  <br />
                  &nbsp;
                </p>
                <h2>
                  <strong>콘텐츠의 내용과 형식</strong>
                </h2>
                <p>&nbsp;</p>
                <p>
                  <strong>
                    직접 촬영했거나 공유할 권한이 있는 콘텐츠만 공유하세요.
                    &nbsp;
                  </strong>
                </p>
                <p>
                  STYLE에 올리는 콘텐츠의 소유권은 항상 회원님에게 있습니다.
                  원본 콘텐츠를 게시해야 하며 복사하거나 인터넷에서 수집하여
                  게시할 권한이 없는 콘텐츠는 올릴 수 없습니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>
                    모두가 즐길 수 있는 콘텐츠를 게시하세요. &nbsp;
                  </strong>
                </p>
                <p>
                  STYLE에서 권장하는 내용과 형식에 잘 맞는 콘텐츠는 KREAM
                  운영팀에 의해 수시로 선별되며, 홈의 컬렉션을 통해 노출하게
                  됩니다. 콘텐츠의 내용은 패션 코디 등 일상 속에 바로 적용할 수
                  있거나 영감을 줄 수 있는 내용을 권장합니다.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>
                    부적절한 콘텐츠는 조치 대상이 될 수 있어요. &nbsp;
                  </strong>
                </p>
                <p>
                  본 커뮤니티 가이드라인에 어긋나는 콘텐츠는 다른 회원들에 의해
                  신고될 수 있으며 별도의 경고 조치 없이 수시로 콘텐츠 운영팀에
                  의해 임시조치될 수 있습니다.
                </p>
                <p>&nbsp;</p>
                <figure class="table">
                  <table>
                    <tbody>
                      <tr>
                        <td>• 판매 또는 직거래를 유도함</td>
                        <td>
                          • 저작권 위반, 개인정보 노출 등 권리 침해가 우려됨
                        </td>
                      </tr>
                      <tr>
                        <td>• 비방, 명예 훼손 또는 수치심을 유발함</td>
                        <td>• 정치적, 종교적 분쟁을 야기함</td>
                      </tr>
                      <tr>
                        <td>
                          • 혐오적, 외설적, 범죄적 행위 등 공공질서 및
                          미풍양속에 위반됨
                        </td>
                        <td>• 스팸 또는 지나치게 상업적인 내용</td>
                      </tr>
                      <tr>
                        <td>• 서비스에 대한 허위 및 오해의 소지가 있는 내용</td>
                        <td>
                          • 개인정보 도용, 사칭 또는 타인의 정보를 무단 위변조한
                          경우
                        </td>
                      </tr>
                      <tr>
                        <td>
                          • 기타 관계 법령 및 회사의 지침 등에 위반된다고
                          판단되는 경우
                        </td>
                      </tr>
                      <tr>
                        <td>
                          • 해당 커뮤니티의 취지와 무관한 내용을 게시한 경우
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
                <p>
                  <br />
                  &nbsp;
                </p>
                <h2>
                  <strong>콘텐츠의 저작권</strong>
                </h2>
                <p>&nbsp;</p>
                <ul>
                  <li>
                    회원이 서비스 내에 게시한 콘텐츠의 저작권은 해당 게시물의
                    저작자에게 귀속됩니다.
                  </li>
                  <li>
                    회원이 게시한 콘텐츠는 저작권법에 의하여 보호를 받으며,
                    KREAM이 작성한 저작물에 대한 저작권 및 기타 지적재산권은
                    KREAM에 귀속합니다.
                  </li>
                  <li>
                    회원은 게시한 콘텐츠의 저작권 및 기타 산업재산권을 갖고
                    있음을 명확히 합니다. 다만 회원은 본 서비스에 콘텐츠를
                    게시함으로써 KREAM이 서비스 및 사업과 관련하여 해당
                    콘텐츠(및 그 2차적 저작물)의 일부 또는 전부를 전 세계적으로
                    비독점적으로 무상으로 사용할 권리(이용, 공개, 반포, 광고,
                    출판, 복제, 공연, 공중송신, 전시, 배포, 대여, 2차
                    저작물작성)를 허락하며 이를 양도할 수 있음에 동의한 것으로
                    간주합니다. 또한 KREAM에 대해 저작인격권을 행사하지 않을
                    것에 동의한 것으로 간주합니다.
                  </li>
                </ul>
                <p>
                  <br />
                  &nbsp;
                </p>
                <h2>
                  <strong>콘텐츠의 관리 및 임시조치</strong>
                </h2>
                <p>&nbsp;</p>
                <ul>
                  <li>
                    회원의 게시물이 정보통신망법 및 저작권법 등 관련법에
                    위반되는 내용을 포함하는 경우, 관련법이 정한 절차에 따라
                    해당 게시물의 게시중단 및 삭제 등의 임시조치를 요청할 수
                    있으며 KREAM은 관련법에 따라 조치를 하여야 합니다.
                    고객센터로 문의하시기 바랍니다.
                  </li>
                  <li>
                    부적절한 콘텐츠에 대한 판단은
                    (사)한국인터넷자율정책기구(KISO)의 정책규정과 정보통신망법
                    제 44조의 7 및 그 상세 기준이 되는 정보통신에 관한
                    심의규정을 참고합니다.
                  </li>
                  <li>
                    KREAM은 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한
                    사유가 있거나 기타 서비스 운영방침 및 관련법에 따라 해당
                    게시물에 대해 임시조치 등을 취할 수 있습니다
                  </li>
                  <li>
                    KREAM은 콘텐츠와 관련한 문제에 대응하고 게시자와 신고자에게
                    안내를 진행합니다. 단, 불법, 음란, 성인 관련 콘텐츠의 경우
                    안내 없이 조치합니다.
                  </li>
                  <li>
                    그 외에 서비스의 신뢰도를 떨어뜨리는 콘텐츠 활용 및 부적절한
                    활동이 확인되는 경우, 해당 계정의 활동 전체가 제한할 수
                    있습니다.
                  </li>
                  <li>
                    본인의 게시물이 노출 중단된 경우, 권리침해 사실을 반박할 수
                    있는 소명자료를 통해 재게시 요청이 가능합니다.
                  </li>
                </ul>
                <p>
                  <br />
                  &nbsp;
                </p>
                <p>
                  본 커뮤니티 가이드라인과{" "}
                  <a href="https://kream.co.kr/agreement">이용약관</a>을
                  참고하시어 건강한 커뮤니티를 만들어주세요. KREAM의 STYLE이
                  최고의 패션 커뮤니티로 성장할 수 있도록 도와주셔서 감사합니다.
                </p>
                <p>
                  <br />
                  &nbsp;
                </p>
                <p>
                  문의 사항이 있으신 경우 고객센터 또는 1:1문의하기로 문의하시기
                  바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
