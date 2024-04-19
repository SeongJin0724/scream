function testFunction() {
  const selectAllCheckbox = document.getElementById("selectAll");

  // 개별 체크박스들을 가져옵니다.
  const itemCheckboxes = document.querySelectorAll(".my-checkbox");

  // "전체 선택" 체크박스의 상태가 변경될 때마다 실행될 이벤트 리스너를 추가합니다.
  selectAllCheckbox.addEventListener("change", function () {
    // 개별 체크박스들의 상태를 "전체 선택" 체크박스와 동일하게 설정합니다.
    itemCheckboxes.forEach(function (checkbox) {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // 개별 체크박스들의 상태가 변경될 때마다 실행될 이벤트 리스너를 추가합니다.
  itemCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // 모든 체크박스가 체크되어 있는지 확인합니다.
      const allChecked = Array.from(itemCheckboxes).every(function (item) {
        return item.checked;
      });

      // 모든 체크박스가 체크되어 있지 않다면, "전체 선택" 체크박스도 체크 해제합니다.
      // 그렇지 않다면, "전체 선택" 체크박스를 체크합니다.
      selectAllCheckbox.checked = allChecked;
    });
  });
}

export { testFunction };
