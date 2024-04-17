import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    email: "",
    password: "",
    tel: "",
    dateJoined: new Date().toISOString().slice(0, 19).replace("T", " "),
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input
        type="text"
        name="user_id"
        placeholder="User ID"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tel"
        placeholder="Telephone"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />
      <button type="submit">가입하기</button>
    </form>
  );
}
