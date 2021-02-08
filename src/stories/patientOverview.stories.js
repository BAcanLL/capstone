import PatientOverview from "../components/patientOverview";

const Template = () => <PatientOverview />;

export default {
  title: "Example/PatientOverview",
  component: PatientOverview,
};

// export const Template;
export const Primary = Template.bind({});
Primary.args = {};
