import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Button } from "@material-tailwind/react";

const DrawComponent = () => {
  const params = useParams();
  const competitionId = params.id;
  const [competitors, setCompetitors] = useState([]);
  const [competition, setCompetition] = useState([]);
  const [selectedCompetitorIndex, setSelectedCompetitorIndex] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [winner, setWinner] = useState(null);
  const [remainingTime, setRemainingTime] = useState(30);
  const [drawIntervalTime, setDrawIntervalTime] = useState(100);

  const onSuccess = (data) => {
    setCompetitors(data.participants);
    setCompetition(data);
  };

  const onSuccessUpdate = (data) => {
    console.log("Competition updated successfully", data);
  };

  const { performFetch } = useFetch(`/competition/${competitionId}`, onSuccess);
  const { performFetch: performUpdate } = useFetch(
    `/competition/${competitionId}`,
    onSuccessUpdate
  );

  useEffect(() => {
    performFetch();
  }, []);

  useEffect(() => {
    if (winner) {
      
      const winners = competition.winner;
      const isAlreadyWon = winners.some(wn=>wn.id == winner.id);
      if(isAlreadyWon){
        console.log("Already Won");
      }else{
        winners.push(winner);
        performUpdate({
          method: "PUT",
          body: JSON.stringify({ ...competition, winner: winners }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      
    }
  }, [winner]);

  const startDraw = () => {
    setIsDrawing(true);
    setWinner(null);

    let lastSelectedIndex = null;

    const drawInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * competitors.length);
      setSelectedCompetitorIndex(randomIndex);
      lastSelectedIndex = randomIndex;
    }, drawIntervalTime);

    const countdownInterval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval);
          clearInterval(drawInterval);
          setIsDrawing(false);
          setWinner(competitors[lastSelectedIndex]);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  return (
    <div className="md:px-10 px-6 md:mt-6 h-screen">
      <div className="mb-4 flex justify-between">
        <label>
          {isDrawing ? "Kalan Zaman:" : "Çekiliş Süresi:"}
          <input
            type="text"
            disabled={isDrawing}
            value={remainingTime}
            onChange={(e) => setRemainingTime(e.target.value)}
            className="border rounded-2xl p-2 ml-2"
          />
          {isDrawing ? "saniye" : null}
        </label>
        <Button>Anasayfaya Git</Button>
      </div>
      <div className="flex justify-center">
        <Button
          className=" md:w-1/4 mb-6"
          disabled={isDrawing}
          onClick={startDraw}
        >
          Çekilişi Başlat{" "}
        </Button>
      </div>

      <div className="grid md:grid-cols-10 md:gap-4 grid-cols-3 gap-1">
        {competitors.map((co, index) => (
          <div
            key={co.id}
            className={`col-span-1 p-2 border rounded-md ${
              index === selectedCompetitorIndex
                ? "bg-red-500 text-white md:text-lg"
                : ""
            }`}
          >
            {co.name}
          </div>
        ))}
      </div>
      {winner && (
        <div className="flex justify-center items-center flex-col md:mt-10 mt-6">
          <h6 className="text-3xl font-bold">KAZANAN:</h6>
          {competition.winner.map((wn) => {
            return (
              <>
              <div className=" border border-gray-800 p-10 md:w-1/2 w-full rounded-2xl mb-3">
              <h2 className="text-xl font-bold"> {wn.name}</h2>
              <h2 className="text-xl font-bold"> {wn.instagram ? `@${wn.instagram}` : "Instagram Adresi Eksik"}</h2>
              </div>
                
              </> 
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DrawComponent;
