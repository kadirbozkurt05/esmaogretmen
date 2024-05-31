import TopProfile from "../TopProfile";
import { useEffect, useState } from "react";
import Homework from "./Homework";
import PreviousClasses from "./PreviousLessons";
import TeacherNotes from "./TeacherNotes";
import useFetch from "../../../hooks/useFetch";
import { useUser } from "../../../context/userContext";
import ScheduledClasses from "./ScheduledClasses";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import ChangePassword from "./../settings/ChangePassword";
import ProfileCard from "../ProfileCard";
const MainComponent = () => {
  const [homeworkList, setHomeworkList] = useState([]);
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [previousClasses, setPreviousClasses] = useState([]);
  const [teacherNotes, setTeacherNotes] = useState([]);
  const { user } = useUser();
  const today = new Date();

  const homeworkComponent = (
    <div>
      <div className="mb-4 shadow-lg  rounded-2xl p-4">
        <h6 className="text-l font-semibold text-center">
          ÖDEVLER
        </h6>
      </div>

      {homeworkList?.length === 0 ? (
        <div className="mb-6 md:mb-0 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {" "}
          Şu anda ödeviniz yoktur
        </div>
      ) : (
        <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {homeworkList.map((homework, index) => {
            return (
              <Homework
                title={homework?.title}
                message={homework.message}
                date={homework.date}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );

  const scheduledClassesComponent = (
    <div>
      <div className="mb-4 shadow-lg  rounded-2xl p-4">
        <h6 className="text-l font-semibold text-center">
          SIRADAKİ DERSLER
        </h6>
      </div>
      {scheduledClasses.length === 0 ? (
        <div className="mb-6 md:mb-0 max-h-96 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {" "}
          Planlanmış Dersiniz Bulunmamaktadır.
        </div>
      ) : (
        <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {scheduledClasses.map((nextClass, index) => {
            return (
              <ScheduledClasses
                key={index}
                name={nextClass?.title}
                teacher={nextClass?.teacher}
                date={nextClass?.date}
              />
            );
          })}
        </div>
      )}
    </div>
  );

  const previousClassesComponent = (
    <div className="flex flex-col h-screen">
      <div className="mb-4  shadow-lg  rounded-2xl p-4">
        <h6 className="text-l font-semibold text-center">
          GEÇMİŞ DERSLER
        </h6>
      </div>

      {previousClasses.length === 0 ? (
        <div className="mb-6 md:mb-0    rounded-2xl p-4">
          {" "}
          Geçmiş Dersiniz Bulunmamaktadır.
        </div>
      ) : (
        <div className=" mb-6 md:mb-0 overflow-y-auto no-scrollbar w-full h-full rounded-2xl p-4">
          <PreviousClasses classes={previousClasses} />
        </div>
      )}
    </div>
  );

  const teacherNotesComponent = (
    <div>
      <div className="mb-4 bg-gray-800 border   rounded-2xl p-4">
        <h6 className="text-l font-semibold text-center">
          ÖĞRETMEN NOTLARI
        </h6>
      </div>

      {teacherNotes.length === 0 ? (
        <div className="mb-6 md:mb-0 max-h-96 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {" "}
          Henüz öğretmeniniz sizin için bir not yazmamış.
        </div>
      ) : (
        <div className=" mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {teacherNotes.map((note, index) => {
            return (
              <TeacherNotes
                title={note?.title}
                message={note?.message}
                date={note?.date}
                teacher={note?.teacher}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );

  const settngsComponent = <ChangePassword />;

  const [selectedComponent, setSelectedComponent] = useState(homeworkComponent);

  useEffect(() => {
    performFetch();
  }, []);

  const onSuccess = (data) => {
    const classes = data?.scheduledClasses;
    const previous = classes.filter(
      (clas) => new Date(clas.date.seconds * 1000) < today
    );
    const next = classes.filter(
      (clas) => new Date(clas.date.seconds * 1000) >= today
    );
    setScheduledClasses(next);
    setPreviousClasses(previous);
    setTeacherNotes(data?.teacherNotes);
    setHomeworkList(data?.homework);
  };

  const { error, isLoading, performFetch } = useFetch(
    `/user/${user}`,
    onSuccess
  );

  if (error) {
    console.log("Error : ", error);
  }

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <Card className="h-screen w-full md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-6">
          <ProfileCard />
        </div>

        <List>
          <ListItem onClick={() => setSelectedComponent(homeworkComponent)}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            ÖDEVLER
          </ListItem>
          <ListItem
            onClick={() => setSelectedComponent(previousClassesComponent)}
          >
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            GEÇMİŞ DERSLER
          </ListItem>
          <ListItem
            onClick={() => setSelectedComponent(scheduledClassesComponent)}
          >
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            GELECEK DERSLER
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem onClick={() => setSelectedComponent(teacherNotesComponent)}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            ÖĞRETMEN NOTLARI
          </ListItem>
          <ListItem onClick={() => setSelectedComponent(settngsComponent)}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            AYARLAR
          </ListItem>
          <ListItem onClick={() => setSelectedItem("e-6")}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

      <div className="flex w-full flex-col items-center">
        <div className=" w-full m-4">
          <div className="flex gap-4 flex-col w-full">{selectedComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
