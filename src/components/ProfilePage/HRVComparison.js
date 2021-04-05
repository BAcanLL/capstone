import React from "react";
import { COLORS } from "../../styles/colours";
import "../../index.css";
import Chart from "react-apexcharts";

class HRVChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        xaxis: {
          labels: { show: false },
          categories: [
            1991,
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2010,
            2011,
            2012,
            2013,
          ],
        },
        yaxis: {
          //   labels: {show: false},
          categories: [0, 0.5, 1],
        },
        stroke: {
          curve: "smooth",
        },
        chart: {
          fontSize: "14px",
          fontFamily: "Asap",
          color: COLORS.lightGrey,
          tooltip: { show: false },
        },
        labels: { show: false },
        grid: { show: false },

        colors: [COLORS.green],
      },
      series: [
        {
          name: "series-1",
          data: [
            0.1,
            0.2,
            -0.1,
            0.3,
            0.4,
            0.6,
            0.4,
            0.2,
            0.1,
            0,
            -0.1,
            -0.3,
            -0.5,
            -0.3,
            -0.1,
            0.1,
            0.3,
            0.4,
            0.1,
            -0.2,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div class="profileBlock">
        <div style={{ textAlign: "center", color: COLORS.grey, fontSize: 12 }}>
          {" "}
          Population Comparison: HRV{" "}
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 20,
            paddingLeft: 70,
            width: 330,
          }}
        >
          <div style={{ marginRight: 80, textAlign: "center" }}>
            <div class="bigMetric lightpurple">57.3 </div>{" "}
            <div class="subtitle">Patient </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div class="bigMetric purple">60.8 </div>{" "}
            <div class="subtitle">Population Mean </div>
          </div>
        </div>
        <div
          style={{ textAlign: "center", color: COLORS.grey, fontSize: 12 }}
        ></div>
      </div>
    );
  }
}

export default HRVChart;
