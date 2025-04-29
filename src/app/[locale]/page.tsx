// import LinkButton from "@/components/LinkButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Image from "next/image";
import ContactForm from "./_components/ContactForm";
import { useTranslations } from "next-intl";
import Accordion from "@/components/Accordion";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col  dark:bg-slate-800 dark:text-white">
      {/* Full-page height div */}
      <section className="min-h-screen flex flex-col snap-start ">
        <Header />
        <div
          style={{ backgroundImage: "url('/classic-hero.jpg')" }}
          className="relative bg-cover bg-center flex-1 flex flex-col md:items-center md:justify-center -z-20"
        >
          <img src="/shape_1.svg" alt="Decorative Shape" className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none" />
          <div className="  text-white rounded-md flex flex-col gap-6 items-center py-4 md:p-14 md:gap-12 md:max-w-2/3 ">
            <h1 className="text-2xl">{t("HeroTitle")}</h1>
            {/* Desktop Version */}
            <div className="hidden md:block font-medium text-lg pl-4 space-y-2 md:max-w-full">
              <h1 className="text-xl font-extrabold">{t("HeroBulletP1Title")}</h1>
              <p>{t("HeroBulletP1")}</p>
              <h1 className="text-xl font-extrabold">{t("HeroBulletP2Title")}</h1>
              <p>{t("HeroBulletP2")}</p>
              <h1 className="text-xl font-extrabold">{t("HeroBulletP3Title")}</h1>
              <p>{t("HeroBulletP3")}</p>
              <h1 className="text-xl font-extrabold">{t("HeroBulletP4Title")}</h1>
              <p>{t("HeroBulletP4")}</p>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden w-full">
              <Accordion
                items={[
                  { title: t("HeroBulletP1Title"), content: t("HeroBulletP1") },
                  { title: t("HeroBulletP2Title"), content: t("HeroBulletP2") },
                  { title: t("HeroBulletP3Title"), content: t("HeroBulletP3") },
                  { title: t("HeroBulletP4Title"), content: t("HeroBulletP4") },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col snap-start ">
        <div className="flex-1 flex flex-col items-center justify-center">
          <ContactForm />
        </div>
        <Footer />
      </section>
    </div>
  );
}
