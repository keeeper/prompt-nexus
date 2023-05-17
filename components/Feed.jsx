"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt-grid">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleClick={handleTagClick} />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([])

  const handleSearchChange = (event) => {
    event.preventDefault();
  }

  useEffect(()=> {
    const fetchedPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data)
    }
    fetchedPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative flex-center w-full">
        <input type="text" placeholder="Search for tag, username or keyword" value={searchText} onChange={handleSearchChange} required className="search-input peer"/>
      </form>
      <PromptCardList data={posts} handleTagClick={()=>{}} />
    </section>
  )
}

export default Feed;