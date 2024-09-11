import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={`/`}>
      <img
        alt="logo"
        className="cursor-pointer h-10 md:h-16 md:block"
        src="https://i.ibb.co/prMYsS5/logo-no-background.png"
      />
    </Link>
  );
}
