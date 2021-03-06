import React from "react";
import Sidebar from "react-sidebar";
import { COLORS } from "../../styles/colours";
import AlphabetList from "./AlphabetList";
import BrandWhite from "../BrandWhite.png";
import "../../index.css";

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
          }}
          key="random1"
          placeholder={"Search..."}
        />
        <AlphabetList
          data={patients}
          style={{ paddingTop: 12 }}
          generateFn={(item, index) => {
            return (
              <button style={{ paddingTop: 6, paddingBottom: 6 }} key={item}>
                {item}
              </button>
            );
          }}
        />
      </div>
    );
  }

  componentDidMount() {
    var url = new URL("https://capstone-server-404.herokuapp.com/therapists/");
    var params = { email: "drjohn@example.com", password: "password" };
    url.search = new URLSearchParams(params).toString();
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={this.patientList}
        docked={true}
        transitions={false}
        // sidebar={<ul style={{listStyle: 'none'}}>{patientList}</ul>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: COLORS.green,
            paddingRight: 10,
            color: "white",
            fontSize: 12,
            width: 230,
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
