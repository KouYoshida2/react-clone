import { Link } from "react-router-dom";

export const TheHeader = () => {
  return (
    <ul className="text-white flex gap-4 p-10">
      <li>{<Link to="/">ホーム</Link>}</li>
      <li>{<Link to="/my-list">マイリストページ</Link>}</li>
      <li>{<Link to="/review-list">レビューページ</Link>}</li>
    </ul>
  );
};
