import style from "./Header.module.scss";
import Menu from "../../Components/Menu/Menu";
import ToogleLanguage from "../../Components/ToogleLanguage/ToogleLanguage";
import LogoCompany from "../../Components/LogoCompany/LogoCompany";
import BtnCallBack from "../../Components/BtnCallBack/BtnCallBack";

const Header = () => {
  return (
    <header className={style.header}>
      <LogoCompany />
      <Menu />
      <div className={style.number}></div>
      <BtnCallBack />
      <ToogleLanguage />
    </header>
  );
};
export default Header;
