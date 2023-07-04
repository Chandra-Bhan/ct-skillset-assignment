import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import style from "../../../style/Card.module.css";

function Card() {
  return (
    <div className={style.card}>
      <img
        className={style.card_img}
        src="https://peakvisor.com/photo/jade-dragon-snow-mountain-scenic-area.jpg"
      />
      <p>Adipisicing unde vel so dolore, consequatur.</p>
      <div className={style.section2_div}>
        <span className={style.section2_img}>
          <BsLink45Deg />
        </span>
        Ipsum Lorem
      </div>
    </div>
  );
}

export default Card;
