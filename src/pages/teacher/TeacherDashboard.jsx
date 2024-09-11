import MainComponent from "../../components/teacher/MainComponent";

const TeacherDashboard = ({ user }) => {
  return (
    <div className="flex justify-center px-6 md:px-10 flex-col">
      <MainComponent user={user} />
    </div>
  );
};

export default TeacherDashboard;
