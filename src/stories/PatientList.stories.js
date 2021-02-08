import PatientList from "../components/Sidebar";

const Template = () => <PatientList />;

export default {
  title: "Example/PatientList",
  component: PatientList,
};

// export const Template;
export const Primary = Template.bind({});
Primary.args = {};
