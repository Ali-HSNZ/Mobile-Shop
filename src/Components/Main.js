import React from "react";
import ProductList from "./Product/ProductList";
import Menu from "../Components/Navigation/Menu";
import Context from "./Context/Context";
import Styles from "../Components/Style Module/style.module.css";
import Filter from "./Filter/Filter";

class Main extends React.Component {

  render() {
    return (
      <div className={Styles.parent}>
        <Context>
          <Menu />
          <Filter/>
          <ProductList />
        </Context>
      </div>
    );
  }
}
export default Main;
