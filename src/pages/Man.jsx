import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import axios from "axios";

export default function Man() {
  const [data, setData] = useState([]);
  const selectAll = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/users`
    );
    setData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    selectAll();
  }, []);
  return (
    <Main>
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {data.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </Main>
  );
}
