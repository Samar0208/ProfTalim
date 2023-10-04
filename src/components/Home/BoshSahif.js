import React from "react";

import Home from "./home";
import Card from "../Home/card";
import Yangilik from "../Home/yangilik";
import Statistika from "./statistika";
import Korilganlar from "./korilganlar";
import Loyiha from "./loyiha";
import Mutaxasis from "./mutaxasis";
import Havola from "./havola";
import Blue from "../Blue/blue";
import Footer from "../Footer/footer";
function BoshSahif() {
  return (
    <div>
      <Blue />
      <Home />
      <Card />
      <Yangilik />
      <Statistika />
      <Korilganlar />
      <Loyiha />
      <Mutaxasis />
      <Havola />
      <Footer />
    </div>
  );
}

export default BoshSahif;
