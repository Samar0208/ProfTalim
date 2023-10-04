import React from "react";
import TopNavbar from "../../TopNavbar/topNavbar";
import Navbar from "../../Navbar/navbar";
import "./umumkasbiy.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footerwhite";
import umum from "../../../assets/images/umumkasbiy.png";
function umumkasbiy() {
  return (
    <div className="talim">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="bosh">
              Bosh sahifa
            </Link>
            <Link to="/Talim" className="back">
              Ta'lim standartlari va fanlar
            </Link>
          </div>
          <div className="right">
            <Link>
              <i className="bi bi-arrow-left"></i> Orqaga
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="talim_searchs">
            <div className="talim_search">
              <i className="bi bi-search"></i>
              <input type="search" placeholder="izlash" />
            </div>
          </div>
          <div className="col-12 talim_box">
            <div className="col-3">
              <div className="umumkasbiy_menu">
                <ul>
                  <li>
                    <Link>Texnikaviy chizmachilik</Link>
                  </li>
                  <li>
                    <Link>Elektrotexnika va elektronika asoslari</Link>
                  </li>
                  <li>
                    <Link>Konstruktsion materiallar</Link>
                  </li>
                  <li>
                    <Link>
                      Issiqlik texnikasi nazariy asoslari va issiqlik elektr
                      stantsiyalari
                    </Link>
                  </li>
                  <li>
                    <Link>Texnikaviy chizmachilik</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 umumkasbiy_cards">
              <div className="col-3">
                <Link to="/UmumkasbiyDetail" className="umumkasbiy_card">
                  <div className="umumkasbiy_img">
                    <img src={umum} alt="" />
                  </div>
                  <div className="umumkasbiy_title">
                    <p>Texnikaviy chizmachilik</p>
                    <span>Transport-2021</span>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link className="umumkasbiy_card">
                  <div className="umumkasbiy_img">
                    <img src={umum} alt="" />
                  </div>
                  <div className="umumkasbiy_title">
                    <p>Texnikaviy chizmachilik</p>
                    <span>Transport-2021</span>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link className="umumkasbiy_card">
                  <div className="umumkasbiy_img">
                    <img src={umum} alt="" />
                  </div>
                  <div className="umumkasbiy_title">
                    <p>Texnikaviy chizmachilik</p>
                    <span>Transport-2021</span>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link className="umumkasbiy_card">
                  <div className="umumkasbiy_img">
                    <img src={umum} alt="" />
                  </div>
                  <div className="umumkasbiy_title">
                    <p>Texnikaviy chizmachilik</p>
                    <span>Transport-2021</span>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link className="umumkasbiy_card">
                  <div className="umumkasbiy_img">
                    <img src={umum} alt="" />
                  </div>
                  <div className="umumkasbiy_title">
                    <p>Texnikaviy chizmachilik</p>
                    <span>Transport-2021</span>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link className="umumkasbiy_card">
                  <div className="umumkasbiy_img">
                    <img src={umum} alt="" />
                  </div>
                  <div className="umumkasbiy_title">
                    <p>Texnikaviy chizmachilik</p>
                    <span>Transport-2021</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default umumkasbiy;
