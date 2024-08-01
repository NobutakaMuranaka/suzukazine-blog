import { Link } from "react-router-dom";
import logo from "../image/suzukazine-logo.svg";

function Header() {
  return (
    <>
      <Link to="/">
        <img src={logo} className="block m-auto w-80 py-2.5" />
      </Link>
      <div className="bg-black w-full">
        <ul className="flex text-white p-5 gap-24 place-content-center">
          <li>
            <Link to="/category/グルメ">グルメ</Link>
          </li>
          <li>
            <Link to="/category/生活">生活</Link>
          </li>
          <li>
            <Link to="/category/観光">観光</Link>
          </li>
          <li>
            <Link to="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
