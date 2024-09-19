import { useState } from "react";
import { Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import AddNews from "./AddNews";
import AddCompetition from "./AddCompetition";
import Competitions from "./Competitions";
import News from "./News";
import Modal from "../general/Modal/Modal";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import ProfileCard from "./ProfileCard";
import Info from "./profile/Info";
import Student from "./Student";
import MainComponentManage from "./manageStudents/MainComponentManage";
import { useUser } from "../../context/userContext";
import AllStudents from "./AllStudents";
import useFetch from "../../hooks/useFetch";
import SettingsComponent from "../student/settings/SettingsComponent";

const MainComponent = ({user}) => {
  const {refreshUser} = useUser();
  const [showModal, setShowModal] = useState(false);
  const newsComponent = <News />;
  const competitionComponent = <Competitions />;
  const addNewsComponent = <AddNews />;
  const addCompetitionComponent = <AddCompetition />;
  const profileComponent = <Info user={user} />;
  const settingsComponent = <SettingsComponent />;
  const allStudentsComponent = <AllStudents />;
  

  const selectedStudent = (studentId)=> {    

    
    setSelectedComponent(<MainComponentManage
      id={studentId}
      teacher={`${user.firstName} ${user.lastName}`}
    />)
    }
  ;
  const studentsComponent = (
    <div
      className={`grid grid-cols-1 ${
        user?.students.length >= 2 ? "md:grid-cols-2" : "md:grid-cols-1"
      } gap-4 items-center`}
    >
      {user?.students.map((student, index) => {
        return (
          <div key={index}>
            <Student
              onClick={async (studentId) => {
                console.log("Selected student ID:", studentId);
                selectedStudent(studentId);  
              }}
              student={student}
            />
          </div>
        );
      })}
    </div>
  );
  

  const [selectedComponent, setSelectedComponent] = useState(user && studentsComponent);

  const onSuccess = () =>{
    refreshUser();
  }
  const {performFetch, error, isLoading} = useFetch("/auth/logout",onSuccess);

  const logout = () => {
    setShowModal(true);
  };
  const approved = async () => {
    setShowModal(false);
    performFetch({
      credentials:"include"
    })
  };
  const cancelled = () => {
    setShowModal(false);
  };

  return (
    <>
    <div>
      {showModal && (
        <Modal
          title={"Çıkış Yap"}
          text={
            "Çıkış yapmak istediğinize emin misiniz? Kaydedilen giriş bilgileri silinecektir."
          }
          positiveButton={"Çıkış Yap"}
          negativeButton={"Vazgeç"}
          positiveFunction={approved}
          negativeFunction={cancelled}
        />
      )}
      <div className="flex w-full md:px-10 flex-col md:flex-row">
        <Card className=" static md:h-screen md:max-w-[20rem] p-4 md:flex-1 md:w-32 shadow-xl shadow-blue-gray-900/5">
          <div>
            <ProfileCard />
          </div>

          <List>
            <ListItem onClick={() => user && setSelectedComponent(studentsComponent)}>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </ListItemPrefix>
              ÖĞRENCİLERİM
            </ListItem>
            <ListItem onClick={() => user && setSelectedComponent(addNewsComponent)}>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </ListItemPrefix>
              DUYURU EKLE
            </ListItem>
            <ListItem
              onClick={() => user && setSelectedComponent(addCompetitionComponent)}
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
              </ListItemPrefix>
              YARIŞMA EKLE
            </ListItem>
            <ListItem onClick={() => user && setSelectedComponent(newsComponent)}>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              DUYURULAR
            </ListItem>
            <ListItem
              onClick={() =>user && setSelectedComponent(competitionComponent)}
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </ListItemPrefix>
              YARIŞMALAR
            </ListItem>
            <ListItem
              onClick={() =>user && setSelectedComponent(allStudentsComponent)}
            >
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </ListItemPrefix>
              TÜM ÖĞRENCİLER
            </ListItem>
            <ListItem onClick={() =>user&& setSelectedComponent(profileComponent)}>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              PROFİL
            </ListItem>
            <ListItem onClick={() =>user && setSelectedComponent(settingsComponent)}>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              AYARLAR
            </ListItem>
            <ListItem onClick={logout}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              ÇIKIŞ YAP
            </ListItem>
          </List>
        </Card>

        <div className="flex w-full flex-col md:flex-1 md:px-6 md:w-64 items-center">
          <div className=" w-full m-4">
            <div className="flex gap-4 flex-col w-full">
              {selectedComponent}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>

  );
};

export default MainComponent;
