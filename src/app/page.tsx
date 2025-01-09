import Image from "next/image";
import Link from "next/link";
import Articles from "../app/Articles/page";
import HeroImg from "../../public/bg-6.webp";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" min-h-screen mx-auto">
    

      {/* Hero Section */}
      <section className="relative ">
      <div className="relative bg-gradient-to-r  py-16 font-[sans-serif]">
  <div className
  ="absolute inset-1">
    <Image src={HeroImg} 
         alt="Background Image" 
         className="w-full h-full object-cover "  
         width={800}
         height={500}/>
  </div>
 
  <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center  text-yellow-800 dark:text-gray-900">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      Welcome to GlowRx
    </h1>
    <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto">
{`
Discover the ultimate beauty and skincare secrets for glowing, radiant skin. Transform your daily routine with expert tips and natural remedies designed to brighten, nourish, 
and rejuvenate. Unveil your true beauty and confidence with GlowRx!
`}    </p>
    <Button type="button" className="bg-yellow-700 hover:bg-yellow-800 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white text-white text-base tracking-wide px-6 py-3 rounded-md transition duration-300 ease-in-out shadow-lg hover:shadow-xl mb-8">
    <Link  href="Articles"> Explore Blogs</Link>
    </Button>




   <div className="mt-[50px]">
   <Articles/>
   </div>
  </div>

</div>

    
      </section>

     
    </main>
  );
}
