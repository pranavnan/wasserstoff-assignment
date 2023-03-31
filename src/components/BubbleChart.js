import React from "react";
import classes from "../styles/Dashboard.module.css";
import trendsGood from "../images/trend-good.svg";
import shoppingView from "../images/shopping-view.svg";
import equilizer from "../images/equilizer.svg";

const BubbleChart = ({ data }) => {
  return (
    <div className={classes.bubbles}>
      <div className={classes.outerBubble}>
        <div className={classes.innerBubble}>
          <div className={classes.investmentBubble}>
            <div>
              <h5>Investments</h5>
              <h4>${data.investment_price}</h4>
              <p>3 month</p>
            </div>
          </div>

          <div className={`${classes.financeBubble} ${classes.bubble}`}>
            <div>
              <h5>Finance</h5>
              <h4>${data.finance}</h4>
            </div>
          </div>

          <div className={`${classes.businessBubble} ${classes.bubble}`}>
            <div>
              <h5>Business</h5>
              <h4>${data.business_price}</h4>
            </div>
          </div>

          <div className={`${classes.designBubble} ${classes.bubble}`}>
            <div>
              <h5>Design</h5>
              <h4>${data.design}</h4>
              <p>3 month</p>
            </div>
          </div>

          <div className={`${classes.developmentBubble} ${classes.bubble}`}>
            <div>
              <h5>Development</h5>
              <h4>${data.development_price}</h4>
            </div>
          </div>

          <div className={classes.pinkBubble}></div>

          <div
            style={{ top: "15%", left: "22%" }}
            className={classes.smallBubble}
          ></div>

          <div
            style={{ top: "30%", left: "83%" }}
            className={classes.smallBubble}
          ></div>

          <div
            style={{ top: "68%", left: "73%" }}
            className={classes.smallBubble}
          ></div>

          <div
            style={{ top: "70%", left: 0 }}
            className={classes.smallBubble}
          ></div>

          <div
            style={{ top: "18%", left: "35%" }}
            className={classes.mediumBubble}
          ></div>
          <div
            style={{ top: "18%", left: "35%" }}
            className={classes.mediumBubble}
          ></div>
          <div
            style={{ top: "70%", left: "90%" }}
            className={classes.mediumBubble}
          ></div>
          <div
            style={{ top: "47%", left: "13%" }}
            className={classes.mediumBubble}
          ></div>
        </div>
        <div className={classes.yellowBubble}></div>
      </div>

      <div
        style={{ left: "69%", top: "50%" }}
        className={classes.largeBubble}
      ></div>
      <div
        style={{ left: "80%", top: "30%" }}
        className={classes.largeBubble}
      ></div>
      <div
        style={{ left: "60%", top: "15%" }}
        className={classes.largeBubble}
      ></div>

      <div
        style={{ top: "70%", left: "13%" }}
        className={classes.mediumBubble}
      ></div>
      <div
        style={{ top: "20%", left: "13%" }}
        className={classes.mediumBubble}
      ></div>

      <div
        style={{ top: "35%", left: "25%" }}
        className={classes.mediumBubble2}
      ></div>
      <div
        style={{ top: "45%", left: "15%" }}
        className={classes.mediumBubble2}
      ></div>
      <div
        style={{ top: "70%", left: "85%" }}
        className={classes.mediumBubble2}
      ></div>

      <div className={classes.timeline}>
        <p>Timeline</p>
        <div>
          <p>1W</p>
          <p>1M</p>
          <p className={classes.current_timeline}>3M</p>
          <p>1Y</p>
          <p>ALL</p>
        </div>
      </div>

      <div className={classes.bubble_details}>
        <div>
          <div>
            <img src={trendsGood} alt="" />
          </div>
          <p>Trend Goods</p>
          <h1>{data.trend_goods}</h1>
        </div>
        <div>
          <div>
            <img src={shoppingView} alt="" />
          </div>
          <p>Shopping views</p>
          <h1>{data.shopping_views}</h1>
        </div>
        <div>
          <div>
            <img src={equilizer} alt="" />
          </div>
          <p>Store Dynamics</p>
          <h1>{data.store_dynamics}</h1>
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
