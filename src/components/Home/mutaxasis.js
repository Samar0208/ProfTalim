import Pagination from "../../components/Pagination/pagination";
import React from "react";
import user from "../../assets/images/user.png";
import "./mutaxasis.css";
import { Link } from "react-router-dom";

function mutaxasis() {
  return (
    <div className="mutaxasis">
      <div className="container">
        <div className="mutaxasis_top">
          <h1>Bizning mutaxassislar</h1>
          <Pagination />
        </div>
        <div className="row">
          <div className="col-12 mutaxasis_users">
            <div className="col-2">
              <Link>
                <div className="mutaxasis_user">
                  <div className="mutaxasis_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="mutaxasis_user-name">
                    <p>Alimov Farxod Erkinovich</p>
                    <span>
                      Lorem ipsum dolor sit amet, consecteturt. Risus, laoreet
                      nulla vitae diam elit eget quis in ullamcorper.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-2">
              <Link>
                <div className="mutaxasis_user">
                  <div className="mutaxasis_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="mutaxasis_user-name">
                    <p>Alimov Farxod Erkinovich</p>
                    <span>
                      Lorem ipsum dolor sit amet, consecteturt. Risus, laoreet
                      nulla vitae diam elit eget quis in ullamcorper.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-2">
              <Link>
                <div className="mutaxasis_user">
                  <div className="mutaxasis_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="mutaxasis_user-name">
                    <p>Alimov Farxod Erkinovich</p>
                    <span>
                      Lorem ipsum dolor sit amet, consecteturt. Risus, laoreet
                      nulla vitae diam elit eget quis in ullamcorper.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-2">
              <Link>
                <div className="mutaxasis_user">
                  <div className="mutaxasis_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="mutaxasis_user-name">
                    <p>Alimov Farxod Erkinovich</p>
                    <span>
                      Lorem ipsum dolor sit amet, consecteturt. Risus, laoreet
                      nulla vitae diam elit eget quis in ullamcorper.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-2">
              <Link>
                <div className="mutaxasis_user">
                  <div className="mutaxasis_img">
                    <img src={user} alt="" />
                  </div>
                  <div className="mutaxasis_user-name">
                    <p>Alimov Farxod Erkinovich</p>
                    <span>
                      Lorem ipsum dolor sit amet, consecteturt. Risus, laoreet
                      nulla vitae diam elit eget quis in ullamcorper.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mutaxasis;
