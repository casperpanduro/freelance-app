import Header from "@/components/partials/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className={"mt-28"}>
        <div className={"max-w-4xl mx-auto pt-24 pb-12 text-center space-y-8"}>
          <p className={"text-zinc-400 text-xl"}>Never miss an hour again.</p>
          <h1 className={"font-bold text-7xl tracking-tight"}>
            <span className={"text-pink-600"}>Track your time.</span>
            <br />
            Made for freelancers, developers and software teams.
          </h1>
        </div>
        <div className={"max-w-7xl mx-auto"}>
          <Image
            className={"mt-12 w-full"}
            src={
              "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            }
            alt={"Screenshot of the app"}
            width={800}
            height={500}
          />
        </div>
      </main>
    </>
  );
}
