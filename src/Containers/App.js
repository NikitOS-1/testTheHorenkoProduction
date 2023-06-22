import style from "./App.module.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
