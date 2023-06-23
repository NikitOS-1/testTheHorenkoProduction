import style from "./App.module.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";
import Modal from "../Components/Modal/Modal";

const App = () => {
  const [isActive, setIsActive] = useState("notActive");
  return (
    <div className={style.app}>
      <header className={style[isActive]}>
        <Header setIsActive={setIsActive} />
      </header>
      <main className={style[isActive]}>
        <Main isActive={isActive} setIsActive={setIsActive} />
      </main>
      <div className={style.modal}>
        <Modal isActive={isActive} setIsActive={setIsActive} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default App;
