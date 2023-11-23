import { getSongsByTitle } from "@/entities/Song/model/actions/getSongsByTitle";
import { Header } from "@/widgets/Header";
import { SearchInput, SearchContent } from "@/widgets/Search";

type SearchProps = {
  searchParams: {
    title: string;
  };
};

export default async function Search({ searchParams }: SearchProps) {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div className="bg-zinc-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-zinc-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>

          <SearchInput />
        </div>
      </Header>

      <SearchContent songs={songs} />
    </div>
  );
}
