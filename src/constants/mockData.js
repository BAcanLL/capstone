export const mockEcg = [
  {
    datetime: "2019/08/04",
    HR: 79,
    HRV: 56,
    pNN50: 18,
    NN50: 67,
    "LF/HF": 1.06,
    anomaly: false,
  },
  {
    datetime: "2019/08/03",
    HR: 86,
    HRV: 53,
    pNN50: 17,
    NN50: 65,
    "LF/HF": 1.02,
    anomaly: false,
  },
  {
    datetime: "2019/08/02",
    HR: 72,
    HRV: 51,
    pNN50: 19,
    NN50: 71,
    "LF/HF": 1.1,
    anomaly: true,
  },
  {
    datetime: "2019/08/01",
    HR: 74,
    HRV: 56,
    pNN50: 17,
    NN50: 64,
    "LF/HF": 1.06,
    anomaly: false,
  },
  {
    datetime: "2019/07/28",
    HR: 69,
    HRV: 59,
    pNN50: 18,
    NN50: 62,
    "LF/HF": 1.03,
    anomaly: false,
  },
  {
    datetime: "2019/07/25",
    HR: 76,
    HRV: 53,
    pNN50: 16,
    NN50: 65,
    "LF/HF": 1.04,
    anomaly: false,
  },
  {
    datetime: "2019/07/24",
    HR: 76,
    HRV: 55,
    pNN50: 19,
    NN50: 61,
    "LF/HF": 1.07,
    anomaly: false,
  },
  {
    datetime: "2019/07/18",
    HR: 86,
    HRV: 53,
    pNN50: 17,
    NN50: 65,
    "LF/HF": 1.02,
    anomaly: true,
  },
  {
    datetime: "2019/07/15",
    HR: 64,
    HRV: 63,
    pNN50: 18,
    NN50: 62,
    "LF/HF": 1.06,
    anomaly: false,
  },
  {
    datetime: "2019/07/14",
    HR: 72,
    HRV: 53,
    pNN50: 18,
    NN50: 61,
    "LF/HF": 1.05,
    anomaly: false,
  },
];

export const mockDataTypes = [
  "HRV",
  "HR",
  "pNN50",
  "NN50",
  "LF/HF",
  "Anomalies",
];

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(currentDate.toString());
    var random = Math.floor(Math.random() * 2) + 1;
    currentDate = currentDate.addDays(random);
  }
  return dateArray;
}

export const gdatetime = getDates(
  new Date("01/10/2021"),
  new Date("04/10/2021")
);
