import Image from "next/image";
import CultureImg from "../../../public/blog-4.jpg"; // Replace with your own image path
import LandscapeImg from "../../../public/blog-6.jpeg"; // Replace with your own image path
import Meteors from "@/components/ui/meteors";

export default function About() {
  return (



    
<div className="relative flex w-full flex-col items-center justify-center max-5xl mx-auto">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      <div className="w-full text-center">
<h1 className="text-4xl md:text-5xl font-bold mb-6">
About Us
</h1>
<p className="text-lg leading-relaxed mb-6">
Welcome to our blog, where we uncover the beauty, culture, and hidden treasures of Pakistan. Our mission is to inspire you to explore the majestic mountains, vibrant cities, and rich heritage that make Pakistan a truly unique destination.
</p>
<p className="text-lg leading-relaxed mb-6">
Our journey began with a deep passion for Pakistan’s diverse landscapes, cultures, and stories. From the towering peaks of the Himalayas to the lively streets of Lahore, we aim to share the captivating experiences that make our country so special. Through this platform, we hope to create a space for travelers and dreamers to connect, explore, and experience the magic of Pakistan.
</p>
<p className="text-lg leading-relaxed mb-6">
At the heart of our blog, you’ll find not only travel stories and guides but also a celebration of the people who call Pakistan home. We believe that the true essence of a destination lies in its people, their traditions, and the warmth they offer to visitors. Whether you’re a local or a wanderer from afar, we invite you to join us on this journey and discover Pakistan through our eyes.
</p>
<p className="text-lg leading-relaxed">
Let us take you on an adventure, as we explore everything from the serene beauty of the north to the bustling energy of our cities. Whether you’re seeking a peaceful getaway or a cultural immersion, our blog will be your guide to discovering the wonders of Pakistan.
</p>
</div>




<section className=" py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">
      Our Mission & Vision
    </h2>
    <p className="text-lg  leading-relaxed max-w-3xl mx-auto">
      At our blog, we believe in celebrating the diversity and beauty of
      Pakistan. Our vision is to create a space where readers can connect
      with the stories, traditions, and stunning landscapes of this
      extraordinary country. Through our content, we aim to inspire
      travelers, both local and international, to experience Pakistan’s
      wonders firsthand.
    </p>
  </div>
</section>

      
      <main className="min-h-screen]">
{/* Hero Section */}
<section className="relative">
  <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">


 
  </div>
</section>

{/* Highlights Section */}
<section className="container mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-12">
    What We Offer
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Highlight 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={CultureImg}
        alt="Culture"
        className="w-full h-48 object-cover"
        width={800}
        height={600}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700 mb-3">
          Celebrate Culture
        </h3>
        <p className="text-gray-600">
          Explore the vibrant festivals, traditions, and art that define
          Pakistan’s rich heritage.
        </p>
      </div>
    </div>

    {/* Highlight 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={LandscapeImg}
        alt="Landscapes"
        className="w-full h-48 object-cover"
        width={800}
        height={600}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700 mb-3">
          Discover Landscapes
        </h3>
        <p className="text-gray-600">
          From snowy peaks to lush valleys, uncover the breathtaking
          landscapes that make Pakistan unique.
        </p>
      </div>
    </div>

    {/* Highlight 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src="/community.jpg" // Replace with your image
        alt="Community"
        className="w-full h-48 object-cover"
        width={800}
        height={600}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700 mb-3">
          Build Connections
        </h3>
        <p className="text-gray-600">
          Join a community of passionate travelers and storytellers who
          share a love for Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-6 text-center">
    <p className="text-sm">
      © {new Date().getFullYear()} Discover Pakistan. All rights reserved.
    </p>
  </div>
</footer>
</main>


      </span>
    </div>


    
   
  );
}
