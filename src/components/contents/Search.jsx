import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";

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
      <form className="search-pop_form">
        <input
          className="search_input"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <IoMdCloseCircle onClick={onReset} className="resetIcon" />
      </form>
      <AiOutlineCloseSquare onClick={onClose} />
    </div>
  );
}
