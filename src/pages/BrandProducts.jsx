import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Main from "../components/section/Main";
import axios from "axios";

const BrandProductsPage = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/brands/${brand}`
        );
        setProducts(response.data[0]);
      } catch (error) {
        console.error("제품을 로드하는 중 오류가 발생했습니다.", error);
      }
    };
    fetchProducts();
  }, [brand]);

  return (
    <Main>
      <div className="brands_wrap">
        <div className="brand_header">
          <img src="" alt="" className="brand_header_img" />
          <h2 className="brand_header_title">{brand}</h2>
        </div>

        <ul className="brand_result_lists">
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.itemKey}>
                <Link to={`/items/t${product.itemKey}`}>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="brand_item_img"
                  />
                  <div className="brand_item_desc">
                    <p className="brandName">{product.brand}</p>
                    <h3 className="productName">{product.title}</h3>
                    <p className="price">{product.launchPrice}원</p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p>해당 브랜드의 제품이 없습니다.</p>
          )}
        </ul>
      </div>
    </Main>
  );
};

export default BrandProductsPage;
