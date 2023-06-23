import BtnCallBack from "../../BtnCallBack/BtnCallBack";
import style from "./Slide.module.scss";
import imgURL from "../../../assets/MaestroProTransparent-1536x1209.png";

const Slide = () => {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.subtitle}>
          <h1>Meltem</h1>
          <p>
            Meltem – це гарантовано якісне вентиляційне обладнання від
            німецького заводу.
          </p>
          <div className={style.btnProduct}>
            <p>Продукція</p>
          </div>
        </div>
        <div className={style.image}>
          <img src={imgURL} alt="product" />
        </div>
        <div className={style.title}>
          <p>Відцентровий витяжний вентилятор</p>
          <h3>Meltem V-II 30-N</h3>
          <div className={style.btnDescr}>
            <p>Детальніше</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
