import { useState } from "react";
import style from "./Form.module.scss";
import flag from "../../assets/flagUA.png";

const Form = ({ isActive, setIsActive, setSend, send }) => {
  const [name, setName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [valid, setValid] = useState("true");

  const sendData = () => {
    if (name == "" || name == " " || name == Number) {
      setValid("false");
    } else if (numbers == "" || numbers == " " || numbers == String) {
      setValid("false");
    } else {
      setSend("send");
      setIsActive("notActive");
      setName("");
      setNumbers("");
    }
  };

  return (
    <div>
      <div className={style.form}>
        <form action="#">
          <div className={[style[name], style[`${valid}`]].join(" ")}>
            <input
              type="text"
              placeholder="Ваше ім’я*"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={[style[numbers], style[`${valid}`]].join(" ")}>
            <img src={flag} alt="Flag" />
            <input
              type="text"
              placeholder="+380-00-000-00-00*"
              onChange={(e) => setNumbers(e.target.value)}
              value={numbers}
            />
          </div>
          <button className={style.btnSent} onClick={() => sendData()}>
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
  );
};
export default Form;
