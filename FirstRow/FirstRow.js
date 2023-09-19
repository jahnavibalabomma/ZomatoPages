import React from "react";
import "./FirstRow.css";
import { ImLink } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
function FirstRow() {
  return (
    <div>
      <header>
        <ul type="none" className="home">
          <li>Home / </li>
          <li>Hyderabad / </li>
          <li>Collections / </li>
          <li>19 Best Pubs and Bars</li>
        </ul>
      </header>
      <div className="barhomeimg">
        <div className="bgBarimage">
          <h1>19 Best Pubs and Bars</h1>
          <p>
            Turn boring days into adrenaline-pumping drinking parties at the
            best pubs and bars the city has to offer.
          </p>
          <p>19 Places</p>
        </div>
        <div className="topbgBar">
          <h5>
            <FaPlus color="white"></FaPlus>Save Collection
          </h5>
          <div className="linkimg">
            <ImLink color="white"></ImLink>
          </div>
        </div>
        <div>
          <img
            src="https://b.zmtcdn.com/data/collections/776e04ca93a3abf7c66c40e5a18a7b04_1674845424.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
