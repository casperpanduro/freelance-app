import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Header = () => {
  const menu = [
    {
      name: "Pricing",
      url: "/pricing",
    },
    {
      name: "Features",
      url: "/features",
    },
    {
      name: "Reviews",
      url: "/reviews",
    },
    {
      name: "Sign in",
      url: "/sign-in",
    },
  ];
  return (
    <header
      className={
        "bg-gradient-to-b z-40 from-black via-black/75 to-black/0 text-lg font-light fixed top-0 inset-x-0 h-28 flex items-center"
      }
    >
      <div
        className={
          "flex justify-between items-center  w-full max-w-7xl mx-auto px-6"
        }
      >
        <div>
          <Link href={"/"}>
            <Logo className={"w-12 h-12"} />
          </Link>
        </div>
        <div className={"justify-end items-center gap-x-12 hidden md:flex"}>
          <nav>
            <ul className={"flex items-center justify-center gap-x-12"}>
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href={"/create-account"}
            className={
              "bg-white px-8 font-medium py-4 text-black text-base border border-white text-md hover:bg-transparent hover:text-white transition-colors duration-200"
            }
          >
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
