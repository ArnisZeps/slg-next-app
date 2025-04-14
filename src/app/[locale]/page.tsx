// import LinkButton from "@/components/LinkButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Image from "next/image";
import ContactForm from "./_components/ContactForm/ContactForm";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  console.log(t)
  return (
    <div className="flex flex-col ">
      {/* Full-page height div */}
      <section className="h-screen flex flex-col snap-start">
        <Header />
        <div style={{ backgroundImage: "url('/classic-hero.jpg')"}} className="bg-cover flex-1 flex flex-col items-center justify-center">
          <div className="bg-red-300/85 p-14 flex flex-col gap-6 items-center  md:gap-12 text-white rounded-md">
            <h1 className="text-2xl">Profesionāls risinājums tavām mājām</h1>
            <div className="max-w-96 font-medium pl-4 space-y-2 md:max-w-full">
              <p>Build best looking resume in minutes!</p>
              <p>Only 2% of resumes win. Yours will be one of them. Lets build you a resume that works.</p>
              <p>Use best industry templates</p>
              <p>2.99$ monthly - no hidden costs</p>
              <p>Change your job search game with Resumex!</p>
            </div>
            <div className="w-full flex justify-center">
              {/* <LinkButton text={"Create now!"} href="/dashboard" /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col snap-start">
        <div className="flex-1 flex flex-col items-center justify-center">
          <ContactForm />
        </div>
        <Footer />
      </section>
    </div>
  );
}
