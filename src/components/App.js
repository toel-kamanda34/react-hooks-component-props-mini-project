import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <header>
        <Header name={blogData.name} />
      </header>
      <aside>
        <About image={blogData.image} about={blogData.about} />
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

export default App
