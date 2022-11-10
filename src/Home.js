import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "JiU", id: 1 },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "Gahyeon",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Handong",
      id: 3,
    },
    { title: "My other website", body: "lorem ipsum...", author: "JiU", id: 4 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "JiU")}
        title="JiU's blogs"
      />
    </div>
  );
};

export default Home;
