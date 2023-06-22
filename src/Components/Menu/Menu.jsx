import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import "./style.css";
import Item from "./Item";
import style from "./Menu.module.scss";

const Menu = () => {
  return (
    <menu>
      <div className={style.genMenu}>
        <ul>
          <li>Компанія</li>
          <li>Продукція</li>
          <li>Статті</li>
          <li>Рішення</li>
          <li>Контакти</li>
        </ul>
      </div>
      <div className={style.gamburgerMenu}>
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerIcon open={open} />}>
          {(close) => <Item close={close} />}
        </Popup>
      </div>
    </menu>
  );
};
export default Menu;
