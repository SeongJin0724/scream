import React from "react";
import Main from "../components/section/Main";
import { Link } from "react-router-dom";
export default function Company() {
  return (
    <Main>
      <div data-v-5b093f8c="" className="dropdown_head">
        <strong data-v-5b093f8c="" className="sort">
          이벤트
        </strong>
        <div data-v-5b093f8c="" className="title_box">
          <p data-v-5b093f8c="" className="title">
            [안내] SURPRISE DRAW - 비스타 워커힐 코너 스위트룸 &amp; 해링턴 카
            시승권 응모
          </p>
        </div>
      </div>
      <div data-v-0945aee6="" class="contentn">
        <p>
          <span>안녕하세요. KREAM 입니다.</span>
        </p>
        <p>
          <span true="">
            4/17(수) - 4/24(수) 진행된 KREAM DRAW - SURPRISE DRAW - 비스타
            워커힐 코너 스위트룸 &amp; 해링턴 카 시승권 응모 안내 드립니다.
          </span>
        </p>
        <p>&nbsp;</p>
        <ul>
          <li>
            <span>
              당첨 여부는 마이 페이지 &gt; 구매 내역 &gt; 구매 입찰에서 확인
              가능합니다.
            </span>
          </li>
          <li>
            <span>
              당첨자에 한하여 당첨 체결 알림 드리며, 미당첨자에게는 별도의
              연락을 드리지 않습니다.
            </span>
          </li>
          <li>
            <span>
              당첨자에게는 오늘 중으로 상품 수령 시 필요한 서류를 가입된
              이메일로 요청하고 있습니다. 서류를 모두 전달 받은 후에 이벤트
              상품이 발송되는 점 유의 부탁 드립니다.
            </span>
          </li>
        </ul>
        <p>&nbsp;</p>

        <p class="mb-0 text-wrap">
          <strong>
            <span>-&nbsp;</span>
          </strong>
          <strong>비스타 워커힐 스위트룸 숙박권 &amp; 해링턴 카 시승권</strong>
        </p>

        <p>
          <span>
            <strong>&nbsp;&nbsp;</strong>
            <span>
              <span>
                VISTA Walkerhill Corner Suite room &amp; Harrington Car
              </span>
              <br />
            </span>
          </span>
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <span>이름</span>
              </td>
              <td>
                <span>가입 이메일</span>
              </td>
            </tr>

            <tr>
              <td>홍길동</td>
              <td>
                <p>qwerty@naver.com</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <span>
            감사합니다.
            <br />
            <br />
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>
            <strong>유의사항</strong>
          </span>
        </p>
        <p>
          <span>
            *당첨 체결 시 등록한 결제정보로 결제가 진행되지 않으면, 당첨은 즉시
            취소되며 후 순위 당첨자로 변경됩니다.
          </span>
        </p>
        <p>
          <span>
            *제세공과금은 KREAM에서 부담하며, 제세공과금 처리를 위해 가입된
            이메일 주소로 신분증 등 서류를 요청 드립니다.
          </span>
        </p>
        <p>
          <span>
            *이메일로 요청한 서류(신분증/ 개인정보수집이용동의서)가 당첨자 발표
            공지 시점으로부터 72시간 내 제출되지 않을 경우 당첨은 취소되며, 이로
            인한 재추첨은 진행되지 않습니다.&nbsp;
          </span>
        </p>
        <p>
          <span>
            *회원정보가 일치하지 않거나 부당한 방법으로 응모한 고객의 경우, 구매
            취소 및 추후 이벤트 응모 시 불이익을 받을 수 있습니다.
          </span>
        </p>
        <p>
          <span>
            *잘못된 정보를 기입하여 발생된 불이익에 대해서는 당사는 책임이
            없음을 알려드립니다.
          </span>
        </p>
        <p>
          <span>*지급된 이벤트 상품은 교환 및 환불이 불가합니다.</span>
        </p>
        <p>
          <span>
            *이벤트 상품은 출시 연기 및 수급 상황에 따라 배송이 늦어질 수
            있습니다.
          </span>
        </p>
      </div>
      <Link className="noticehome" to={"/notice"}>
        <input type="button" id="notice_button" value="목록보기" />
      </Link>
    </Main>
  );
}
