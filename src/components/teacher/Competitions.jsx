import { useEffect, useState } from "react";
import getCompetitions from "../../utils/database/GetData/GetCompetitions";
import { format } from "date-fns";
import updateCompetitionStatus from "../../utils/database/UpdateData/UpdateCompetitionStatus";

const Competitions = () => {
  const [allCompetitions, setAllCompetitions] = useState([]);
  const [showedCompetitions, setShowedCompetitions] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const getAllCompetitions = async () => {
      try {
        const competitions = await getCompetitions();
        await Promise.all(competitions.map(updateCompetitionStatus));
        setAllCompetitions(competitions);
        setShowedCompetitions(competitions.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getAllCompetitions();
  }, []);

  useEffect(() => {
    if (showAll) {
      setShowedCompetitions(allCompetitions);
    } else {
      setShowedCompetitions(allCompetitions.slice(0, 4));
    }
  }, [showAll]);

  if (allCompetitions.length === 0) {
    return (
      <div>
        <h2 className="mb-6 bg-gray-800 border border-gray-800 shadow-lg rounded-2xl text-gray-100 font-medium p-4 justify-center flex">
          <h6 className="text-xl font-semibold text-white">YARIŞMALAR</h6>
        </h2>
        <div className=" text-white text-center text-lg">
          HENÜZ DÜZENLENEN YARIŞMA BULUNMAMAKTADIR.
        </div>
      </div>
    );
  }

  return (
    <div>


      {showedCompetitions.map((competition) => {
        return (
          <div className=" bg-gray-800 rounded-md shadow-md p-8 mb-2">
                  <h2 className="text-2xl font-semibold text-white mb-6">Yarışmalar</h2>

            <div className="p-4 mb-4 flex md:flex-row flex-col">
              <div className="flex-shrink-0 ">
                <img
                  src={
                    competition?.picture ||
                    "https://i.ibb.co/486KHRD/trophy.png"
                  }
                  alt="Map 1"
                  className="w-48 object-cover rounded"
                />
              </div>
              <div className="ml-4 flex flex-col justify-between">
                <div className="flex items-center mb-2">
                  <div className="bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-3 h-3 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold">{competition?.name}</h2>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <p>
                      Son Katılım Tarihi :{" "}
                      {format(competition?.due_date.toDate(), "dd/MM/yyyy")}
                    </p>
                    <p>Durumu : {competition?.isActive ? "Aktif" : "Pasif"}</p>
                    <p>Ödül : {competition?.award?.name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-1 pl-4">
              <p>{competition?.body}</p>
            </div>
          </div>
        );
      })}

      {allCompetitions.length > 5 ? (
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => setShowAll(!showAll)}
          >
            {!showAll ? "TÜMÜNÜ GÖSTER" : "GİZLE"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Competitions;
