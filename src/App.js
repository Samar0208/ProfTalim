import React from "react";
import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import BoshSahif from "./components/Home/BoshSahif";
import Muassasa from "./components/ProfissionalTalimMuassasalari/muassasaSahifa";
import Shahar from "./components/ProfissionalTalimMuassasalari/shahar";
import Meyoriy from "./components/MeyoriyHuquqiyHujjatlar/meyoriySahifa";
import Farmon from "./components/MeyoriyHuquqiyHujjatlar/prezidentFarmoni";
import Vazir from "./components/MeyoriyHuquqiyHujjatlar/vazirlarQarori";
import Buyruq from "./components/MeyoriyHuquqiyHujjatlar/vazirligBuyruqi";
import Nizom from "./components/MeyoriyHuquqiyHujjatlar/nizomlar";
import Talim from "./components/TalimStandartlari/talimstandartSahifa";
import TalimDetail from "./components/TalimStandartlari/talimstandartDetail";
import Umumkasbiy from "./components/TalimStandartlari/Umumkasbiy/umumkasbiy";
import UmumkasbiyDetail from "./components/TalimStandartlari/Umumkasbiy/umumkasbiyDetail";
import OquvAmaliyot from "./components/TalimStandartlari/OquvAmaliyot/oquvamaliyot";
import FanOqituvchi from "./components/TalimStandartlari/FanOqituvchi/fanoqituvchi";
import OquvMaterial from "./components/TalimStandartlari/OquvMateriallarToplami/oquvmateriallartoplami";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BoshSahif />} />
        <Route path="/muassasa" element={<Muassasa />} />
        <Route path="/meyoriy" element={<Meyoriy />} />
        <Route path="/shahar" element={<Shahar />} />
        <Route path="/farmon" element={<Farmon />} />
        <Route path="/vazir" element={<Vazir />} />
        <Route path="buyruq" element={<Buyruq />} />
        <Route path="nizom" element={<Nizom />} />
        <Route path="talim" element={<Talim />} />
        <Route path="talimDetail" element={<TalimDetail />} />
        <Route path="umumkasbiy" element={<Umumkasbiy />} />
        <Route path="umumkasbiyDetail" element={<UmumkasbiyDetail />} />
        <Route path="oquvamaliyot" element={<OquvAmaliyot />} />
        <Route path="fanoqituvchi" element={<FanOqituvchi />} />
        <Route path="oquvmaterial" element={<OquvMaterial />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
