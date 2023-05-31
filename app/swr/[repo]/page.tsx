import { use } from "react";

interface IPage {
  params: {
    repo: string;
  };
}

const fetchData = async (repo: string) =>
  await fetch(`https://api.github.com/repos/pacificd/${repo}/contents`).then(
    (res) => res.json()
  );

const RepoPage = ({ params }: IPage) => {
  const { repo } = params;
  const data = use(fetchData(repo));

  return (
    <div className="container">
      {data.map((item: any) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

export default RepoPage;
