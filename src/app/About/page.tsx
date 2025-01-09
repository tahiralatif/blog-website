import Meteors from "@/components/ui/meteors";

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center max-w-5xl mx-auto   text-yellow-800 dark:text-gray-200">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6  text-yellow-800 dark:text-gray-200">About Us</h1>
          <p className="text-lg leading-relaxed mb-6  text-yellow-800 dark:text-gray-200">
          {`  Welcome to our blog, your ultimate guide to beauty and wellness. Our mission is to empower individuals with knowledge and tips to achieve glowing skin, a healthier lifestyle, and inner confidence. Whether you're a skincare enthusiast or someone on a wellness journey, this is the perfect place for you.`}
          </p>
          <p className="text-lg leading-relaxed mb-6  text-yellow-800 dark:text-gray-200">
           {` Our journey began with a passion for uncovering the secrets to natural beauty and self-care. From effective skincare routines to holistic wellness practices, we aim to provide you with the best advice, curated just for you. Through this blog, we hope to create a community of individuals dedicated to embracing their unique beauty and achieving their health goals.`}
          </p>
          <p className="text-lg leading-relaxed mb-6  text-yellow-800 dark:text-gray-200">
{`            At the heart of our blog lies the belief that beauty is more than skin deep. It's about feeling confident, embracing your individuality, and radiating positivity. Whether you're here for skincare tips, wellness advice, or just a dose of inspiration, we are thrilled to have you as part of our growing community.`}
          </p>
          <p className="text-lg leading-relaxed  text-yellow-800 dark:text-gray-200">
{`            Let us guide you through this journey of self-discovery and self-care. From beauty hacks to wellness trends, our blog is here to help you look and feel your best every day.`}
          </p>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6  text-yellow-800 dark:text-gray-200">{`Our Mission & Vision`}</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto  text-yellow-800 dark:text-gray-200">
{`              Our mission is to celebrate beauty in all its forms, from radiant skin to a healthy mind and body. We envision a world where everyone feels empowered to embrace their uniqueness and live confidently. Through our content, we aim to inspire individuals to prioritize self-care, practice healthy habits, and enhance their natural beauty.`}
            </p>
          </div>
        </section>

        <main className="min-h-screen">
          

        </main>
      </span>
    </div>
  );
}
