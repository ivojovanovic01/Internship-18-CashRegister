import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
        <Link to="products">
            products
        </Link>
        <Link to="receipts">
            receipts
        </Link>
    </div>
  );
};

export default Navigation;
