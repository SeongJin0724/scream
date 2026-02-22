import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "";

const ItemDetailContext = createContext();

const ItemKeyProvider = ({ children }) => {
  const { itemKey } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/items/${itemKey}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("상품 정보를 불러오는데 실패했습니다.", error.message);
      }
    };
    fetchItemDetail();
  }, [itemKey]);

  return (
    <ItemDetailContext.Provider value={{ itemKey, item }}>
      {children}
    </ItemDetailContext.Provider>
  );
};

export { ItemKeyProvider, ItemDetailContext };