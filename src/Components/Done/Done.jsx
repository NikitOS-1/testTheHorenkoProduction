import style from "./Done.module.scss";
import done from "../../assets/done.png";
import { useState } from "react";

const Done = ({ send, setSend }) => {
  return (
    <div className={style[`${send}`]} onClick={() => setSend("notSend")}>
      <img src={done} alt="Done" />
      <div className={style.wrap}>
        <h1>Дякуємо за заявку!</h1>
        <p>Ваші дані успішно надіслані!</p>
      </div>
    </div>
  );
};
export default Done;
