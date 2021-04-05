import React from "react";
import Sidebar from "react-sidebar";
import { COLORS } from "../../styles/colours";
import AlphabetList from "./AlphabetList";
import BrandWhite from "../BrandWhite.png";
import "../../index.css";

const patients = [
  "Max Abdullah",
  "Allison Alvares",
  "Avril Lee",
  "Michael Brooks",
  "Harry Evans",
  "Hannah Turco",
  "Lori Barker",
  "Katniss Everdeen",
  "Sally Barker",
  "Christina Lin",
  "Alyson Brown",
  "Lillian Zhang",
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
              <button
                className={`${item == "Lori Barker" ? "selectedButton" : ""}`}
                style={{ paddingTop: 8, paddingBottom: 8 }}
                key={item}
              >
                {item}
              </button>
            );
          }}
        />
      </div>
    );
  }
  // resp = await fetch("https://capstone-server-404.herokuapp.com/" + 'patients/login', {
  //   method: 'POST',
  //   mode: 'no-cors',
  //   headers: {
  //     Accept: 'application/json',
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //       email: 'sara@example.com',
  //       password: 'password',
  //   }),
  // });
  componentDidMount() {
    var url = new URL(
      "https://capstone-server-404.herokuapp.com/therapists/7/patients"
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
      body: JSON.stringify({ token: "d313de668d" }),
    })
      .then((response) => response.json())
      .then((data) => console.log("This is patients", data));

    // var url = new URL("https://capstone-server-404.herokuapp.com/therapists");
    // var params = { email: "drjohn@example.com", password: "password", password_confirmation: "password", prefix: "Dr.", first_name: "Alice", last_name: "Chan", profession: "Therapist" };
    // url.search = new URLSearchParams(params).toString();
    // fetch(url, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Access-Contol-Allow-Origin': '*',
    //     Accept: 'application/json',
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(params),
    // }).then((response) => response.json()).then((data) => console.log("This is your data", data))
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
