import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <i className="header-searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">안녕하세요! </span>
          <Link to="/login" className="homelogin">
            {" "}
            <span className="header-optionLineTwo">로그인하기</span>
          </Link>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">돌아가기 </span>
          <span className="header-optionLineTwo">주문내역</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">반가워요 </span>
          <span className="header-optionLineTwo">구독과좋아요</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <i>
              <FontAwesomeIcon icon={faCartShopping} />
            </i>
            <span className="header-optionLineTwo-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
