import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NewIn() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/newin?offset=${offset}`
      );
      console.log(response);
      setProducts((prevProducts) => [...prevProducts, ...response.data]);
      setOffset((prevOffset) => prevOffset + 5);
      if (offset + 5 >= 15) {
        setShowMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="home_section">
      <div className="section_title">
        <h3>New In</h3>
        <p>신규 판매 상품</p>
      </div>

      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.itemkey}>
              <Link>
                <img src={product.img} alt={product.title} />
                <div>
                  <p>{product.brand}</p>
                  <p>{product.title}</p>
                  <p>
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

      {showMore && <button onClick={fetchProducts}>더보기</button>}
    </div>
  );
}
