import style from "./Header.module.scss";
import Menu from "../../Components/Menu/Menu";
import ToogleLanguage from "../../Components/ToogleLanguage/ToogleLanguage";
import LogoCompany from "../../Components/LogoCompany/LogoCompany";
import BtnCallBack from "../../Components/BtnCallBack/BtnCallBack";

const Header = ({ setIsActive }) => {
  return (
    <div className={style.container}>
      <div className={style.wraper}>
        <LogoCompany className={style.logo} />
        <div className={style.wrap}>
          <Menu className={style.menu} />
          <div className={style.number}>
            <p>0 (800) 00-00-00</p>
          </div>
          <BtnCallBack className={style.callBack} setIsActive={setIsActive} />
          <div className={style.lang}>
            <ToogleLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
