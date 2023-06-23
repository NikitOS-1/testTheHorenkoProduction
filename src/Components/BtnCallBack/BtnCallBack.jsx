import { useState } from "react";
import Modal from "../Modal/Modal";
import style from "./BtnCallBack.module.scss";

const BtnCallBack = ({ setIsActive }) => {
  return (
    <>
      <div className={style.btnCallBack} onClick={() => setIsActive("active")}>
        <p>Зв'язатись</p>
      </div>
    </>
  );
};
export default BtnCallBack;
