import React, { useState, useEffect } from "react";

function App() {
  const [address, setAddress] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://ipapi.co/jsonp");
        const data = await response.json();

       setAddress(response);

      } catch (error) {
        console.error("Lỗi khi lấy địa chỉ:", error);
        setAddress("Không thể lấy địa chỉ");
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Địa chỉ hiện tại của bạn:</h1>
    </div>
  );
}

export default App;
