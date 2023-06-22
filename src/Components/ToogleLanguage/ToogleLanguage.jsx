import { useState } from "react";
import style from "./ToogleLanguage.module.scss";

const ToogleLanguage = () => {
  const [ua, setUa] = useState("active");
  const [ru, setRu] = useState("notActive");

  const toogleLang = () => {
    if (ua === "active") {
      setUa("notActive");
      setRu("active");
    }
    if (ru === "active") {
      setUa("active");
      setRu("notActive");
    }
  };

  return (
    <div className={style.container}>
      <div
        className={[style["ua"], style[`${ua}`]].join(" ")}
        onClick={toogleLang}>
        UA
      </div>
      <div
        className={[style["ru"], style[`${ru}`]].join(" ")}
        onClick={toogleLang}>
        RU
      </div>
    </div>
  );
};
export default ToogleLanguage;
