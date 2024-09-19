import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useUser } from "../../../context/userContext";

const Homework = () => {
  const { user } = useUser();
  const today = new Date();
  const homeworks = user.homework.filter(
    (homework) => new Date(homework.date) >= today
  );
  const [showAll, setShowall] = useState(false);
  const [showedHomeworks, setShowedHomeworks] = useState(homeworks.slice(0, 9));
  useEffect(() => {
    if (showAll) {
      setShowedHomeworks(homeworks);
    } else {
      setShowedHomeworks(homeworks.slice(0, 9));
    }
  }, [showAll]);

  return (
    <div>
      <div className="mb-4 shadow-lg  rounded-2xl p-4">
        <h6 className="text-l font-semibold text-center">ÖDEVLER</h6>
      </div>

      {homeworks?.length === 0 ? (
        <div className="mb-6 md:mb-0 overflow-y-auto no-scrollbar  shadow-lg  rounded-2xl p-4">
          {" "}
          Şu anda ödeviniz yoktur
        </div>
      ) : (
        <div className=" mb-6 md:mb-0 overflow-y-auto no-scrollbar w-full md:h-full rounded-2xl p-1">
          <div className=" flex flex-col md:h-full justify-center items-center w-full">
            <div className="relative w-full md:h-full flex justify-between pb-6 flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                {showedHomeworks.map((homework, index) => {
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
                          DERS : {homework.title}
                        </h6>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                          SON TARIH:{" "}
                          {format(new Date(homework.date), "dd/MM/yyyy")}
                        </p>
                        <hr />
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                          ÖDEV İÇERİĞİ : {homework.message}
                        </p>
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
        </div>
      )}
    </div>
  );
};

export default Homework;
