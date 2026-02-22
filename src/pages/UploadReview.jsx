import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/contents/AuthContext";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ApplyResultModal from "../components/contents/ApplyResultModal";

const API_BASE = process.env.REACT_APP_API_URL || "";

export default function UploadReview() {
  const { user } = useAuth();
  let { itemKey } = useParams();
  const [previewSrc, setPreviewSrc] = useState("");
  const [img, setImg] = useState(false);
  const [review, setReview] = useState("");
  const fileInputRef = useRef(null);
  const [item, setItem] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/items/${itemKey}`
        );
        setItem(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [itemKey]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setPreviewSrc("");
      setImg(false);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
      setImg(true);
    };
    reader.readAsDataURL(file);
  };

  const deleteImg = () => {
    setPreviewSrc("");
    setImg(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
    // if (!fileInputRef.current.files[0]) {
    //   console.error("No file selected");
    //   return;
    // }

    // const formData = new FormData();
    // formData.append("user_id", user.user_id);
    // formData.append("itemKey", itemKey);
    // formData.append("content", review);
    // formData.append("img", fileInputRef.current.files[0]);

    // const config = {
    //   headers: { "content-type": "multipart/form-data" },
    // };

    // try {
    //   const response = await axios.post(
    //     `${API_BASE}/upload-image`,
    //     formData,
    //     config
    //   );
    //   const result = response.data;
    //   console.log(result);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  useEffect(() => {
    if (showModal) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [showModal]);

  return (
    <Main>
      <div className="uploadReview_container">
        <div className="uploadReview_wrap">
          <h3 className="review_header">STYLE 작성</h3>
          <div className="review_item">
            <img
              src={item.img ? item.img.split(",")[0] : ""}
              alt={item.title}
              className="item_img"
            />
            <div className="item_detail">
              <p className="brand">{item.brand}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>

          <form className="review_form" onSubmit={handleSubmit}>
            {previewSrc ? (
              <img
                src={previewSrc}
                alt="Image preview"
                className="previewImg"
              />
            ) : (
              <div className="previewImg noImg">
                <FontAwesomeIcon icon={faImage} />
                이미지 미리보기
              </div>
            )}
            <div className="upload_box">
              <input
                id="upload_file"
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              {img && (
                <FontAwesomeIcon
                  icon={faX}
                  onClick={deleteImg}
                  className="deleteBtn"
                />
              )}
            </div>

            <textarea
              className="review_content"
              placeholder="게시글 작성"
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <input
              type="submit"
              value="STYLE 등록"
              className={
                previewSrc && review ? "uploadBtn active" : "uploadBtn"
              }
              disabled={previewSrc && review ? false : true}
            />
          </form>
        </div>
      </div>
      {showModal && <ApplyResultModal type="스타일 업로드" />}
    </Main>
  );
}