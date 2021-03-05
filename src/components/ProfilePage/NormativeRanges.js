import React from "react";
import { COLORS } from "../../styles/colours";

NormativeRanges.defaultProps = {
  anomalyCount: 17,
  sentiment: 27.5,
};

function NormativeRanges(props) {
  return (
    <div class="profileBlock five">
      <div style={{ textAlign: "center", color: COLORS.grey, fontSize: 12 }}>
        {" "}
        Patient Normative Ranges Comparison{" "}
      </div>
      <div style={{ display: "flex" }}>
        {}
        <div
          style={{
            marginRight: 40,
            textAlign: "center",
            color: COLORS.graph.HRV,
          }}
        >
          <div class="bigMetric">{props.anomalyCount} </div>{" "}
          <div class="subtitle">No. of Anomolies </div>
        </div>
        <div
          style={{
            marginRight: 40,
            textAlign: "center",
            color: COLORS.graph.HR,
          }}
        >
          <div class="bigMetric">{props.sentiment} </div>{" "}
          <div class="subtitle">Sentiment Score </div>
        </div>
        <div
          style={{
            marginRight: 40,
            textAlign: "center",
            color: COLORS.graph.blue,
          }}
        >
          <div class="bigMetric">{props.sentiment} </div>{" "}
          <div class="subtitle">Sentiment Score </div>
        </div>
        <div
          style={{
            marginRight: 40,
            textAlign: "center",
            color: COLORS.graph.orange,
          }}
        >
          <div class="bigMetric">{props.sentiment} </div>{" "}
          <div class="subtitle">Sentiment Score </div>
        </div>
        <div
          style={{
            marginRight: 40,
            textAlign: "center",
            color: COLORS.graph.pink,
          }}
        >
          <div class="bigMetric">{props.sentiment} </div>{" "}
          <div class="subtitle">Sentiment Score </div>
        </div>
      </div>
    </div>
  );
}

export default NormativeRanges;
