import React from "react";

PatientSummaryMetrics.defaultProps = {
  anomalyCount: 2,
  sentiment: 0.27,
};

function PatientSummaryMetrics(props) {
  return (
    <div class="profileBlock three">
      <div class="profileBlockTitle"> Summary Metrics </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 40, textAlign: "center" }}>
          <div class="bigMetric pink">{props.anomalyCount} </div>{" "}
          <div class="subtitle">No. of Anomolies </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div class="bigMetric green">{props.sentiment} </div>{" "}
          <div class="subtitle">Sentiment Score </div>
        </div>
      </div>
    </div>
  );
}

export default PatientSummaryMetrics;
