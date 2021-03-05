import React from "react";
import { COLORS } from "../../styles/colours";
import "../../index.css";
import Chart from "react-apexcharts";
import { mockEcg } from "../../constants/mockData";

let HR = [],
  HRV = [],
  pNN50 = [],
  NN50 = [],
  LFHF = [],
  anomaly = [],
  anomalyCount = [],
  datetime = [];
mockEcg.forEach(function (ecg) {
  HR.push(ecg.HR);
  HRV.push(ecg.HRV);
  pNN50.push(ecg.pNN50);
  NN50.push(ecg.NN50);
  LFHF.push(ecg["LF/HF"]);
  anomaly.push(ecg.anomaly);
  datetime.push(ecg.datetime);
});

anomaly.forEach(function (a, i) {
  if (a) {
    anomalyCount.push(i);
  }
});
let anomalyMarkers = [];
anomalyCount.forEach(function (a) {
  for (var i = 0; i < 5; i++) {
    anomalyMarkers.push({
      seriesIndex: i,
      dataPointIndex: a,
      fillColor: COLORS.red,
      strokeColor: COLORS.red,
      size: 7,
    });
  }
});

class PatientSummaryChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        markers: {
          size: 5,
          discrete: anomalyMarkers,
        },
        xaxis: {
          type: "datetime",
          labels: { show: false },
          categories: datetime,
        },
        yaxis: {
          categories: [0, 0.5, 1],
        },
        stroke: {
          curve: "straight",
        },
        chart: {
          fontSize: "14px",
          fontFamily: "Asap",
          foreColor: COLORS.grey,
        },
        labels: { show: false },
        legend: {
          onItemClick: {
            toggleDataSeries: true,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
        },
        colors: [
          "#8976FF",
          "#FFDD65",
          "#54CCFF",
          "#FF9C54",
          "#5AE97A",
          "#FB51CB",
        ],
        grid: {
          borderColor: COLORS.lightGrey,
        },
      },
      series: [
        {
          name: "HRV",
          data: HRV,
        },
        {
          name: "HR",
          data: HR,
        },
        {
          name: "pNN50",
          data: pNN50,
        },
        {
          name: "NN50",
          data: NN50,
        },
        {
          name: "LF/HF",
          data: LFHF,
        },
      ],
    };
  }

  render() {
    return (
      <div class="profileBlock" style={{ height: 235 }}>
        <div class="profileBlockTitle"> Summary Metrics </div>
        <div style={{ display: "flex" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="200"
            width="1140"
          />
        </div>
      </div>
    );
  }
}

export default PatientSummaryChart;
