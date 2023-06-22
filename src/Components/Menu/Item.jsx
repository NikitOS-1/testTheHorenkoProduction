import React from "react";
import ToogleLanguage from "../ToogleLanguage/ToogleLanguage";
export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Компанія</li>
      <li onClick={close}>Продукція</li>
      <li onClick={close}>Статті</li>
      <li onClick={close}>Рішення</li>
      <li onClick={close}>Контакти</li>
      <li>
        <p>0 (800) 00-00-00</p>
      </li>
    </ul>
  </div>
);
