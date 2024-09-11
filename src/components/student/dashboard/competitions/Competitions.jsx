import { useEffect, useState } from "react";
import { Button, Checkbox } from "@material-tailwind/react";
import CompetitionCard from "./CompetitionCard";
import SelectedCompetition from "./SelectedCompetition";

const Competitions = ({ competitions }) => {
  const [hide, setHide] = useState(false);
  const [showAll, setShowall] = useState(false);
  const [selectedCompetition, setSelectedCompetetion] = useState(null);
  const [showedCompetitions, setShowedCompetitions] = useState(
    competitions.slice(0, 9)
  );

  const cardBodyText =
    "Yarışma hakkında ayrıntılı bilgi almak ve katılım şartlarını görüntülemek için lütfen 'Ayrıntılı Bilgi' butonuna tıklayın. Eğer bunun yerine 'Sona Erdi' yazısını görüyorsanız yarışmanın son katılım tarihi geçmiş anlamına gelmektedir.";

  useEffect(() => {
    if (showAll) {
      setShowedCompetitions(competitions);
    } else {
      setShowedCompetitions(competitions.slice(0, 9));
    }
  }, [showAll]);
  useEffect(() => {
    if (hide) {
      setShowedCompetitions(
        competitions.filter((competition) => competition.isActive)
      );
    } else {
      setShowedCompetitions(competitions);
    }
  }, [hide]);

  return (
    <div className=" flex flex-col justify-center items-center w-full">
      {selectedCompetition && (
        <SelectedCompetition competition={selectedCompetition} />
      )}
      <div className="relative w-full md:h-full flex justify-between pb-6 flex-col text-gray-700 ">
        <div className=" flex justify-end">
          <Checkbox
            onChange={() => setHide(!hide)}
            label="SONA ERENLERİ GİZLE"
          />
        </div>
        <nav className="flex min-w-[240px] flex-col gap-3 p-2 font-sans text-base font-normal text-blue-gray-700">
          {showedCompetitions.map((competition, index) => {
            return (
              <div className="gap-5 flex flex-col" key={index}>
                <CompetitionCard
                  title={competition.title}
                  body={cardBodyText}
                  imgSrc={competition.picture}
                  buttonText={
                    competition.isActive ? "Ayrıntılı Bilgi" : "Sona Erdi"
                  }
                  onClick={
                    competition.isActive
                      ? () => {
                          setSelectedCompetetion(null);
                          setTimeout(() => {
                            setSelectedCompetetion(competition);
                          }, 0);
                        }
                      : null
                  }
                />
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

export default Competitions;
