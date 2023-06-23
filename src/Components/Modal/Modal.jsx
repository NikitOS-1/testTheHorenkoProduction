import style from "./Modal.module.scss";

import { useState } from "react";
import Form from "../Form/Form";
import Done from "../Done/Done";

const Modal = ({ isActive, setIsActive }) => {
  const [send, setSend] = useState("notSend");
  // if (send == "send") {
  //   isActive = "notActive";
  // }

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
          <Form
            isActive={isActive}
            setIsActive={setIsActive}
            setSend={setSend}
            send={send}
          />
        </div>
      </div>
      <Done send={send} setSend={setSend} />
    </>
  );
};
export default Modal;
