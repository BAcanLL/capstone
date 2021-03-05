import React from "react";

PatientOverview.defaultProps = {
  age: "37",
  email: "loribarker@gmail.com",
  height: "163 cm",
  weight: "125 lbs",
};

function PatientOverview(props) {
  const greeting = "Hello Function Component!";

  return (
    <div class="profileBlock one">
      <div class="profileBlockTitle"> Overview </div>
      <table>
        <tbody>
          <tr>
            <td class="profileBlockLabel">Age</td>
            <td>{props.age}</td>
          </tr>
          <tr>
            <td class="profileBlockLabel">Email</td>
            <td>{props.email}</td>
          </tr>
          <tr>
            <td class="profileBlockLabel">Height</td>
            <td>{props.height}</td>
          </tr>
          <tr>
            <td class="profileBlockLabel">Weight</td>
            <td>{props.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientOverview;
