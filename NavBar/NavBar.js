import React from "react";
import "./NavBar.css";
import { GrLocation } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
function NavBar() {
  return (
    <div>
      <nav className="zomnav">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
        <div className="box">
          <GrLocation size="50px"></GrLocation>
          <input type="text" placeholder="Jubilee Hills,Hyderabad"></input>

          <LuSearch size="50px"></LuSearch>
          <input
            type="text"
            placeholder="Search for restaurant, cuisini or a dish"
          ></input>
        </div>
        <div>Log in</div>
        <div>Sign up</div>
      </nav>
    </div>
  );
}

export default NavBar;
