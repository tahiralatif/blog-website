import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "@/components/ui/card";


async function getData() {
  const query = `
  *[_type == "blog"] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }
`;
;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);

  return (
    <>





      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
     
        {data.map((post, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[280px] object-cover hover:scale-105 transition-all active:scale-100"
            />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold text-[24px] pb-1">{post.title}</h3>
              <h4 className="text-md font-semibold text-gray-300  ">{post.correctTitle}</h4>
              <p className="line-clamp-3 text-sm text-gray-900 dark:text-gray-300">
                {post.smallDescription}
              </p>

              <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>

            </Button>
            </CardContent>
           
          </Card>
        ))}
      </div>
    </>
  );
}
