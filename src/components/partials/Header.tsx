import Logo from "@/components/Logo";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

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
        "bg-gradient-to-b z-40 from-background via-background/75 to-background/0 font-light fixed top-0 inset-x-0 h-28 flex items-center"
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
              buttonVariants({
                size: "lg",
              })
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
