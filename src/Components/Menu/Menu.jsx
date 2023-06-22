import { useState } from "react";
import style from "./Menu.module.scss";

import React from "react";
import Popup from "reactjs-popup";
import Hello from "./Hello";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./style.css";
import Item from "./Item";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100px",
  height: "100px",
  marginTop: "50px",
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none",
};

const MenuGen = () => {
  const [popup, setPopup] = useState(false);
  return (
    <menu>
      <div>
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          // contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerIcon open={open} />}>
          {(close) => <Item close={close} />}
        </Popup>
      </div>
    </menu>
  );
};
export default MenuGen;
{
  /* <ul>
        <li>Компанія</li>
        <li>Продукція</li>
        <li>Статті</li>
        <li>Рішення</li>
        <li>Контакти</li>
      </ul> */
}
