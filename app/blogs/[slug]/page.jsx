import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";
import {
  blogPosts,
  getBlogBySlug,
} from "../../data/blogsData";

export const generateStaticParams = async () => {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | The Alchemist's Pantry`,
    description: blog.excerpt,
  };
};

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex(
    (item) => item.slug === blog.slug
  );

  const previousBlog =
    currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const nextBlog =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  const relatedBlogs = blogPosts
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2D2926]">
      {/* Article Header */}
      <section className="relative overflow-hidden bg-[#E8E3DF] px-4 pb-20 pt-32 md:px-12 md:py-24  xl:px-72">
        <div className="absolute -right-36 -top-40 h-[500px] w-[500px] rounded-full bg-[#B9832B]/15 blur-[120px]" />

        <div className="relative z-10 mx-auto px-4 md:px-12 xl:px-72  py-24 text-center">
        <div className="flex items-center justify-between">

          <Link
            href="/blogs"
            className="mb-9 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B]"
          >
            <FaArrowLeft size={10} />
            Back to Journal
          </Link>

          <div className=" mb-6 block w-fit rounded-full border border-[#8B5A2B]/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B0008]">
            {blog.category}
          </div>
        </div>

          <h1 className="mx-auto mb-7 max-w-4xl font-serif text-4xl leading-tight text-[#2D2926] md:text-5xl xl:text-6xl">
            {blog.title}
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-neutral-600 md:text-lg md:leading-8">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            <span className="flex items-center gap-2">
              <FaCalendarAlt size={10} />
              {blog.date}
            </span>

            <span className="flex items-center gap-2">
              <FaClock size={10} />
              {blog.readTime}
            </span>

            <span className="flex items-center gap-2">
              <FaUser size={10} />
              {blog.author}
            </span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-4 md:px-12 xl:px-72">
   <div className="relative -mt-8 w-full overflow-hidden rounded-[24px] shadow-[0_20px_70px_rgba(47,33,24,0.14)] md:-mt-12 md:rounded-[38px]">
  <Image
    src={blog.image}
    alt={blog.title}
    width={1920}
    height={1080}
    priority
    quality={100}
    sizes="100vw"
    className="w-full h-auto object-contain"
  />

  <div className="absolute inset-0 bg-black/[0.03] pointer-events-none" />
</div>
      </section>

      {/* Article Content */}
      <section className="py-24 px-4 md:px-12 xl:px-72">
        <article className="">
          <p className="mb-12 border-l-2 border-[#8B5A2B] pl-6 font-serif text-xl italic leading-9 text-[#4D341E] md:text-2xl">
            {blog.description}
          </p>

          <div className="space-y-14">
            {blog.content.map((section, index) => (
              <section key={`${blog.slug}-${index}`}>
                <div className="mb-6 flex items-start gap-5">
                  <span className="pt-2 text-[10px] font-bold tracking-[0.2em] text-[#A89A8B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="font-serif text-2xl leading-tight text-[#2D2926] md:text-3xl">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-5 pl-0 md:pl-11">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-base leading-8 text-neutral-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Closing Note */}
          <div className="mt-16 rounded-3xl bg-[#E8E3DF] p-7 md:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8B0008]">
              The Alchemist&apos;s Pantry
            </p>

            <h3 className="mb-4 font-serif text-2xl text-[#2D2926]">
              Your kitchen. Your recipes. Our ingredients.
            </h3>

            <p className="text-sm leading-7 text-neutral-600">
              Explore thoughtfully selected spices, blends, flours, pickles and
              cooking essentials created to make everyday meals richer and more
              flavourful.
            </p>
          </div>
        </article>
      </section>

      {/* Previous and Next */}
      <section className="border-y border-[#DDD4C8] px-4 md:px-12 xl:px-72">
        <div className="mx-auto grid   py-24 grid-cols-1 md:grid-cols-2">
          <div className="border-b border-[#DDD4C8] p-7 md:border-b-0 md:border-r md:p-10">
            {previousBlog && (
              <Link
                href={`/blogs/${previousBlog.slug}`}
                className="group block"
              >
                <span className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
                  <FaArrowLeft size={9} />
                  Previous Article
                </span>

                <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-[#8B5A2B] md:text-2xl">
                  {previousBlog.title}
                </h3>
              </Link>
            )}
          </div>

          <div className="p-7 text-left md:p-10 md:text-right">
            {nextBlog && (
              <Link href={`/blogs/${nextBlog.slug}`} className="group block">
                <span className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B5A2B] md:justify-end">
                  Next Article
                  <FaArrowRight size={9} />
                </span>

                <h3 className="font-serif text-xl leading-snug transition-colors group-hover:text-[#8B5A2B] md:text-2xl">
                  {nextBlog.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#E8E3DF]/55 py-24 px-4 md:px-12 xl:px-72">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#8B0008]">
            Continue Reading
          </p>

          <h2 className="font-serif text-3xl md:text-4xl">
            More from our
            <span className="italic text-[#8B5A2B]"> journal.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {relatedBlogs.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[22px] border border-[#DDD4C8] bg-[#FDFBF7]"
            >
              <Link
                href={`/blogs/${item.slug}`}
                className="relative block aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </Link>

              <div className="p-6">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8B0008]">
                  {item.category}
                </p>

                <Link href={`/blogs/${item.slug}`}>
                  <h3 className="mb-4 font-serif text-xl leading-snug transition-colors group-hover:text-[#8B5A2B]">
                    {item.title}
                  </h3>
                </Link>

                <Link
                  href={`/blogs/${item.slug}`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B5A2B]"
                >
                  Read Article
                  <FaArrowRight size={9} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;