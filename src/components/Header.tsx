import { Link } from "react-router-dom";
import Image from "@/image/suzukazine-logo.svg";

function Header() {
  return (
    <>
      <div className="p-5">
        <Link to="/">
          <img src={Image} className="block m-auto h-28" />
        </Link>
      </div>
      <div className="bg-black w-full">
        <ul className="flex text-white p-5 gap-16 place-content-center">
          <li>
            <Link to="/category/グルメ">グルメ</Link>
          </li>
          <li>
            <Link to="/category/生活">生活</Link>
          </li>
          <li>
            <Link to="/category/観光">観光</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
