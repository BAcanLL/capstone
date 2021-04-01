import React from "react";
import { COLORS } from "../../styles/colours";
import "../../index.css";
import Chart from "react-apexcharts";
import { gdatetime } from "../../constants/mockData";

// let datetimes = gdatetime
// let HR = [],
//   HRV = [],
//   pNN50 = [],
//   NN50 = [],
//   LFHF = [],
//   anomaly = [],
//   anomalyCount = [],
//   datetime = [];

// let anomalyMarkers = [];

// const processECG = (mockEcg) => {
//   console.log("hello")
//   console.log(mockEcg[0])
//   mockEcg.forEach(function (ecg) {
//     if (ecg) {
//       HR.push(ecg.hr);
//       HRV.push(ecg.hrv);
//       pNN50.push(ecg.pnn50);
//       NN50.push(ecg.nn50);
//       LFHF.push(ecg.lfhf);
//       anomaly.push(ecg.anomaly);
//       datetime.push(ecg.recorded_date);
//     }
//   });

// datetimes = datetimes.slice(0, HR.length -1)

//   anomaly.forEach(function (a, i) {
//     if (a) {
//       anomalyCount.push(i);
//     }
//   });

//   anomalyCount.forEach(function (a) {
//     for (var i = 0; i < 5; i++) {
//       anomalyMarkers.push({
//         seriesIndex: i,
//         dataPointIndex: a,
//         fillColor: COLORS.red,
//         strokeColor: COLORS.white,
//         size: 7,
//       });
//     }
//   });

// }

class PatientSummaryChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      options: {
        markers: {
          size: 5,
          discrete: props.anomalyMarkers,
        },
        xaxis: {
          type: "datetime",
          labels: { show: false },
          categories: props.datetimes,
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
          data: props.HRV,
        },
        {
          name: "HR",
          data: props.HR,
        },
        {
          name: "pNN50",
          data: props.pNN50,
        },
        {
          name: "SDNN",
          data: props.NN50,
        },
        {
          name: "LF/HF",
          data: props.LFHF,
        },
      ],
    };
  }

  // componentWillMount () {
  //   var url = new URL("https://capstone-server-404.herokuapp.com/patients/1/ecg/data");
  //   // var params = { email: "drjohn@example.com", password: "password", password_confirmation: "password", prefix: "Dr.", first_name: "Alice", last_name: "Chan", profession: "Therapist" };
  //   fetch(url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Access-Contol-Allow-Origin': '*',
  //       Accept: 'application/json',
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "token": "1df29b3b92",
  //       "patient_id": 1,
  //       "time_range": "all"
  //   }),
  //   }).then((response) => response.json()).then((data) => {
  //     this.setState({data: data});
  //     console.log(data)
  //     processECG(data)
  //   });

  // }

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

PatientSummaryChart.defaultProps = {
  HR: [],
  HRV: [],
  pNN50: [],
  NN50: [],
  LFHF: [],
  anomaly: [],
  anomalyMarkers: [],
  anomalyCount: [],
  datetimes: [],
};

export default PatientSummaryChart;
