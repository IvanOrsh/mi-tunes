import { Header } from "@/widgets/Header";
import { ListItem } from "@/shared/ui";
import { Songs } from "@/entities/Song";
import { getSongs } from "@/application/actions/getSongs";

// never cache, always update
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="bg-zinc-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Start throwing tunes!
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
            <ListItem
              image="/images/liked2.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>

        <Songs songs={songs} />
      </div>
    </div>
  );
}
