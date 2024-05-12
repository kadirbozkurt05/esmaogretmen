import { useEffect, useState } from "react";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import { format } from "date-fns";
import updateLessonDone from "../../../utils/database/UpdateData/UpdateLessonDone";

const NextClasses = ({ id }) => {
  const [nextClasses, setNextClasses] = useState([]);
  useEffect(() => {
    const getUserFromDb = async () => {
      const userFromDb = await getUserInfo(id);
      setNextClasses(userFromDb?.nextClasses);
    };
    getUserFromDb();
  }, []);

  return (
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border h-72 p-2">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
          <ol>
            {nextClasses.map((nextClass) => {
              return (
                <li className=" text-white border p-2 rounded-xl mb-1 flex flex-row justify-between">
                  <div>
                    <h1>Ders : {nextClass?.title} </h1>
                    <h6>
                      Tarih : {format(nextClass.date.toDate(), "dd/MM/yyyy")}{" "}
                    </h6>
                  </div>
                  <div></div>
                  <div>
                    {!nextClass?.isDone ? (
                      <>
                        {" "}
                        <label htmlFor="checkbox" className="mr-2">
                          Yapıldı olarak işaretle!
                        </label>
                        <input
                          type="checkbox"
                          onChange={async (e) => {
                            console.log(
                              "E.CHECKED",
                              id,
                              nextClass?.id,
                              e.target.checked
                            );
                            await updateLessonDone(
                              id,
                              nextClass?.id,
                              e.target.checked
                            );
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
      </div>
    </div>
  );
};

export default NextClasses;
