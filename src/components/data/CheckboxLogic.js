import { useState, useEffect } from "react";

export const useCheckboxLogic = (initialState = false) => {
  const [isAllChecked, setAllChecked] = useState(initialState);
  const [isTermsChecked, setTermsChecked] = useState(initialState);
  const [isPrivacyChecked, setPrivacyChecked] = useState(initialState);
  const [isAChecked, setAChecked] = useState(initialState);

  const handleAllCheck = (isChecked) => {
    setAllChecked(isChecked);
    setTermsChecked(isChecked);
    setPrivacyChecked(isChecked);
    setAChecked(isChecked);
  };

  const handleTermsCheck = (isChecked) => {
    setTermsChecked(isChecked);
  };

  const handlePrivacyCheck = (isChecked) => {
    setPrivacyChecked(isChecked);
  };

  const handleACheck = (isChecked) => {
    setAChecked(isChecked);
  };

  useEffect(() => {
    if (isTermsChecked && isPrivacyChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [isTermsChecked, isPrivacyChecked, isAChecked]);

  return {
    isAllChecked,
    isTermsChecked,
    isPrivacyChecked,
    isAChecked,
    handleAllCheck,
    handleTermsCheck,
    handlePrivacyCheck,
    handleACheck,
  };
};
