import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NewIn() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/newin?offset=${offset}`
      );
      console.log(response);
      const newProducts = response.data[0];
      console.log(newProducts);
      setProducts((prevProducts) => {
        const newUniqueProducts = newProducts.filter(
          (np) => !prevProducts.some((pp) => pp.itemKey === np.itemKey)
        );
        return [...prevProducts, ...newUniqueProducts];
      });
      if (offset + 5 >= 15) {
        setShowMore(false);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [offset]);

  return (
    <div className="home_section">
      <div className="section_title">
        <h3>New In</h3>
        <p>신규 판매 상품</p>
      </div>
      <ul className="newIn_lists_wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.itemKey} className="newIn_item">
              <Link>
                <img
                  src={product.img}
                  alt={product.title}
                  className="newIn_item_img"
                />
                <div className="newIn_item_desc">
                  <p className="brandName">{product.brand}</p>
                  <p className="productName">{product.title}</p>
                  <p className="price">
                    {new Intl.NumberFormat("ko-KR").format(product.launchPrice)}
                    원
                  </p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>nono</p>
        )}
      </ul>

      {showMore && (
        <div className="moreBtn_wrap">
          <button
            className="moreBtn"
            onClick={() => setOffset((prevOffset) => prevOffset + 5)}
          >
            더보기
          </button>
        </div>
      )}
    </div>
  );
}
