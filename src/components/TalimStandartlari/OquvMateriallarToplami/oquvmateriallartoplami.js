import React from "react";
import TopNavbar from "../../TopNavbar/topNavbar";
import Navbar from "../../Navbar/navbar";
import { Link } from "react-router-dom";
import "./oquvmateriallartoplami.css";
import Footer from "../../Footer/footerwhite";
import chizma from "../../../assets/images/chizmachi.png";
function oquvmateriallartoplami() {
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
              Fanning kasblarda o'qitilishi
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
            <div className="fanoqituvchi_title">
              <h4>Fanning kasblarda o'qitilishi</h4>
            </div>
          </div>
          <div className="col-12 oquvmaterial">
            <div className="col-3">
              <div className="oquvamaliyot_menu">
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
                    <Link>
                      Issiqlik texnikasi nazariy asoslari va issiqlik elektr
                      stantsiyalari
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="oquvmaterial_card">
                <div className="oquvmaterial_title">
                  <p> Fan nomi</p>
                  <p>Kasblar nomi</p>
                  <p>Ajratilgan soat</p>
                </div>
                <div className="oquvmaterial_card-body">
                  <div className="oquvmaterial_img">
                    <img src={chizma} alt="" />
                    <h4>Texnikaviy chizmachilik</h4>
                  </div>

                  <div className="oquvmaterial_names">
                    <div className="oquvmaterial_name">
                      <p className="oquvmaterial_code">
                        3.51.01.01-elektr va issiqlik tarmoqlarini ta'mirlash va
                        ularga xizmat ko'rsatish ishchisi
                      </p>
                      <div className="oquvmaterial_soat">
                        <p>60</p>
                      </div>
                    </div>
                    <div className="oquvmaterial_name">
                      <p className="oquvmaterial_code">
                        3.51.02.07-elektromontyor
                      </p>
                      <div className="oquvmaterial_soat">
                        <p>60</p>
                      </div>
                    </div>
                    <div className="oquvmaterial_name">
                      <p className="oquvmaterial_code">
                        3.51.02.08 - elektr hisob-kitoblarini ishlatish amalga
                        elektromontyor
                      </p>
                      <div className="oquvmaterial_soat">
                        <p>60</p>
                      </div>
                    </div>
                    <div className="oquvmaterial_name">
                      <p className="oquvmaterial_code">
                        3.51.02.09-kabel tarmoqlari trassalarining nazorati
                        bo'yicha elektromontyor
                      </p>
                      <div className="oquvmaterial_soat">
                        <p>60</p>
                      </div>
                    </div>
                    <div className="oquvmaterial_name">
                      <p className="oquvmaterial_code">
                        3.51.02.09-kabel tarmoqlari trassalarining nazorati
                        bo'yicha elektromontyor
                      </p>
                      <div className="oquvmaterial_soat">
                        <p>60</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default oquvmateriallartoplami;
