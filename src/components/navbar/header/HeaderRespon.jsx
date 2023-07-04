import React from "react";
import HeaderOptionRes from "../header_options/HeaderOptionRes";
import style from "../../../style/HeaderRespon.module.css";

function HeaderRespon({ isVisibleResOption }) {
  return (
    <div
      className={style.header_res_main_div}
      style={{ display: isVisibleResOption }}
    >
      <HeaderOptionRes link="01. History" />
      <HeaderOptionRes link="02. Team" />
    </div>
  );
}

export default HeaderRespon;
