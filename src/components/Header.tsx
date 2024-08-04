import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="p-5 text-center">
        <p className="text-xl">SUZUKAZINE</p>
      </div>
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
