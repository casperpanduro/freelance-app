"use client";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Skeleton from "@/components/ui/Skeleton";

interface Props {
  items: any[];
}

const AdminTitle = ({ items }: Props) => {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  const title = items.find((item) => item.href === pathname)?.title;

  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className={"mb-6 flex items-center justify-between gap-x-4"}>
      <h1 className={"text-3xl font-bold"}>{title}</h1>
      <div className={"flex items-center gap-x-2"}>
        <div
          className={
            "bg-zinc-800 shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          }
        >
          <span className={"text-white text-sm font-semibold"}>{initials}</span>
        </div>
        {!isLoading && (
          <span className={"text-sm font-semibold"}>{user?.name}</span>
        )}
        {isLoading && <Skeleton width={"100px"} />}
      </div>
    </div>
  );
};

export default AdminTitle;
