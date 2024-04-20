function checkAll(source) {
  const checkboxes = document.querySelectorAll(".my-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = source.checked;
  });
  validateAllChecked();
}

document.querySelectorAll(".my-checkbox").forEach(function (checkbox) {
  checkbox.onchange = function () {
    validateAllChecked();
  };
});

function validateAllChecked() {
  const allCheckbox = document.getElementById("selectAll");
  const checkboxes = document.querySelectorAll(".my-checkbox");
  const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
  const allUnchecked = [...checkboxes].every((checkbox) => !checkbox.checked);

  if (allChecked) {
    allCheckbox.checked = true;
  } else if (allUnchecked) {
    allCheckbox.checked = false;
  } else {
    allCheckbox.checked = false;
  }
}

function submitForm() {
  const checkboxes = document.querySelectorAll(".my-checkbox[required]");
  const allValid = [...checkboxes].every((checkbox) => checkbox.checked);

  if (!allValid) {
    alert("모든 필수 항목에 동의해야 합니다.");
    return false;
  }

  alert("제출되었습니다.");
  // 여기에 제출 로직을 추가하세요.
}

export { checkAll, validateAllChecked, submitForm };
