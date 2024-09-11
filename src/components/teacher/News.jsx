import { useEffect, useState } from "react";
import { format } from "date-fns";
import useFetch from "./../../hooks/useFetch"
const News = () => {
  const [allNews, setAllNews] = useState([]);
  const [showedNews, setShowedNews] = useState([]);
  const [showAll, setShowAll] = useState(false);

  

  const onSuccess = (data) => {
    setAllNews(data);
    setShowedNews(data.slice(0, 4));
  };
  const { error, isLoading, performFetch } = useFetch(
    "/news",
    onSuccess
  );
  useEffect(() => {
    performFetch();
  }, []);

  useEffect(() => {
    if (showAll) {
      setShowedNews(allNews);
    } else {
      setShowedNews(allNews.slice(0, 4));
    }
  }, [showAll]);

  if (allNews.length === 0) {
    return (
      <div>
        <div className="  border border-gray-800 shadow-lg rounded-2xl  font-medium p-4 justify-center flex">
          <h6 className="text-xl font-semibold ">DUYURULAR</h6>
        </div>
        <div className="  text-center text-lg">
          HENÜZ YAYINLANMIŞ DUYURU BULUNMAMAKTADIR.
        </div>
      </div>
    );
  }

  return (
    <div>
      {showedNews.map((news, index) => {
        return (
          <div key={index} className="  rounded-md shadow-md p-8 mb-2">
            <h2 className="text-2xl font-semibold  mb-6">
              Duyurular
            </h2>

            <div className="p-4 mb-4 flex md:flex-row flex-col">
              <div className="flex-shrink-0 ">
                <img
                  src={news?.picture || "https://i.ibb.co/ScxG2ty/announce.png"}
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
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold">
                    BAŞLIK : {news?.title}
                  </h2>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <p>Tarih : {format(new Date(news.date), "dd/MM/yyyy")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-1 pl-4">
              <p>{news?.body}</p>
            </div>
          </div>
        );
      })}

      {allNews.length > 5 ? (
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded w-full"
            onClick={() => setShowAll(!showAll)}
          >
            {!showAll ? "TÜMÜNÜ GÖSTER" : "GİZLE"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default News;
