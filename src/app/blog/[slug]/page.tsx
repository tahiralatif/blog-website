import { blogArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Comment from "@/app/components/comment";

// Define types for params and blog props
type BlockPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type BlogSlug = {
  slug: string;
};

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
      smallDescription,
    }[0]`;
  const data = await client.fetch(query);
  return data;
}

// Dynamic Page Component
export default async function BlockPage({ params }: BlockPageProps) {
  const { slug }: BlogSlug = await params;
  const data: blogArticle = await getData(slug);

  return (
    <div className="mt-8 ml-[20px]">
      <h1 className="block text-[18px] text-center text-teal-600 -tracking-wide font-bold uppercase">
        {"Glow By Tahira"}
      </h1>
      <span className="mt-2 block text-3xl md:ml-[50] dark:text-white text-yellow-800 text-center leading-12 font-bold tracking-tight sm:text-4xl">
        {data.title}
      </span>
      <p className="line-clamp-3 text-center font-semibold mt-4 md:px-[90px] mx-auto text-gray-900 dark:text-gray-300">
        {data.smallDescription}
      </p>
      <Image
        src={urlFor(data.titleImage).url()}
        alt="Image"
        priority={true}
        width={900}
        height={100}
        className="object-cover hover:scale-105 transition-all active:scale-100 rounded-lg m-8 border md:ml-[110px]"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-teal-500 md:ml-[100px]">
        <PortableText value={data.content} />
        <Comment postId={""} />
      </div>
    </div>
  );
}
