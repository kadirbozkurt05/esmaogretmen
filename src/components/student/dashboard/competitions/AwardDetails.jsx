export default function AwardDetails({ competition }) {
  return (
    <div className="flex flex-col p-6 md:flex-row gap-6 md:gap-4 w-full">
      <div className="flex flex-none">
        <div className="flex flex-col gap-4 items-center">
          <img
            src={competition.award.pictureOfAward}
            alt="award-image"
            className="max-h-96 w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="p-4 bg-white border rounded-lg shadow-lg h-full overflow-auto max-h-96">
          <ul className="list-inside space-y-2 text-gray-700">
            {competition?.award.bodyOfAward.split("\n").map((line) => {
              const rule = line.substring(0, line.length - 2);

              return <li>{rule}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
