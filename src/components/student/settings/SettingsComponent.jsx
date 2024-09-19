import ChangePassword from "./ChangePassword";

const SettingsComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className=" w-full  max-w-5xl m-4">
        <ChangePassword />
      </div>
    </div>
  );
};

export default SettingsComponent;
