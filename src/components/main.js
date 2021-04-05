import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ProfilePage from "./ProfilePage/ProfilePage";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="background-grey">
        <div>
          <Sidebar />
        </div>
        <div style={{ marginLeft: 240 }}>
          <ProfilePage />
        </div>
      </div>
    );
  }
}

export default Main;
