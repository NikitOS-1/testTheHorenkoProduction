import style from "./Modal.module.scss";
import flag from "../../assets/flagUA.png";
import done from "../../assets/done.png";
import { useState } from "react";

const Modal = ({ isActive, setIsActive }) => {
  const [send, setSend] = useState("notSend");
  if (send == "send") {
    isActive = "notActive";
  }

  return (
    <>
      <div className={[style["container"], style[`${isActive}`]].join(" ")}>
        <div
          onClick={() => setIsActive("notActive")}
          className={style.btnClose}>
          <div className={style.bar1} />
          <div className={style.bar2} />
        </div>
        <div className={style.wrap}>
          <div className={style.title}>
            <h1>Залишайте заявку</h1>
            <p>Ми зв’яжемося з вами найближчим часом.</p>
          </div>
          <div className={style.form}>
            <form action="#">
              <div className={style.name}>
                <input type="text" placeholder="Ваше ім’я*" />
              </div>
              <div className={style.number}>
                <img src={flag} alt="Flag" />
                <input type="text" placeholder="+380-00-000-00-00*" />
              </div>
              <button className={style.btnSent} onClick={() => setSend("send")}>
                Відправить
              </button>
            </form>
            <p className={style.accept}>
              Натискаючи кнопку “Надіслати”, ви погоджуєтесь з{" "}
              <span style={{ textDecoration: "underline" }}>
                Правилами обробки персональних даних
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      <div className={style[`${send}`]} onClick={() => setSend("notSend")}>
        <img src={done} alt="Done" />
        <div className={style.wrap}>
          <h1>Дякуємо за заявку!</h1>
          <p>Ваші дані успішно надіслані!</p>
        </div>
      </div>
    </>
  );
};
export default Modal;
