import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={`/`}>
      <img
        alt="logo"
        className="cursor-pointer h-4 md:h-6 md:block"
        src="/logo-no-bg.png"
      />
    </Link>
  );
}
