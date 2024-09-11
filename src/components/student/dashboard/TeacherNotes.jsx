import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Button, Chip } from "@material-tailwind/react";
import { useUser } from "../../../context/userContext";
import useFetch from "../../../hooks/useFetch";

const TeacherNotes = ({ teacherNotes }) => {
  const { user, refreshUser } = useUser();
  const [showAll, setShowall] = useState(false);
  const [showedNotes, setShowedNotes] = useState(teacherNotes.slice(0, 9));

  useEffect(() => {
    if (showAll) {
      setShowedNotes(teacherNotes);
    } else {
      setShowedNotes(teacherNotes.slice(0, 9));
    }
  }, [showAll]);

  const setIsRead = (id) => {
    const updatedTeacherNotes = teacherNotes.map((note) =>
      note.id === id ? { ...note, isRead: true } : note
    );

    performFetch({
      method: "PUT",
      body: JSON.stringify({ teacherNotes: updatedTeacherNotes }),
    });
  };

  const onSuccess = () => {
    refreshUser();
  };

  const { error, performFetch } = useFetch(`/user/${user._id}`, onSuccess);

  if (error) {
    console.log(error);
  }

  return (
    <div className=" flex flex-col md:h-full justify-center items-center w-full">
      <div className="relative w-full md:h-full flex justify-between pb-6 flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {showedNotes.map((note, index) => {
            return (
              <div
                onClick={() => setIsRead(note.id)}
                key={index}
                role="button"
                className=" border-b border-r flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <div className="grid mr-4 place-items-center">
                  <img
                    alt="candice"
                    src="https://www.stockvault.net/data/2017/03/09/231443/preview16.jpg"
                    className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                  />
                </div>
                <div className="w-full">
                  <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    KONU : {note.title}
                  </h6>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    TARIH: {format(new Date(note.date), "dd/MM/yyyy")}
                  </p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    {note.message}
                  </p>
                  <br />
                  <br />
                  <div className="flex justify-between">
                    <p className="flex self-end font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      ÖĞRETMEN : {note.teacher}
                    </p>
                    {note.isRead ? (
                      <Chip
                        variant="ghost"
                        color="green"
                        size="sm"
                        className="ml-6"
                        value="OKUNDU"
                        icon={
                          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                        }
                      />
                    ) : (
                      <Chip
                        variant="ghost"
                        color="red"
                        size="sm"
                        className="ml-6"
                        value="OKUNMADI"
                        icon={
                          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        {!showAll ? (
          <div
            onClick={() => {
              setShowall(true);
            }}
            className="flex w-max self-center gap-4 mt-12"
          >
            <Button color="red">HEPSİNİ GÖSTER</Button>
          </div>
        ) : (
          <div
            onClick={() => {
              setShowall(false);
            }}
            className="flex w-max self-center gap-4 mt-12"
          >
            <Button color="red">GİZLE</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherNotes;
