import React from "react";
import greater from "../images/greater.svg";
import totalEarninng from "../images/total-earning.svg";
import sales from "../images/sales.svg";
import purchaseChart from "../images/purchase-chart.svg";
import classes from "../styles/Overview.module.css";

const Overview = () => {
  return (
    <section className={classes.overview}>
      <div>
        <div className={classes.overview_details}>
          <h2>WSTF-FRONT-END-HAKATHON</h2>
          <div className={classes.all_users}>
            <div>
              <h5>All Users</h5>
              <div>
                <p>DETAIL</p>
                <img src={greater} alt="" />
              </div>
            </div>
            <h1>24,31,340</h1>
          </div>
          <div className={classes.data_details}>
            <div>
              <div className={classes.data_details_earning}>
                <img src={totalEarninng} alt="" />
              </div>
              <div>
                <p>Total earning</p>
                <h6>540,549</h6>
              </div>
            </div>
            <div>
              <div className={classes.data_details_sales}>
                {/* <span className="material-symbols-outlined">
                  real_estate_agent
                </span> */}
                <img src={sales} alt="" />
              </div>
              <div>
                <p>Sales</p>
                <h6>1,205,677</h6>
              </div>
            </div>
            <div>
              <div className={classes.data_details_purchase}>
                <img src={purchaseChart} alt="" />
              </div>
              <div>
                <p>Purchase</p>
                <h6>48,430,039</h6>
              </div>
            </div>
          </div>
          <div className={classes.users}>
            <div className={classes.active_users}>
              <div>
                <svg>
                  <circle
                    r="33"
                    cx="40"
                    cy="40"
                    className={classes.active_users_bar}
                  ></circle>
                  <circle
                    r="33"
                    cx="40"
                    cy="40"
                    className={classes.active_users_progress}
                  ></circle>
                </svg>
                <h5 className={classes.percent}>27%</h5>
              </div>
              <div>
                <h6>92,990</h6>
                <p>Active users</p>
              </div>
            </div>
            <div className={classes.new_users}>
              <div>
                <svg>
                  <circle
                    r="33"
                    cx="40"
                    cy="40"
                    className={classes.new_users_bar}
                  ></circle>
                  <circle
                    r="33"
                    cx="40"
                    cy="40"
                    className={classes.new_users_progress}
                  ></circle>
                </svg>
                <h5 className={classes.percent}>67%</h5>
              </div>
              <div>
                <h6>22,652</h6>
                <p>New users</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={classes.overview_map}>
          <Map />
        </div> */}
      </div>
    </section>
  );
};

export default Overview;
