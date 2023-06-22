import style from "./Header.module.scss";
import Menu from "../../Components/Menu/Menu";
import ToogleLanguage from "../../Components/ToogleLanguage/ToogleLanguage";
import LogoCompany from "../../Components/LogoCompany/LogoCompany";
import BtnCallBack from "../../Components/BtnCallBack/BtnCallBack";

const Header = () => {
  return (
    <header className={style.header}>
      <LogoCompany className={style.logo} />
      <div className={style.wrap}>
        <Menu className={style.menu} />
        <div className={style.number}>
          <p>0 (800) 00-00-00</p>
        </div>
        <BtnCallBack className={style.callBack} />
        <ToogleLanguage className={style.lang} />
      </div>
    </header>
  );
};
export default Header;
