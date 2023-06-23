import style from "./Modal.module.scss";

const Modal = ({ isActive, setIsActive }) => {
  return (
    <div className={[style["container"], style[`${isActive}`]].join(" ")}>
      {/* // <div className={style.container}> */}
      <div
        onClick={() => setIsActive("notActive")}
        style={{ width: "50px", height: "50px", backgroundColor: "tomato" }}>
        X
      </div>
      Modal <form action=""></form>
    </div>
  );
};
export default Modal;
