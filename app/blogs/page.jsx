import React from "react";
import { FaCalendarAlt, FaUser, FaFolder } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Brand Storytelling",
    excerpt: "Discover how to craft compelling narratives that resonate with your audience and build lasting connections.",
    date: "March 15, 2025",
    author: "Alex Morgan",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "SEO Trends for 2025",
    excerpt: "Stay ahead of the curve with the latest SEO strategies, from AI-driven search to voice optimization.",
    date: "March 10, 2025",
    author: "Chris Park",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Designing for Emotion",
    excerpt: "Learn how color, typography, and imagery can evoke emotions and improve user engagement.",
    date: "March 5, 2025",
    author: "Jamie Lee",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Social Media Algorithms Decoded",
    excerpt: "A deep dive into how platforms like Instagram and TikTok rank content—and how to work with them.",
    date: "February 28, 2025",
    author: "Taylor Smith",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "The ROI of User Experience",
    excerpt: "Why investing in UX design pays off through higher conversions and customer loyalty.",
    date: "February 20, 2025",
    author: "Alex Morgan",
    category: "UX",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Video Marketing Mastery",
    excerpt: "Tips for creating engaging video content that captures attention and drives action.",
    date: "February 12, 2025",
    author: "Emily Rodriguez",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=600&q=80",
  },
];

const BlogPage = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative h-64 bg-gradient-to-r from-stone-900 to-stone-800 text-white flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-2">Blog</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">
            Insights, stories, and expertise from our team
          </p>
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100"
            >
              
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/*  */}
                <div className="flex items-center gap-4 text-xs text-stone-400 border-t border-stone-100 pt-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser size={12} />
                    {post.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;