import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import image from "./amazon_PNG25.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import { LoginContext } from "../context/ContextProvider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import RightHeader from "./RightHeader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Navbar = () => {
  const [text, setText] = useState("");
  // console.log(text);
  const [liOpen, setLiOpen] = useState(true);
  const { products } = useSelector((state) => state.getProductsData);

  const { account, setAccount } = useContext(LoginContext);
  const history = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(account)
  const [dropen, setDropen] = useState(false);

  const getdetailvaliduser = async () => {
    const res = await Axios.get("/validuser", { withCredentials: true });
    if (res.status !== 201) {
      console.log("Error");
      return;
    } else {
      // console.log("valid user");
      setAccount(res.data);
    }
  };
  function closeDrover() {
    setDropen(false);
  }

  const logOutUser = async () => {
    const res2 = await Axios.get("/logout", { withCredentials: true });
    if (res2.status !== 201) {
      console.log("Error");
      return;
    } else {
      // console.log("valid user");
      toast.success("Logged Out Successfully", {
        position: "top-center",
      });
      setAccount(false);
      history("/");
    }
  };

  function getText(items) {
    setText(items);
    setLiOpen(false);
  }
  useEffect(() => {
    getdetailvaliduser();
  }, []);
  return (
    <header>
      <nav>
        <div className="left">
          <IconButton
            className="hamburgur"
            onClick={() => setDropen(!dropen)}
            onClose={closeDrover}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Drawer
            style={{ width: "100%", marginLeft: "-20px" }}
            open={dropen}
            onClose={closeDrover}
          >
            <RightHeader logClose={closeDrover} logout ={logOutUser}/>
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src={image} alt="logo" />{" "}
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              onChange={(e) => getText(e.target.value)}
              placeholder="Search your products"
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>

            {/* Search filter */}
            {text && (
              <List className="extrasearch" hidden={liOpen}>
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem>
                      <NavLink
                        to={`/getproductsone/${product.id}`}
                        onClick={() => setLiOpen(true)}
                      >
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login"> Signin</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}
            <p>Cart</p>
          </div>
          {account ? (
            <Avatar
              className="avtar2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              className="avtar2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {account ? (
              <MenuItem onClick={handleClose}>
                <Logout
                  onClick={logOutUser}
                  style={{ fontSize: 16, marginRight: "3px" }}
                />
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
          <ToastContainer />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
