// import LinkButton from "@/components/LinkButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Image from "next/image";
import ContactForm from "./_components/ContactForm/ContactForm";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  console.log(t)
  return (
    <div className="flex flex-col ">
      {/* Full-page height div */}
      <section className="h-screen flex flex-col snap-start">
        <Header />
        <div style={{ backgroundImage: "url('/classic-hero.jpg')"}} className="bg-cover bg-center flex-1 flex flex-col items-center justify-center">
          <div className="max-w-2/3  bg-red-300/85 p-14 flex flex-col gap-6 items-center  md:gap-12 text-white rounded-md">
            <h1 className="text-2xl">{t("HeroTitle")}</h1>
            <div className="font-medium text-lg pl-4 space-y-2 md:max-w-full">
              <h1 className="text-xl font-extrabold">{t("HeroBulletP1Title")}</h1>
              <p>{t("HeroBulletP1")}</p>
              <h1 className="text-xl font-extrabold">{t("HeroBulletP2Title")}</h1>
              <p>{t("HeroBulletP2")}</p>
              <h1 className="text-xl font-extrabold">{t("HeroBulletP3Title")}</h1>
              <p>{t("HeroBulletP3")}</p>
              <h1 className="text-xl font-extrabold">{t("HeroBulletP4Title")}</h1>
              <p>{t("HeroBulletP4")}</p>
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
