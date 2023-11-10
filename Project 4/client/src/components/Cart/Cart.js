import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import CircularProgress from "@mui/material/CircularProgress";

function Cart() {
  const { id } = useParams("");
  // console.log(id);
  const history = useNavigate("");

  const { account, setAccount } = useContext(LoginContext);

  const [inData, setInData] = useState("");
  console.log(inData);
  console.log(inData.title);
  const getData = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status !== 201) {
      console.log("No data available");
    } else {
      console.log("getdata");
      // console.log(data);
      setInData(data);
    }
  };

  useEffect(() => {
    setTimeout(getData, 1000);
  }, [id]);

  //add to cart function
  const addToCart = async (id) => {
    const checkRes = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inData,
      }),
      credentials: "include",
    });

    const data1 = await checkRes.json();
    console.log(data1);
    if (checkRes.status === 401 || !data1) {
      console.log("User invalid");
      alert("User invalid");
    } else {
      // alert("Data added in your car")
      setAccount(data1);
      history("/buynow");
    }
  };
  return (
    <div className="cart_section">
      {inData && Object.keys(inData).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inData.url} alt="cart_img" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addToCart(inData.id)}
              >
                Add to CArt
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{inData.title.shortTitle}</h3>
            <h4>{inData.title.longTitle}</h4>
            <Divider />
            <p className="mrp">M.R.P. : {inData.price.mrp}</p>
            <p>
              Deal of the day:{" "}
              <span style={{ color: "#B12704" }}>
                <CurrencyRupeeIcon />
                {inData.price.cost}
              </span>{" "}
            </p>
            <p>
              You save:{" "}
              <span style={{ color: "#B12704" }}>
                <CurrencyRupeeIcon />
                {inData.price.mrp - inData.price.cost} ({inData.price.discount})
              </span>{" "}
            </p>

            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{inData.discount}</span>
              </h5>
              <h4>
                Free Delivery :{" "}
                <span style={{ color: "#111", fontWeight: 600 }}>
                  Oct 8 - 21
                </span>{" "}
                Details
              </h4>
              <p>
                Fastest Delivery :{" "}
                <span style={{ color: "#111", fontWeight: 600 }}>
                  Tomorrow 11 AM
                </span>
              </p>
            </div>
            <p className="description">
              About the team:
              <span
                style={{
                  color: "#565959",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                }}
              >
                {inData.description}
              </span>
            </p>
          </div>
        </div>
      )}

      {!inData ? (
        <div className="circle">
          <CircularProgress />
          <h2>Loading</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
