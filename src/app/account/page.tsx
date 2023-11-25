import { Header } from "@/widgets/Header";
import { AccountContent } from "@/widgets/Account";

export default function Account() {
  return (
    <div className="bg-zinc-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-zinc-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
        <AccountContent />
      </Header>
    </div>
  );
}
