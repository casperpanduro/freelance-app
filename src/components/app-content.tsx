"use client";
import { HeadingXl } from "@/components/typography/headings";
import { usePathname } from "next/navigation";
import { nav_items } from "@/lib/navigation";

interface Props {
  children: React.ReactNode;
}

const AppContent = ({children}: Props) => {
  const pathName = usePathname();

  const merged = nav_items.manage.items.concat(nav_items.main.items);

  const title = merged.find((item) => item.href === pathName)?.title;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] py-2 px-6 flex-1 rounded-xl md:min-h-min space-y-4">
        <div>
          <HeadingXl>{title ?? "Not found"}</HeadingXl>
        </div>
        {children}
      </div>
    </div>
  )
}

export default AppContent;
