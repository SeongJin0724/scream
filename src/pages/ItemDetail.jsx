import React, { useContext } from "react";
import { ItemDetailContext } from "../components/contents/ItemDetailContext"; // 경로는 실제 프로젝트 구조에 맞게 조정해야 합니다.
import Main from "../components/section/Main";

export default function ItemDetail() {
  const { item, itemKey } = useContext(ItemDetailContext);

  return (
    <Main>
      {item && item.length > 0 ? (
        <div key={itemKey}>
          <h2>{item[0].title}</h2>
          <div>{item[0].brand}</div>
        </div>
      ) : (
        <div>로딩 중...</div>
      )}
    </Main>
  );
}
