import { useState } from "react";
import Modal from "../../../general/Modal/Modal";
import { format } from "date-fns";
import { useUser } from "../../../../context/userContext";
import AwardDetails from "./AwardDetails";
import Details from "./Details";
format;

export default function competition({ competition }) {
  const [showDetails, setShowDetails] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyParticipated, setAlreadyParticipated] = useState(false);
  const [selectedCompetition, setSelectedCompetetion] = useState(competition);
  const { user } = useUser();

  const participate = async () => {
    if (selectedCompetition) {
      const particapants = selectedCompetition?.participants || [];

      const alreadyParticipated = particapants.some(
        (element) => element.id === user._id
      );

      if (alreadyParticipated) {
        setSelectedCompetetion(null);
        setAlreadyParticipated(true);
        return;
      }

      particapants.push({
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        instagram: user?.instagram,
      });

      try {
        const url =`${import.meta.env.VITE_HOST_URL}/api`;

        await fetch(`${url}/competition/${selectedCompetition._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...selectedCompetition,
            participants: particapants,
          }),
        });

        setSuccess(true);
        setSelectedCompetetion(null);
      } catch (e) {
        setError(true);
        setSelectedCompetetion(null);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        {success && (
          <Modal
            title="Tebrikler"
            text="Yarışmaya katıldınız. Gerekli şartları yerine getirdiğiniz takdirde ödül için yarışıyor olacaksınız."
            positiveButton="Anladım"
            positiveFunction={() => {
              setSuccess(false);
            }}
          />
        )}
        {alreadyParticipated && (
          <Modal
            title="Zaten Katıldınız"
            text="Bu yarışmaya zaten katıldınız. Gerekli şartları yerine getirdiğiniz takdirde ödül için yarışıyor olacaksınız."
            positiveButton="Anladım"
            positiveFunction={() => {
              setAlreadyParticipated(false);
            }}
          />
        )}
        {error && (
          <Modal
            title="Bir hata oluştu."
            text="Beklenmeyen bir hata oluştu. Lütfen daha sonra yeniden deneyiniz."
            positiveButton="Anladım"
            positiveFunction={() => {
              setError(false);
            }}
          />
        )}

        {selectedCompetition && (
          <Modal
            className="w-full"
            title={competition.title}
            text={
              <div>
                <Details competition={competition} />

                <div className="flex justify-center mt-2">
                  <div
                    className=" text-lg text-black cursor-pointer text-center content-center w-1/2 border border-pink-100 flex p-2 justify-center rounded-lg shadow-lg"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? "Ödül Ayrıntılarını Göster" : "Gizle"}
                  </div>
                </div>

                {!showDetails ? (
                  <AwardDetails competition={competition} />
                ) : null}
              </div>
            }
            positiveButton={"KATIL"}
            negativeButton={"Vazgeç"}
            negativeFunction={() => setSelectedCompetetion(null)}
            positiveFunction={participate}
          />
        )}
      </div>
    </>
  );
}
