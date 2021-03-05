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

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <PatientSummaryMetrics />
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <PatientSummaryChart />
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
