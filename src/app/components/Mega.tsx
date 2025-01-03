import React from "react";
import BlogCard from "./BlogCard";

const Mega = () => {
  const posts = [
      {
        id: "1",
        title: "HTML Blog of Jewelry Website",
        description: "Explore the of the HTML",
        date: "2025-12-31",
        image: "/images/blue.jpg", 
      },
      {
        id: "2",
        title: "HTML Blog of Diamond",
        description: "Explore the of the HTML",
        date: "2025-12-31",
        image: "/images/diamond.jpg",
      },
        {
          id: "3",
          title: "HTML Blog of Earring",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/earing.jpg",
        },
        {
          id: "4",
          title: "HTML Blog of Gold Rings",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/Gold.jpg",
        },
        {
          id: "5",
          title: "HTML Blog of Modeling",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/model.jpeg",
        },
        {
          id: "6",
          title: "HTML Blog of Set",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/modelset.jpg",
        },
        {
          id: "7",
          title: "HTML Blog of Neckles",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/neckles.jpg",
        },
        {
          id: "8",
          title: "HTML Blog of Gold Jewelry",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/old.jpg",
        },
        {
          id: "9",
          title: "HTML Blog of Jewelry Box",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/overall.jpg",
        },
        {
          id: "10",
          title: "HTML Blog of Diamond Ring",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/ring.jpg",
        },
        {
          id: "11",
          title: "HTML Blog of Many Gold Rings",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/rings.jpg",
        },
        {
          id: "12",
          title: "HTML Blog of Bracelet",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/set.jpg",
        },
        {
          id: "13",
          title: "HTML Blog of Silver Jewelry",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/silver.jpg",
        },
        {
          id: "14",
          title: "HTML Blog of Watch",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/watch.jpg",
        },
        {
          id: "15",
          title: "HTML Blog of Reaction",
          description: "Explore the of the HTML",
          date: "2025-12-31",
          image: "/images/wow.jpg",
        },
      ];
      
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-blue-500 animate-color-change">
        Explore The Jewelry Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            isDarkBackground={index % 2 === 0} // Alternate background
          />
        ))}
      </div>
    </div>
  );
};

export default Mega;
