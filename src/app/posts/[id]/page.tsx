"use client";
import React from "react";
import CommentSection from "@/app/components/CommentSection";
import AuthorCard from "@/app/components/AuthorCard";
import Image from "next/image";

const posts = [
  {
    id: "1",
    title: "HTML Blog of Jewelry Website",
    description: "Explore the beauty of HTML-based Jewelry Websites.",
    date: "2025-12-31",
    image: "/image/blue.jpg",
  },
  {
    id: "2",
    title: "HTML Blog of Diamond",
    description: "Discover the stunning world of HTML and diamonds.",
    date: "2025-12-31",
    image: "/image/diamond.jpg",
  },
  {
    id: "3",
    title: "HTML Blog of Earing",
    description: "Explore the world of HTML through Earrings.",
    date: "2025-12-31",
    image: "/image/earing.jpg",
  },
  {
    id: "4",
    title: "HTML Blog of Gold Rings",
    description: "Dive into the HTML world with Gold Rings.",
    date: "2025-12-31",
    image: "/image/Gold.jpg",
  },
  {
    id: "5",
    title: "HTML Blog of Modeling",
    description: "Modeling with HTML techniques and tools.",
    date: "2025-12-31",
    image: "/image/model.jpeg",
  },
  {
    id: "6",
    title: "HTML Blog of Set",
    description: "Explore HTML Sets and their possibilities.",
    date: "2025-12-31",
    image: "/image/modelset.jpg",
  },
  {
    id: "7",
    title: "HTML Blog of Neckles",
    description: "Learn about HTML applications in Necklaces.",
    date: "2025-12-31",
    image: "/image/neckles.jpg",
  },
  {
    id: "8",
    title: "HTML Blog of Gold Jewelry",
    description: "Understand Gold Jewelry using HTML.",
    date: "2025-12-31",
    image: "/image/old.jpg",
  },
  {
    id: "9",
    title: "HTML Blog of Jewelry Box",
    description: "Create Jewelry Boxes with HTML concepts.",
    date: "2025-12-31",
    image: "/image/overall.jpg",
  },
  {
    id: "10",
    title: "HTML Blog of Diamond Ring",
    description: "Explore Diamond Rings with HTML blogs.",
    date: "2025-12-31",
    image: "/image/ring.jpg",
  },
  {
    id: "11",
    title: "HTML Blog of Many Gold Rings",
    description: "Many Gold Rings made simple with HTML.",
    date: "2025-12-31",
    image: "/image/rings.jpg",
  },
  {
    id: "12",
    title: "HTML Blog of Bracelet",
    description: "Learn Bracelet designing with HTML.",
    date: "2025-12-31",
    image: "/image/set.jpg",
  },
  {
    id: "13",
    title: "HTML Blog of Silver Jewelry",
    description: "Silver Jewelry concepts using HTML.",
    date: "2025-12-31",
    image: "/image/silver.jpg",
  },
  {
    id: "14",
    title: "HTML Blog of Watch",
    description: "HTML-based blogs for Watches.",
    date: "2025-12-31",
    image: "/image/watch.jpg",
  },
  {
    id: "15",
    title: "HTML Blog of Reaction",
    description: "React to HTML blogs in style.",
    date: "2025-12-31",
    image: "/image/wow.jpg",
  },
];

function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); 
  const post = posts.find((p) => p.id === id); 

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">
        Post Not Found
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-pink-500 text-center">
        {post.title}
      </h1>

      {post.image && (
        <Image
          className="w-full h-auto rounded-md mt-4"
          src={post.image}
          alt={post.title}
          width={800}
          height={600}
        />
      )}

      <div className="mt-6 text-lg text-slate-600">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}

export default PostPage;
