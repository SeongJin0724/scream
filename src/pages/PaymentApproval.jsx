import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Main from "../components/section/Main";

export default function PaymentApproval() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dealKey = queryParams.get("dealKey");
  const pg_token = queryParams.get("pg_token");

  useEffect(() => {
    if (dealKey && pg_token) {
      console.log(typeof dealKey);
      console.log(typeof pg_token);
      console.log(dealKey, pg_token);

      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/payment/approval`,
            {
              params: {
                dealKey,
                pg_token,
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

  return <Main>PaymentApproval</Main>;
}
