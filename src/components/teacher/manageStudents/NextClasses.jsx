import { useEffect, useState } from "react";
import getUserInfo from "../../../utils/database/GetData/GetUserInfo";
import { format } from "date-fns";

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
    <div className="bg-gray-800 rounded-md shadow-md mb-6 border p-2">
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
