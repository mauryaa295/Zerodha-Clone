import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  
    const [allOrders, setAllOrders] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://zerodha-clone-3oev.onrender.com/allOrders")
        .then((res) => {
          setAllOrders(res.data);
        })
        .catch((e) => {
          console.log("fetching problem in Holdings Details");
        });
    }, []);

    
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
