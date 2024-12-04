import Header from "@/components/partials/Header";
import Image from "next/image";
import { Heading3Xl, HeadingXl } from "@/components/typography/headings";

export default function Home() {
  return (
    <>
      <Header />
      <main className={"mt-28"}>
        <div className={"max-w-4xl mx-auto pt-24 pb-12 text-center space-y-8"}>
          <p className={"text-white text-xl"}>Never miss an hour again.</p>
          <Heading3Xl>
            <span className={"text-primary"}>Track your time.</span>
            <br />
            Made for freelancers, developers and software teams.
          </Heading3Xl>
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
