import { useEffect, useState } from "react";
import { format } from "date-fns";
import useFetch from "../../../hooks/useFetch";
import { Button } from "@material-tailwind/react";

const PreviousClasses = ({ student }) => {
  const [classes, setClasses] = useState(null);
  const [showAll, setShowall] = useState(false);
  const [showedClasses, setShowedClasses] = useState([]);
  const [requestBody, setRequestBody] = useState(null);
  const today = new Date();

  useEffect(() => {
    const classesFromDb = student?.scheduledClasses;
    const filteredClasses = classesFromDb?.filter(
      (clas) => new Date(clas.date) < today
    );
    setClasses(filteredClasses);
  }, []);

  useEffect(() => {
    const lessons = student.scheduledClasses;

    console.log(lessons);
    

    if (requestBody) {
      lessons.forEach((lesson) => {
        if (lesson.id === requestBody.classId) {
          lesson.isDone = true;
        }
      });

      performFetch({
        method: "PUT",
        body: JSON.stringify({scheduledClasses:lessons}),
      });
    }
  }, [requestBody]);

  const onSuccess = (data) => {
    console.log(data);
  };

  const { error, isLoading, performFetch } = useFetch(
    `/user/${student._id}`,
    onSuccess
  );

  useEffect(() => {
    if (showAll) {
      setShowedClasses(classes);
    } else {
      setShowedClasses(classes?.slice(0, 4));
    }
  }, [showAll, classes]);

  if (error) {
    //MODAL
  }

  return (
    <>
      <div className="mb-6 md:mb-0 h-96 overflow-y-auto no-scrollbar border   rounded-2xl">
        <div className="relative w-full md:h-full flex justify-between pb-6 flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            {showedClasses?.map((clas, index) => {
              return (
                <div
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
                  <div>
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      DERS : {clas.title}
                    </h6>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      TARIH: {format(new Date(clas.date), "dd/MM/yyyy")}
                    </p>
                  </div>
                  <div>
                    {!clas?.isDone ? (
                      <>
                        {" "}
                        <label htmlFor="checkbox" className="mr-2">
                          Yapıldı olarak işaretle!
                        </label>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            console.log(clas.id);
                            
                            const reqBody = {
                              classId: clas?.id,
                              isDone: e.target.checked,
                            };
                            setRequestBody(reqBody);
                          }}
                        />
                      </>
                    ) : (
                      <div className="rounded-full h-10 w-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#83f745"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                          />
                        </svg>{" "}
                      </div>
                    )}
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
              className="flex w-max self-center gap-4"
            >
              <Button color="red">HEPSİNİ GÖSTER</Button>
            </div>
          ) : (
            <div
              onClick={() => {
                setShowall(false);
              }}
              className="flex w-max self-center gap-4"
            >
              <Button color="red">GİZLE</Button>
            </div>
          )}
        </div>
      </div>

      {/* <div className="bg-gray-800 rounded-md shadow-md mb-6 border p-2">
      <div className="flex flex-col ">
        <ol>
          {previousLessons.map((previousClass,index) => {
            return (
              <li key={index} className=" text-white  border p-2 rounded-xl mb-1 flex flex-row justify-between">
                <div>
                  <h1>Ders : {previousClass?.title} </h1>
                  <h6>
                    Tarih : {format(new Date(previousClass.date.seconds*1000), "dd/MM/yyyy")}{" "}
                  </h6>
                </div>
                <div></div>
                <div>
                  {!previousClass?.isDone ? (
                    <>
                      {" "}
                      <label htmlFor="checkbox" className="mr-2">
                        Yapıldı olarak işaretle!
                      </label>
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          const reqBody = {
                            userId:id,
                            classId:previousClass?.id,
                            isDone:e.target.checked,
                          }
                          setRequestBody(JSON.stringify(reqBody))

                        }}
                      />
                    </>
                  ) : (
                    <div className="rounded-full h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#83f745"
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                        />
                      </svg>{" "}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div> */}
    </>
  );
};

export default PreviousClasses;
