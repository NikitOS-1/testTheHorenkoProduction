import BtnCallBack from "../../BtnCallBack/BtnCallBack";
import "./Slide.scss";
import imgURL from "../../../assets/MaestroProTransparent-1536x1209.png";

const Slide = () => {
  return (
    <div className="container">
      <div className="wrap">
        <div className="subtitle">
          <h1>Meltem</h1>
          <p>
            Meltem – це гарантовано якісне вентиляційне обладнання від
            німецького заводу.
          </p>
          <BtnCallBack />
        </div>
        <div className="image">
          <img src={imgURL} alt="product" />
        </div>
        <div className="title">
          <p>Відцентровий витяжний вентилятор</p>
          <h3>Meltem V-II 30-N</h3>
          <BtnCallBack />
        </div>
      </div>
    </div>
  );
};

export default Slide;
