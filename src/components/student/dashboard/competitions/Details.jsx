import { format } from "date-fns";

export default function Details({ competition }) {
  return (
    <div className="flex flex-col p-6 md:flex-row gap-6 md:gap-4 w-full">
      <div className="p-4 flex-1border rounded-lg font-trebuchet shadow-lg">
          <div className=" text-lg flex text-black">
            Ödül: {competition.award.titleOfAward}
          </div>
          <div className=" text-lg text-black">
            Son Katılım Tarihi:
            {format(new Date(competition.date), "dd/MM/yyyy")}
          </div>

          <div className=" text-lg text-black">
            Katılan Sayısı:{competition.participants.length}
          </div>
      </div>

        <div className="p-4 flex-1 border rounded-lg shadow-lg h-full overflow-auto max-h-96">
          <ul>
            {competition?.body.split("\n").map((line) => {
              const rule = line.substring(0, line.length - 2);

              return <li>{rule}</li>;
            })}
          </ul>
        </div>
    </div>
  );
}
