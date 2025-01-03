import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardPops {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  };
  isDarkBackground: boolean;
}

function BlogCard({ post, isDarkBackground }: BlogCardPops) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-900 text-white" : "text-slate-900"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-400`}
    >
      <Image
        className="object-cover rounded-t-lg"
        src={post.image}
        alt={post.title}
        width={100}
        height={48}
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <Link
          className={`w-full px-6 text-white bg-pink-400 rounded hover:bg-pink-300 ${
            isDarkBackground
              ? "bg-black hover:bg-blue-500"
              : "bg-black hover:bg-blue-500"
          }`}
          href={`/posts/${post.id}`}
        >
          Read More
        </Link>
      </div>
    </Card>
  );
}

export default BlogCard;
