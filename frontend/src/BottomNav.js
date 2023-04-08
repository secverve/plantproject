import React, { useState } from "react";
import "./BottomNav.css";
// 사용할 아이콘 import
import { FaHandHoldingUsd,  } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";




const BottomNav = () => {
const [activeNav, setActiveNav] = useState(1);
return (
    <footer className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
      <Link to="/trade" className="nav-link" onClick={() => setActiveNav(1)}>
        <FaHandHoldingUsd className="trade" size="45"
        className={activeNav === 1 ? "nav-item active" : "nav-item"}/>
        </Link>
      </div>
      <div>
      <Link to="/chat" className="nav-link" onClick={() => setActiveNav(2)}>
        <BsChatDots className="chat" size="45"
        className={activeNav === 2 ? "nav-item active" : "nav-item"}/>
        </Link>
      </div>
      <div>
      <Link to="/plant" className="nav-link" onClick={() => setActiveNav(3)}>
        <RiPlantFill classname="plant" size="45"
        className={activeNav === 3 ? "nav-item active" : "nav-item"}/>
        </Link>
      </div>
      <div>
      <Link to="/category" className="nav-link" onClick={() => setActiveNav(4)}>
        <BiCategoryAlt classname="category" size="45"
        className={activeNav === 4 ? "nav-item active" : "nav-item"}/>
        </Link>
      </div>
      <div>
      <Link to="/recommend" className="nav-link" onClick={() => setActiveNav(5)}>
        <MdFavorite classname="recommend" size="45"
        className={activeNav === 5 ? "nav-item active" : "nav-item"}/>
        </Link>
      </div>
    </footer>
  );
};

export default BottomNav;