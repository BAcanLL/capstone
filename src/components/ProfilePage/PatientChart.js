import React from "react";
import { COLORS } from "../../styles/colours";
import "../../index.css";
import Chart from "react-apexcharts";
import { gdatetime } from "../../constants/mockData";

class PatientChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineChart: {
        xaxis: {
          labels: { show: false },
          categories: gdatetime,
        },
        fill: { colors: [COLORS.grey], type: "solid" },
        yaxis: {
          tickAmount: 2,
          min: -1,
          max: 1,
        },
        stroke: {
          curve: "smooth",
        },
        chart: {
          fontSize: "14px",
          fontFamily: "Asap",
          foreColor: COLORS.grey,
          toolbar: { show: false },
        },
        grid: {
          borderColor: COLORS.lightGrey,
        },
        labels: { show: false },
        //   markers: {
        //     size: 4,
        //     },
        colors: [COLORS.green],
      },
      pieChart: {
        dataLabels: { enabled: false },
        xaxis: {
          labels: { show: false },
        },
        labels: ["Happy", "Neutral", "Sad"],
        plotOptions: {
          pie: { donut: { size: "60%", labels: { show: false } } },
        },
        chart: {
          fontSize: "14px",
          fontFamily: "Asap",
          foreColor: COLORS.grey,
          toolbar: { show: false },
        },
        grid: {
          borderColor: COLORS.lightGrey,
        },
        colors: [COLORS.green, COLORS.graph.pNN50, COLORS.graph.NN50],
      },
      series: [
        {
          name: "Sentiment",
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
      series2: [7, 3, 6],
    };
  }

  render() {
    return (
      <div class="profileBlock two">
        <div class="profileBlockTitle" style={{ marginBottom: 0 }}>
          {" "}
          Sentiment Analysis{" "}
        </div>
        <div style={{ display: "flex" }}>
          <Chart
            options={this.state.lineChart}
            series={this.state.series}
            type="line"
            height="130"
            width="270"
          />
          <Chart
            style={{ marginTop: 10 }}
            options={this.state.pieChart}
            series={[30, 50, 20]}
            type="donut"
            height="115"
            width="270"
          />
        </div>
      </div>
    );
  }
}

export default PatientChart;
