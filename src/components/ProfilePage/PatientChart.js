import React from "react";
import { COLORS } from "../../styles/colours";
import "../../index.css";
import Chart from "react-apexcharts";

class PatientChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },

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
        },
        labels: { show: false },
        //   markers: {
        //     size: 4,
        //     },
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
      <div class="profileBlock two">
        <div class="profileBlockTitle"> Sentiment Analysis </div>
        <div style={{ display: "flex" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="110"
            width="500"
          />
        </div>
      </div>
    );
  }
}

export default PatientChart;
