import React from "react";
import { COLORS } from "../../styles/colours";
import "../../index.css";
import PatientList from "../Sidebar/Sidebar";
import PatientOverview from "./patientOverview";
import PatientSummaryMetrics from "./patientSummaryMetrics";
import PatientChart from "./PatientChart";
import PatientSummaryChart from "./PatientSummaryChart";
import NormativeRanges from "./NormativeRanges";
import HRVComparison from "./HRVComparison";
import { gdatetime } from "../../constants/mockData";

let datetimes = gdatetime;
let HR = [],
  HRV = [],
  pNN50 = [],
  NN50 = [],
  LFHF = [],
  anomaly = [],
  anomalyCount = [],
  datetime = [];

let anomalyMarkers = [];
const processECG = (mockEcg) => {
  console.log("hello");
  console.log(mockEcg[0]);
  mockEcg.forEach(function (ecg) {
    if (ecg) {
      HR.push(ecg.hr);
      HRV.push(ecg.hrv);
      pNN50.push(ecg.pnn50);
      NN50.push(ecg.nn50);
      LFHF.push(ecg.lfhf);
      anomaly.push(ecg.anomaly);
      datetime.push(ecg.recorded_date);
    }
  });

  datetimes = datetimes.slice(0, HR.length - 1);

  anomaly.forEach(function (a, i) {
    if (a) {
      anomalyCount.push(i);
    }
  });

  anomalyCount.forEach(function (a) {
    for (var i = 0; i < 5; i++) {
      anomalyMarkers.push({
        seriesIndex: i,
        dataPointIndex: a,
        fillColor: COLORS.red,
        strokeColor: COLORS.white,
        size: 7,
      });
    }
  });
};

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var url = new URL(
      "https://capstone-server-404.herokuapp.com/patients/1/ecg/data"
    );
    // var params = { email: "drjohn@example.com", password: "password", password_confirmation: "password", prefix: "Dr.", first_name: "Alice", last_name: "Chan", profession: "Therapist" };
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Contol-Allow-Origin": "*",
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        token: "1df29b3b92",
        patient_id: 1,
        time_range: "all",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(data);
        processECG(data);
      });
  }

  render() {
    return (
      <div class="background-grey">
        <div style={{ display: "flex" }} class="rowOne">
          <div style={{ marginRight: 15 }}>
            <PatientOverview />
          </div>
          <div style={{ marginRight: 15 }}>
            {" "}
            <PatientChart />
          </div>
          <div>
            {" "}
            <PatientSummaryMetrics anomalyCount={anomalyCount.length} />
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <PatientSummaryChart
            HR={HR}
            HRV={HRV}
            pNN50={pNN50}
            NN50={NN50}
            LFHF={LFHF}
            anomaly={anomaly}
            anomalyMarkers={anomaly}
            anomalyCount={anomalyCount}
            datetimes={datetimes}
          />
        </div>
        <div style={{ marginTop: 15, display: "flex" }}>
          <div style={{ marginRight: 15 }}>
            <HRVComparison />
          </div>
          <div style={{ marginRight: 15 }}>
            {" "}
            <NormativeRanges />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
