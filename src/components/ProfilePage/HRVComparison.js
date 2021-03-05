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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
          data: [0.3, 0.5, 0.1, 0.7, 0.4, 0.3],
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
        <div style={{ display: "flex" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="110"
            width="400"
          />
        </div>
        <div style={{ textAlign: "center", color: COLORS.grey, fontSize: 12 }}>
          {" "}
          Patient{" "}
        </div>
      </div>
    );
  }
}

export default HRVChart;
