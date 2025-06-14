import Image from "next/image";
import { Landing } from "./landing/page";
import { TopNav } from "@/components/partials/TopNav";

export default function Home() {
  return (
    <>
      <main className="lg:px-sm sm:px-xl sm:mt-3xl flex sm:justify-center ">
        <div>
          <Landing />
        </div>
      </main>
    </>
  );
}
