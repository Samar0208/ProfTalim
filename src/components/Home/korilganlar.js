import React from "react";
import Pagination from "../../components/Pagination/pagination";
import "./korilganlar.css";
import korilgan from "../../assets/images/korilgan.png";
import Link from "antd/es/typography/Link";
function korilganlar() {
  return (
    <div className="korilgan">
      <div className="container">
        <div className="korilgan_top">
          <h1>Eng ko‘p ko‘rilganlar</h1>
          <Pagination />
        </div>
        <div className="row">
          <div className="col-12 korilgan_card-box">
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <p>Mutaxassislik</p>
                    <span>
                      Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                      tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                    </span>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <span> O'rta professional talim</span>
                  <span>
                    <i class="bi bi-eye-fill"></i> 3750
                  </span>
                </div>
              </Link>
            </div>

            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <p>Mutaxassislik</p>
                    <span>
                      Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                      tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                    </span>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <span> O'rta professional talim</span>
                  <span>
                    <i class="bi bi-eye-fill"></i> 3750
                  </span>
                </div>
              </Link>
            </div>
            <div className="col-4 korilgan_card">
              <Link>
                <div className="korilgan_card-body">
                  <div className="korilgan_title">
                    <p>Mutaxassislik</p>
                    <span>
                      Tо‘qimachilik ishlab chiqarish (soha bо‘yicha:yigiruv,
                      tо‘quv, bо‘yoq, tikuv-trikotaj va x.k.)
                    </span>
                  </div>
                  <div className="korilgan_img">
                    <img src={korilgan} alt="" />
                  </div>
                </div>
                <div className="korilgan_bottom">
                  <span> O'rta professional talim</span>
                  <span>
                    <i class="bi bi-eye-fill"></i> 3750
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default korilganlar;
