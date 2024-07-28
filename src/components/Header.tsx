// components/Header.tsx

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <p className="text-center m-5 text-3xl font-bold">SUZUKAZINE</p>
      <div className="bg-black w-full">
        <ul className="flex text-white p-5 gap-12 place-content-center">
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/post/1">グルメ</Link>
          </li>
          <li>
            <Link to="/post/2">生活</Link>
          </li>
          <li>
            <Link to="/post/3">観光</Link>
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
