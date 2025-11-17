
import { HeroBanner } from "./_components/Hero/HeroBanner";
import { HeaderHeadings } from "../shared/ui/home/HeaderHeadings";
import { Testimony } from "./_components/testimony/Testimony";

//ARQUIVO DE ROTAS
export default function Home() {
  return (
   <main className="flex flex-col gap-24">
    
    <HeroBanner />
    <HeaderHeadings />
    <Testimony />
    

   </main>
  );
}
