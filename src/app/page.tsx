import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/blog-4.jpg"; // Replace with your own image pathim
import Articles from "../app/Articles/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" min-h-screen">
    

      {/* Hero Section */}
      <section className="relative ">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
           {`   Explore Pakistan's Beauty & Culture`}
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
             {` Discover the hidden gems, breathtaking landscapes, and vibrant
              culture of Pakistan. Start your journey with us and explore the
              majestic mountains, bustling bazaars, and rich heritage like
              never before!`}
            </p>
            <Link href="/blogs">
            <Button>  Read Blogs</Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={HeroImg}
              alt="Pakistan's Landscape"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold  mb-8 text-center">
          Featured Blogs
        </h2>
     <Articles/>
      </section>

     
    </main>
  );
}
