import { blogArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Comment from "@/app/components/comment";

// Define a type for the params
interface Params {
  slug: string;
}

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
    }[0]`;
  const data = await client.fetch(query);
  return data;
}

// This is the correct way to handle async data fetching in Next.js
export async function getStaticProps({ params }: { params: Params }) {
  const data: blogArticle = await getData(params.slug);

  return {
    props: {
      data, // This will pass the fetched data as props to the component
    },
  };
}

// This function will generate dynamic paths for blog posts
export async function getStaticPaths() {
  const query = `*[_type == "blog"]{slug}`;
  const posts = await client.fetch(query);

  const paths = posts.map((post: { slug: { current: string } }) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false, // Can be set to 'true' or 'blocking' for fallback options
  };
}

interface BlogProps {
  data: blogArticle;
}

export default function BlogArticle({ data }: BlogProps) {
  return (
    <div className="mt-8 ml-[20px]">
      <h1>
        <span className="block text-[18px] text-center text-teal-600 -tracking-wide font-bold uppercase">
          {"Tashira's blogs"}
        </span>

        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt="Image"
        priority={true}
        width={800}
        height={100}
        className="object-cover hover:scale-105 transition-all active:scale-100 rounded-lg m-8 border md:ml-[120px]"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-teal-500 ">
        <PortableText value={data.content} />
        <Comment postId={""} />
      </div>
    </div>
  );
}
