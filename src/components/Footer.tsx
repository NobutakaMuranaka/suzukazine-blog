import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-black w-full">
        <ul className="flex text-white p-5 gap-12 place-content-center">
          <li>
            <Link to="/contact">お問い合わせ</Link>
          </li>
          <li>プライバシーポリシー</li>
          <li>運営者情報</li>
        </ul>
        <p className=" text-white p-5 text-center">
          2024 SUZUKAZINE All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
