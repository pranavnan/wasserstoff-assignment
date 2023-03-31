import { useState } from "react";
import { Presentation } from "../components/Presentation";
import BubbleChart from "../components/BubbleChart";
import demodata from "../data.json";
import classes from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const [data] = useState(demodata);

  return (
    <section className={classes.dashboard_div}>
      <div>
        <div className={classes.dash_info}>
          <h1>Design faster</h1>
          <div className={classes.target_div}>
            <div className={classes.target}>
              <div className={classes.progress1}>
                <div className={classes.progress3}>
                  <div className={classes.innerCircle}>
                    <div className={classes.diamondOutter}></div>
                    <div className={classes.diamondInner}></div>
                  </div>
                </div>

                <svg
                  width="100"
                  height="100"
                  className={classes.barProgressInner}
                >
                  <circle
                    r="42"
                    cx="50"
                    cy="50"
                    className={classes.circle}
                  ></circle>
                  <circle
                    r="42"
                    cx="50"
                    cy="50"
                    className={classes.inner_circle_progress}
                  ></circle>
                </svg>

                <svg
                  width="120"
                  height="120"
                  className={classes.barProgressOuter}
                >
                  <circle
                    r="56"
                    cx="60"
                    cy="60"
                    className={classes.circleOuter}
                  ></circle>
                  <circle
                    r="56"
                    cx="60"
                    cy="60"
                    className={classes.outer_circle_progress1}
                  ></circle>
                  <circle
                    r="56"
                    cx="60"
                    cy="60"
                    className={classes.outer_circle_progress2}
                  ></circle>
                </svg>
              </div>
            </div>
            <h3>Total earning</h3>
            <div className={classes.totalEarning}>
              <h4>${data.total_earning}</h4>
              <div>
                <div
                  style={{ borderBottom: `8px solid #00B929` }}
                  className={classes.uparrow}
                ></div>
                <p>2%</p>
              </div>
            </div>
            <p className={classes.compared}>Compare to $21,504 last year</p>
            <Presentation data={data} />
          </div>
          <div className={classes.purple_div}>
            <div>
              <h4>Total earning</h4>
              <div>
                <h3>${data.total_earning}</h3>
                <div>
                  <div
                    style={{ borderBottom: `8px solid #38F261` }}
                    className={classes.uparrow}
                  ></div>
                  <p className={classes.percentage}>{data.earning_hike}%</p>
                </div>
              </div>
              <p>Compared to ${data.last_year_earning} last year</p>
            </div>
            <hr />
            <div>
              <h4>Sales</h4>
              <div>
                <h3>${data.sales}</h3>
                <div>
                  <div
                    style={{ borderBottom: `8px solid #38F261` }}
                    className={classes.uparrow}
                  ></div>
                  <p className={classes.percentage}>{data.sales_hike}%</p>
                </div>
              </div>
              <p>Compared to ${data.last_year_earning} last year</p>
            </div>
          </div>
          <div className={classes.values_div}>
            <div>
              <h6>Travel</h6>
              <p>760</p>
              <p>2,540</p>
              <div
                style={{ borderBottom: `8px solid #38F261` }}
                className={classes.uparrow}
              ></div>
            </div>
            <div>
              <h6>Presentation</h6>
              <p>650</p>
              <p>2,304</p>
              <div className={classes.downarrow}></div>
            </div>
            <div>
              <h6>Business</h6>
              <p>612</p>
              <p>2,140</p>
              <div
                style={{ borderBottom: `8px solid #00B929` }}
                className={classes.uparrow}
              ></div>
            </div>
          </div>
        </div>
        <div className={classes.dash_bubble}>
          <BubbleChart data={data} />
        </div>
      </div>
    </section>
  );
}
