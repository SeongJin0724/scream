import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Search(props) {
  const [content, setContent] = useState("");

  const onReset = () => {
    setContent("");
  };

  const onClose = () => {
    props.onClose();
  };

  return (
    <div className="search-pop">
      <form className="search-form">
        <input
          className="search_input"
          type="text"
          value={content}
          placeholder="상품 검색"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        {content && <IoMdCloseCircle onClick={onReset} className="resetIcon" />}
      </form>

      <IoClose onClick={onClose} className="closeIcon" />
    </div>
  );
}
