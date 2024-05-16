"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  items: any[];
}

const AdminMenu = ({ items }: Props) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav>
      <ul className={"-mx-3 font-semibold"}>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`flex items-center gap-x-3 py-2 px-3 text-white hover:bg-zinc-800 rounded ${isActive(item.href) ? "opacity-1 bg-teal-800" : "opacity-75"}`}
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminMenu;
