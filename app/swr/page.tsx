"use client";
import Link from "next/link";
import { fetcher } from "@/utils";
import useSWR, { SWRConfig } from "swr";
import { GeistProvider, CssBaseline, Button } from "@geist-ui/core";

const API = {
  repos: "https://api.github.com/users/pacificd/repos",
};

const SWRPage = () => {
  const { data, error, isLoading } = useSWR("/api/repos", (url: string) =>
    fetch(url).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <GeistProvider>
      <CssBaseline />
      <SWRConfig
        // SWR global configuration
        value={{
          fetcher, // all SWR hooks will use the same fetcher provided
        }}
      >
        <h1 className="text-2xl m-4 ">Welcome</h1>
        <Button>hello</Button>
        <ul className="flex flex-wrap">
          {data?.map((repo: any) => (
            <li
              key={repo.id}
              className="m-4 cursor-pointer px-4 py-2 bg-blue-200 whitespace-nowrap rounded-lg"
            >
              <Link href={`/swr/${repo.name}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
      </SWRConfig>
    </GeistProvider>
  );
};
export default SWRPage;
