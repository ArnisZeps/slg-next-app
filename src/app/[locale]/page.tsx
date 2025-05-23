// import LinkButton from "@/components/LinkButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactForm from "./_components/ContactForm";
import { useTranslations } from "next-intl";
import Accordion from "@/components/Accordion";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col dark:bg-slate-800 dark:text-white ">
      <section className="min-h-screen flex flex-col snap-start">
        <Header />
        <div
          style={{ backgroundImage: "url('/classic-hero.jpg')" }}
          className="bg-cover bg-center flex flex-1 flex-col justify-center md:items-start "
        >
          <div
            style={{ backgroundImage: "url('/shape_1.svg')" }}
            className="relative bg-cover opacity-80 flex flex-1 flex-col w-full justify-center md:items-start"
          >
            <div className="font-bold text-white rounded-md flex flex-col gap-6 items-center p-8 md:p-14 md:gap-12 md:max-w-3/7 ">
              <h1 className="text-3xl">{t("HeroTitle")}</h1>
              {/* Desktop Version */}
              <div className="md:block text-lg pl-4 space-y-2 md:max-w-full">
                <h1 className="text-2xl font-extrabold">{t("HeroBulletP1Title")}</h1>
                <p>{t("HeroBulletP1")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col snap-start items-center text-xl">
        <div className="relative flex flex-col flex-1 items-center gap-10 p-4 lg:p-0 lg:justify-between lg:flex-row lg:w-full lg:max-w-10/12">
          <div className="relative aspect-square w-full max-w-xl lg:w-3/7 lg:max-w-2xl ">
            <Image alt="skirting" fill src="/salag_1.jpg" className="rounded-md" />
          </div>
          <div className="flex flex-col lg:max-w-3/7">
            <h1 className="text-2xl font-extrabold">{t("HeroBulletP2Title")}</h1>
            <p>{t("HeroBulletP2")}</p>
            <h1 className="text-2xl font-extrabold">{t("HeroBulletP3Title")}</h1>
            <p>{t("HeroBulletP3")}</p>
            <h1 className="text-2xl font-extrabold">{t("HeroBulletP4Title")}</h1>
            <p>{t("HeroBulletP4")}</p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col snap-start items-center">
        <div className="flex-1 flex flex-col items-center justify-center w-full lg:max-w-10/12">
          <ContactForm />
        </div>
        <Footer />
      </section>
    </div>
  );
}
