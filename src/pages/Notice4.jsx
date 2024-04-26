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
            [안내] DRAW - 아모프레 X 벌스데이수트 응모
          </p>
        </div>
      </div>
      <div data-v-0945aee6="" class="contentn">
        <p>안녕하세요. KREAM 입니다.</p>
        <p>
          4/22(월) - 4/24(수) 진행된 DRAW - 아모프레 X 벌스데이수트 DBSG
          스타디움 자켓 KREAM 단독 드로우 응모 안내 드립니다.
        </p>
        <p>&nbsp;</p>
        <ul>
          <li>
            당첨 여부는 마이 페이지 &gt; 구매 내역 &gt; 구매 입찰에서 확인
            가능합니다.&nbsp;
          </li>
          <li>
            당첨자에 한하여 개별 메시지(앱 알림 및 알림톡) 드리며,
            미당첨자에게는 별도의 연락을 드리지 않습니다.
          </li>
        </ul>
        <p data-v-e50e2e68="">&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>DBSG Satin Stadium Jacket</strong>
        </p>
        <p>&nbsp;</p>
        <figure class="table"></figure>
        <p>감사합니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>
          <strong>유의사항</strong>
        </p>
        <p>
          ※&nbsp;
          <strong>
            추첨(드로우) 방식 특성 상 단순 변심으로 인한 제품 교환은 불가합니다.
          </strong>
        </p>
        <p>
          ※ 당첨 체결 시 등록한 결제정보로 결제가 진행되지 않으면 당첨은 즉시
          취소되며, 후 순위 당첨자로 변경될 수 있습니다.
        </p>
        <p>
          ※ 당첨 여부는 MY페이지 &gt; 구매내역 &gt; 구매 입찰을 통해 확인
          가능합니다.
        </p>
        <p>
          ※ 당첨자에 한하여 개별 메시지(앱 알림 및 알림톡)를 발송 드리며,
          미당첨자에게는 별도의 연락을 드리지 않습니다.
        </p>
        <p>
          ※ 응모 시 등록한 결제 정보로 결제가 진행되지 않으면 당첨이 즉시
          취소되며, 후 순위 당첨자로 변경될 수 있습니다.
        </p>
        <p>
          ※ 3% 구매적립 포인트는 구매 확정 후 자동으로 적립되며, 적립 후 30일
          이내 사용 가능합니다.
        </p>
        <p>
          ※ 부당한 방법으로 응모한 고객의 경우 구매 취소 및 추후 이벤트 응모 시
          불이익을 받을 수도 있습니다.
        </p>
        <p>
          ※ 당첨 후 구매 취소 시 이후 아떼 바네사브루노 응모에 불이익을 받을 수
          있습니다.
        </p>
      </div>
      <Link className="noticehome" to={"/notice"}>
        <input type="button" id="notice_button" value="목록보기" />
      </Link>
    </Main>
  );
}
