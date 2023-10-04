import React from "react";
import { Link } from "react-router-dom";
import "./meyoriy.css";
import farmon from "../../assets/images/farmon.png";
import Pagination from "../Pagination/paginationwhite";
import TopNavbar from "../TopNavbar/topNavbar";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footerwhite";
function prezidentFarmoni() {
  return (
    <div className="farmon farmon_fon">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="bosh">
              Bosh sahifa
            </Link>
            <Link to="/Meyoriy" className="bosh">
              Me’yoriy-huquqiy hujjatlar
            </Link>
            <Link className="back">Prezident Farmonlari</Link>
          </div>
          <div className="right">
            <Link>
              <i class="bi bi-arrow-left-short"></i> Orqaga
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className=" farmon_body">
              <div className="farmon_left">
                <div className="col">
                  <div className="farmon_card">
                    <Link className="farmon_title active">
                      Prezident Farmonlari
                    </Link>
                    <Link to="/vazir" className="farmon_title">
                      Vazirlar Mahkamasi qarorlari
                    </Link>
                    <Link to="/Buyruq" className="farmon_title">
                      Vazirlig buyruqlari ta'lim
                    </Link>
                    <Link to="/nizom" className="farmon_title">
                      Nizomlar
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-10 farmon_right">
                <div className="col-3 farmon_right-img">
                  <img src={farmon} alt="farmon" />
                </div>
                <div className="col-7 farmon_right-text">
                  <p>
                    O'zbekiston Respublikasi Prezidentining 2022 yil 29
                    yanvardagi "2022-2026 yillarga mo'ljallangan Yangi
                    O'zbekistonning taraqqiyot strategiyasi to'g'risida"gi
                    PF-60-son farmoni.
                  </p>
                  <p>
                    O'zbekiston Respublikasi Prezidentining 2022 yil 29
                    yanvardagi "2022-2026 yillarga mo'ljallangan Yangi
                    O'zbekistonning taraqqiyot strategiyasi to'g'risida"gi
                    PF-60-son farmoni.
                  </p>
                  <p>
                    O'zbekiston Respublikasi Prezidentining 2022 yil 29
                    yanvardagi "2022-2026 yillarga mo'ljallangan Yangi
                    O'zbekistonning taraqqiyot strategiyasi to'g'risida"gi
                    PF-60-son farmoni.
                  </p>
                  <p>
                    O'zbekiston Respublikasi Prezidentining 2021 yil 16 iyundagi
                    "Davlat organlari va tashkilotlarining faoliyati ochiqligini
                    ta'minlash, shuningdek, jamoatchilik nazoratini samarali
                    amalga oshirishga doir qo'shimcha chora-tadbirlar
                    to'g'risida"gi PF-6247-son farmoni. Prezidentining 2021 yil
                    16 iyundagi "Davlat organlari va tashkilotlarining faoliyati
                    ochiqligini ta'minlash, shuningdek, jamoatchilik nazoratini
                    samarali amalga oshirishga doir qo'shimcha chora-tadbirlar
                    to'g'risida"gi PF-6247-son farmoni
                  </p>
                </div>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2021 yil 10 fevraldagi
                  "Qonunchilik hujjatlari ijrosini samarali tashkil etishda
                  davlat boshqaruvi organlari va mahalliy ijro etuvchi hokimiyat
                  organlari rahbarlarining shaxsiy javobgarligini kuchaytirishga
                  doir qo'shimcha chora-tadbirlar to'g'risida"gi PF-6166-son
                  farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2021 yil 3 fevraldagi
                  " 2017 — 2021 yillarda O'zbekiston Respublikasini
                  rivojlantirishning beshta ustuvor yo'nalishi bo'yicha
                  harakatlar strategiyasini "yoshlarni qo'llab-quvvatlash va
                  aholi salomatligini mustahkamlash yili"da amalga oshirishga
                  oid davlat dasturi to'g'risida "gi PF-6155-son farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2020 yil 27
                  oktyabrdagi "Davlat ishtirokidagi korxonalarni isloh qilishni
                  jadallashtirish hamda davlat aktivlarini xususiylashtirishga
                  oid chora-tadbirlar to'g'risida"gi PF-6096-son farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2020 yil 30
                  oktyabrdagi "Sog'lom turmush tarzini keng tatbiq etish va
                  ommaviy sportni yanada rivojlantirish chora-tadbirlari
                  to'g'risidagi PF-6099-son farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi prezidenti 2020 yil 5 oktyabr"
                  "O'zbekistonni raqamlash - 2030" tasdiqlangan strategiya va
                  universitetga amalgaoshirish chora-tadbirlari-ko'rilgan
                  chora-tadbirlar " gi PF-6079-son qarori
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2020 yil 18 avgustdagi
                  "Respublikada eksport va investisiya salohiyatini yanada
                  rivojlantirishga oid qo'shimcha chora-tadbirlar to'g'risida"gi
                  PF-6042-son farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2020 yil 27
                  oktyabrdagi "Davlat ishtirokidagi korxonalarni isloh qilishni
                  jadallashtirish hamda davlat aktivlarini xususiylashtirishga
                  oid chora-tadbirlar to'g'risida"gi PF-6096-son farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi Prezidentining 2020 yil 30
                  oktyabrdagi "Sog'lom turmush tarzini keng tatbiq etish va
                  ommaviy sportni yanada rivojlantirish chora-tadbirlari
                  to'g'risidagi PF-6099-son farmoni
                </p>
                <p>
                  O'zbekiston Respublikasi prezidenti 2020 yil 5 oktyabr"
                  "O'zbekistonni raqamlash - 2030" tasdiqlangan strategiya va
                  universitetga amalgaoshirish chora-tadbirlari-ko'rilgan
                  chora-tadbirlar " gi PF-6079-son qarori
                </p>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
}

export default prezidentFarmoni;
