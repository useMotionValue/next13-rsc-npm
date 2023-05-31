import Link from "next/link";
import { use } from "react";

const getData = () =>
  fetch("http://localhost:3000/api/repos").then((res) => res.json());

const UsePage = () => {
  const data = use(getData());

  return (
    <ul className="flex flex-wrap">
      {data?.map((repo: any) => (
        <li
          key={repo.id}
          className="m-4 cursor-pointer px-4 py-2 bg-blue-200 whitespace-nowrap rounded-lg"
        >
          <Link href={`/swr/${repo.id}`}>{repo.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default UsePage;
