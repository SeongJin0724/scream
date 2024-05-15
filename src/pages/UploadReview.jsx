import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Main from "../components/section/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function UploadReview() {
  let { itemKey } = useParams();
  const [previewSrc, setPreviewSrc] = useState("");
  const [img, setImg] = useState(false);
  const [review, setReview] = useState("");
  const fileInputRef = useRef(null);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/items/${itemKey}`
        );
        setItem(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [itemKey]);

  console.log(item);

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
    const formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("image", fileInputRef.current.files[0]);
    formData.append("review", review);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload-image`,
        formData,
        config
      );
      const result = response.data;
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Main>
      <div className="uploadReview_container">
        <div className="uploadReview_wrap">
          <h3 className="review_header">STYLE 작성</h3>
          <div className="review_item">
            <img src={item.img} alt={item.title} className="item_img" />
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
    </Main>
  );
}
