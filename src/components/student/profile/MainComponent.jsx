import Info from "./Info";
import { useUser } from "../../../context/userContext";

const MainComponent = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <div className=" w-full  max-w-5xl m-4">
        <Info user={user} />
      </div>
    </div>
  );
};

export default MainComponent;
