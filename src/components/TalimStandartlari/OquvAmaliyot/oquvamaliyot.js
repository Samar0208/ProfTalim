import React from "react";
import TopNavbar from "../../TopNavbar/topNavbar";
import Navbar from "../../Navbar/navbar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footerwhite";
import "../OquvAmaliyot/oquvamaliyot.css";
import umum from "../../../assets/images/umumkasbiy.png";
import Pagination from "../../Pagination/paginationwhite";
function oquvamaliyot() {
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
              O‘quv amaliyot
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
              <div className="oquvamaliyot_menu">
                <ul>
                  <li>
                    <Link>Barchasi</Link>
                  </li>
                  <li>
                    <Link>Ta'lim 2021</Link>
                  </li>
                  <li>
                    <Link>Gumanitar fanlar va san’at-2021</Link>
                  </li>
                  <li>
                    <Link>Ijtimoiy fanlar, biznes va huquq-2021</Link>
                  </li>
                  <li>
                    <Link>Fan-2021</Link>
                  </li>
                  <li>
                    <Link>
                      Muhandislik ishi, ishlov berish texnologiyasi va
                      qurilish-2021
                    </Link>
                  </li>
                  <li>
                    <Link>Qishloq xо‘jaligi-2021</Link>
                  </li>
                  <li>
                    <Link>Sog‘liqni saqlash va ijtimoiy ta’minot-2021</Link>
                  </li>
                  <li>
                    <Link>Xizmatlar-2021</Link>
                  </li>
                  <li>
                    <Link>Umumta'lim fanlari</Link>
                  </li>
                  <li>
                    <Link>Uzluksiz ta'lim Milliy o‘quv dasturlari</Link>
                  </li>
                  <li>
                    <Link>Ta'lim</Link>
                  </li>
                  <li>
                    <Link>San’at va gumanitar fanlar</Link>
                  </li>
                  <li>
                    <Link>Ijtimoiy fanlar, jurnalistika va axborot</Link>
                  </li>
                  <li>
                    <Link>Biznes, boshqaruv va huquq</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 oquvamaliy_cards">
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
              <Link className="col-3 oquvamaliyot_card" to="/Talim">
                <div className="oquvamaliyot_title">
                  <span>
                    Aloqa va axborotlashtirish, telekommunikatsiya
                    texnologiyalari-2021
                  </span>
                  <p>Abonent kirish tarmoqlari</p>
                  <Link className="oquvamaliyot_btn">Yuklab olish</Link>
                </div>
                <div className="oquvamaliyot_img">
                  <img src={umum} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
}

export default oquvamaliyot;
