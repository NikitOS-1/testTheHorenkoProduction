import { useState } from "react";
import style from "./Form.module.scss";
import flag from "../../assets/flagUA.png";

const Form = ({ isActive, setIsActive, setSend, send }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState("true");
  console.log(name);
  console.log(number);
  const sendData = () => {
    if (name == "" || name == " " || name == number) {
      setValid("false");
    } else if (number == "" || number == " " || number == String) {
      setValid("false");
    } else {
      setValid("true");
      setSend("send");
      setIsActive("notActive");
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
          <div className={[style[number], style[`${valid}`]].join(" ")}>
            <img src={flag} alt="Flag" />
            <input
              type="text"
              placeholder="+380-00-000-00-00*"
              onChange={(e) => setNumber(e.target.value)}
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
