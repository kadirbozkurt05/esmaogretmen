import Footer from "./components/general/Footer/Footer";
import Nav from "./components/general/Nav/Nav";
import MainPage from "./pages/general/MainPage";
import { useUser } from "./context/userContext";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";

function App() {
  const { user, refreshUser } = useUser();
  const { isLoading, performFetch } = useFetch("/start-server", () => {
    refreshUser();
  });

  useEffect(() => {
    performFetch();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex flex-row justify-center items-center gap-6 bg-orange-300 py-2 text-center">
          <div className="relative w-5 h-5 border-t-4 border-b-4 border-red-500 rounded-full animate-spin">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-red-400 to-yellow-500 opacity-30 animate-pulse"></div>
          </div>
          <div className="text-center">
            Şu anda veriler yükleniyor. Bir kaç saniye sonra bu uyarıyı
            görmeyeceksiniz.
          </div>
          <div className="relative w-5 h-5 border-t-4 border-b-4 border-red-500 rounded-full animate-spin">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-red-400 to-yellow-500 opacity-30 animate-pulse"></div>
          </div>
        </div>
      )}
      <Nav user={user} />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
