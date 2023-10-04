import React from "react";
import "./home.css";
import TopNavbar from "../TopNavbar/topNavbar";
import Navbar from "../Navbar/navbar";
import Fon from "../../assets/images/Fon.png";

function home() {
  return (
    <div className="homeBag">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 home_box">
            <div className="col-6">
              <div className="name">
                <h1>Metodik ta’minlash platformasi</h1>
              </div>
              <div className="text">
                <p>
                  Pedagogik innovatsiyalar, kasb-hunar ta’limi boshqaruv hamda
                  pedagog kadrlarni qayta tayyorlash va ularning malakasini
                  oshirish instituti
                </p>
              </div>
              <div className="home_btn">
                <button className="btn">Batafsil</button>
              </div>
            </div>
            <div className="col-6">
              <div className="home_img">
                <img src={Fon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
