"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import SearchForm from "./SearchForm";

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt-grid">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(()=> {
    const fetchedPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data)
    }
    fetchedPosts();
  }, []);

  useEffect(()=> {
    const filtered = posts.filter((post) => 
      post.prompt.toLowerCase().includes(searchText) || 
      post.tag.includes(searchText) || 
      post.creator.username.includes(searchText)
    );
    setFilteredPosts(filtered);
  }, [searchText, posts]);

  const handleSearchChange = (event) => {
    event.preventDefault();
    const lowercaseSearchText = event.target.value.toLowerCase();
    setSearchText(lowercaseSearchText);
  }

  const handleTagClick = (tag) => {
    const lowercaseSearchText = tag.toLowerCase();
    setSearchText(lowercaseSearchText);
  }

  return (
    <section className="feed">
      <SearchForm placeholder="Search for tag, username or keyword" value={searchText} handleChange={handleSearchChange} />
      <PromptCardList data={filteredPosts.length > 0 ? filteredPosts : posts} handleTagClick={handleTagClick} />
    </section>
  )
}

export default Feed;