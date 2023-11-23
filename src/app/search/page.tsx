import { getSongsByTitle } from "@/entities/Song/model/actions/getSongsByTitle";

type SearchProps = {
  searchParams: {
    title: string;
  };
};

export default async function Search({ searchParams }: SearchProps) {
  const songs = await getSongsByTitle(searchParams.title);

  return <div>Search !</div>;
}
