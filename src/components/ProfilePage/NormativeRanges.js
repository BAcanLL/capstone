import React from "react";
import { COLORS } from "../../styles/colours";

NormativeRanges.defaultProps = {
  HRV: 53,
  HR: 76,
  pNN50: 26,
  NN50: 27.5,
  LFHF: 1.08,
  SDNN: 88,
  age: 30,
};

const getRanges = (age, gender) => {
  if (age < 30) {
    return {
      HRV: [53, 18],
      HR: [76, 10],
      pNN50: [26, 13],
      LFHF: [3.33, 3.47],
      SDNN: [88, 20],
    };
  } else if (age >= 30 && age < 49) {
    return {
      HRV: [34, 13],
      HR: [76, 7],
      pNN50: [13, 10],
      LFHF: [1.08, 1.88],
      SDNN: [65, 14],
    };
  } else {
    return {
      HRV: [22, 8],
      HR: [78, 11],
      pNN50: [4, 5],
      LFHF: [1.08, 1.88],
      SDNN: [46, 18],
    };
  }
};

function NormativeRanges(props) {
  var ranges = getRanges(props.age);
  console.log("helloooooo");
  console.log(ranges);
  return (
    <div class="profileBlock five">
      <div style={{ textAlign: "center", color: COLORS.grey, fontSize: 12 }}>
        {" "}
        Patient Normative Ranges Comparison{" "}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 15,
          marginLeft: 20,
          paddingLeft: 45,
        }}
      >
        {}
        <div
          style={{
            marginRight: 65,
            textAlign: "center",
            color: COLORS.graph.HRV,
          }}
        >
          <div class="subtitle">HRV </div>
          <div class="bigMetric">{ranges.HRV[0]} </div>{" "}
          <div class="subtitleSmall">
            {ranges.HRV[0] - ranges.HRV[1]} - {ranges.HRV[0] + ranges.HRV[1]}
          </div>
        </div>
        <div
          style={{
            marginRight: 65,
            textAlign: "center",
            color: COLORS.graph.HR,
          }}
        >
          <div class="subtitle">HR</div>
          <div class="bigMetric">{ranges.HR[0]} </div>{" "}
          <div class="subtitleSmall">
            {ranges.HR[0] - ranges.HR[1]} - {ranges.HR[0] + ranges.HR[1]}
          </div>
        </div>
        <div
          style={{
            marginRight: 65,
            textAlign: "center",
            color: COLORS.graph.pNN50,
          }}
        >
          <div class="subtitle">pNN50 </div>
          <div class="bigMetric">{ranges.pNN50[0]} </div>{" "}
          <div class="subtitleSmall">
            {ranges.pNN50[0] - ranges.pNN50[1]} -{" "}
            {ranges.pNN50[0] + ranges.pNN50[1]}
          </div>
        </div>
        <div
          style={{
            marginRight: 65,
            textAlign: "center",
            color: COLORS.graph.NN50,
          }}
        >
          <div class="subtitle"> SDNN</div>
          <div class="bigMetric">{ranges.SDNN[0]} </div>{" "}
          <div class="subtitleSmall">
            {ranges.SDNN[0] - ranges.SDNN[1]} -{" "}
            {ranges.SDNN[0] + ranges.SDNN[1]}
          </div>
        </div>
        <div
          style={{
            marginRight: 65,
            textAlign: "center",
            color: COLORS.graph.LF,
          }}
        >
          <div class="subtitle">LF/HF</div>
          <div class="bigMetric">{ranges.LFHF[0]} </div>{" "}
          <div class="subtitleSmall">
            {ranges.LFHF[0]} - {ranges.LFHF[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NormativeRanges;
