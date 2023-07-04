import React, { useState } from "react";
import style from "../../style/Carousel.module.css";
import Card from "./card/Card";

function Carousel() {
  const [card, setCard] = useState(new Array(8).fill(0));

  return (
    <div>
      <div className={style.cards_main_div}>
        <div className={style.cards_section_headings}>
          <div className={style.cards_header_heading}>
            <h3>Officia ut</h3>
          </div>
          <div className={style.cards_header_link}>
            <a href="#">Ipsum Lorem</a>
          </div>
        </div>
        <div className={style.cards_container}>
          {card.map((cd) => (
            <div>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
