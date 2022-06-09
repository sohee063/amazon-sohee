import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
      />
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <i className="header-searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">안녕하세요! </span>
          <span className="header-optionLineTwo">로그인하기</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">돌아가기 </span>
          <span className="header-optionLineTwo">주문내역</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">반가워요 </span>
          <span className="header-optionLineTwo">구독과좋아요</span>
        </div>
        <div className="header-optionBasket">
          <i>
            <FontAwesomeIcon icon={faCartShopping} />
          </i>
          <span className="header-optionLineTwo-basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
