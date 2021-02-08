import React from "react";
import Sidebar from "react-sidebar";
import "../index.css";
import { COLORS } from "../styles/colours";
import AlphabetList from "./AlphabetList";
import BrandWhite from "./BrandWhite.png";
import Asap from "../index.css";

const patients = [
  "Max Abdullah",
  "Allison, Allvares",
  "Huang, Steven",
  "Hatter, Mad",
  "Harry, Potter",
  "Lori Barker",
  "Katniss Everdeen",
  "Sally Barker",
  "Alyson Brown",
  "Cadwell, Rebecca",
  "Curie, Marie",
];

const patientObjs = [
  { firstName: "Lori", lastName: "Barker" },
  { firstName: "Max", lastName: "Abdullah" },
  { firstName: "Alyson", lastName: "Brown" },
  { firstName: "Rebecca", lastName: "Cadwell" },
];
patientObjs.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

let patientDisplayList = [];
let alphabet = new Set();
let processList = (patients) => {
  for (var i = 0; i < patients.length; i++) {}
};

// var patientList = patients.map((patient) =>
//     <li style={{marginBottom: 15}}>{patient}</li>
// )

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.patientList = (
      <div style={{ marginLeft: 20 }}>
        <img
          src={BrandWhite}
          style={{
            height: 30,
            marginTop: 25,
          }}
        ></img>
        <input
          class="patientSearchInput"
          style={{
            borderRadius: 7,
            border: "none",
            marginTop: 25,
            marginBottom: 10,
            paddingLeft: 5,
            padding: 6,
            fontSize: 11,
            fontFamily: Asap,
          }}
          key="random1"
          placeholder={"Search..."}
          //  onChange={(e) => setKeyword(e.target.value)}
        />
        <AlphabetList
          data={patients}
          style={{ paddingTop: 12 }}
          generateFn={(item, index) => {
            return (
              <div
                style={{ fontFamily: Asap, paddingTop: 6, paddingBottom: 6 }}
                key={item}
              >
                {item}
              </div>
            );
          }}
        />
      </div>
    );
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={this.patientList}
        docked={true}
        // sidebar={<ul style={{listStyle: 'none'}}>{patientList}</ul>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: COLORS.green,
            paddingRight: 10,
            color: "white",
            fontSize: 12,
            width: 210,
          },
        }}
        class="sidebar"
      >
        {/* <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button> */}
      </Sidebar>
    );
  }
}

export default PatientList;
