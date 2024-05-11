import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function PaymentApproval() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dealKey = queryParams.get("dealKey");
  const pg_token = queryParams.get("pg_token");

  useEffect(() => {
    if (dealKey && pg_token) {
      console.log(dealKey, pg_token);
      const fetchData = async () => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/payment/approval`,
            {
              dealKey,
              pg_token,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, [dealKey, pg_token]);

  return <div>PaymentApproval</div>;
}
