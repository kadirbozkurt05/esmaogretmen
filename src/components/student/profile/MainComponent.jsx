import TopProfile from "../TopProfile";
import Info from "./Info";
import { useUser } from "../../../context/userContext";

const MainComponent = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <div className=" w-full  max-w-5xl m-4">
        <div className=" mx-auto grid gap-4 grid-cols-1">
          <div className="flex flex-col sticky top-0 z-10">
            <TopProfile />
          </div>
        </div>

        <Info user={user} />
      </div>
    </div>
  );
};

export default MainComponent;
