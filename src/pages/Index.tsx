import StarfieldBackground from "@/components/story/StarfieldBackground";
import ChapterNav from "@/components/story/ChapterNav";
import HeroIntro from "@/components/story/HeroIntro";
import Chapter01_Origins from "@/components/story/Chapter01_Origins";
import Chapter02_Lockdown from "@/components/story/Chapter02_Lockdown";
import Chapter03_FirstStep from "@/components/story/Chapter03_FirstStep";
import Chapter04_FearMeetsReality from "@/components/story/Chapter04_FearMeetsReality";
import Chapter05_Rajkot from "@/components/story/Chapter05_Rajkot";
import Chapter06_Communication from "@/components/story/Chapter06_Communication";
import Chapter07_Techvoot from "@/components/story/Chapter07_Techvoot";
import Chapter08_International from "@/components/story/Chapter08_International";
import Chapter09_NFC from "@/components/story/Chapter09_NFC";
import Chapter10_Products from "@/components/story/Chapter10_Products";
import Chapter11_AIStudio from "@/components/story/Chapter11_AIStudio";
import Chapter12_Numbers from "@/components/story/Chapter12_Numbers";
import Chapter13_Future from "@/components/story/Chapter13_Future";
import Recruiter from "@/components/story/Recruiter";
import Contact from "@/components/story/Contact";
import Footer from "@/components/story/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarfieldBackground />
      <ChapterNav />
      <main>
        <HeroIntro />
        <Chapter01_Origins />
        <Chapter02_Lockdown />
        <Chapter03_FirstStep />
        <Chapter04_FearMeetsReality />
        <Chapter05_Rajkot />
        <Chapter06_Communication />
        <Chapter07_Techvoot />
        <Chapter08_International />
        <Chapter09_NFC />
        <Chapter10_Products />
        <Chapter11_AIStudio />
        <Chapter12_Numbers />
        <Chapter13_Future />
        <Recruiter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
