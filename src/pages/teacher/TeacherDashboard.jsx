import MainComponent from "../../components/teacher/MainComponent";

const TeacherDashboard = ({ user }) => {
  return (
    <div className="flex justify-center flex-col">
      <MainComponent user={user} />
    </div>
  );
};

export default TeacherDashboard;
