import React, { useEffect, useState } from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import SubTotal from "./SubTotal";
import Right from "./Right";
import Axios from "axios";
const Buynow = () => {
  const [cartData, setCartData] = useState("");
  console.log(cartData);
  const getDataBuy = async () => {
    const res = await Axios.get("/cartdetails");
    if (res.status !== 201) {
      console.log("Error");
    } else {
      setCartData(res.data.carts);
    }
  };
  useEffect(() => {
    getDataBuy();
  }, []);
  return (
    <>
      {cartData && cartData.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="left_buy_price">Price</span>
              <Divider />
              {cartData.map((e, k) => {
                return (
                  <div key={k}>
                    <div className="item_containert">
                      <img src={e.url} alt="product_image" />
                      <div className="item_details">
                        <h3>{e.title.longTitle}</h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className="diffrentprice">$4049.00</h3>
                        <p className="unusuall">Usually Dispatched in 8 Days</p>
                        <p>Eligible for free shoping</p>
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        />
                        <Option deletedData={e.id} get={getDataBuy}/>
                      </div>
                      <h3 className="item_price">${e.price.cost}.00</h3>
                    </div>
                    <Divider />
                  </div>
                );
              })}

              <SubTotal items={cartData} />
            </div>
            <Right items={cartData}/>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Buynow;
