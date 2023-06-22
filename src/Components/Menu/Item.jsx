import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Компанія</li>
      <li onClick={close}>Продукція</li>
      <li onClick={close}>Статті</li>
      <li onClick={close}>Рішення</li>
      <li onClick={close}>Контакти</li>
    </ul>
  </div>
);
