"use client";

import { useSearchParams  } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "@/components/Profile";

const UserProfile = ({params}) => {
  const userId = params?.id;
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const fetchedPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data)
    }
    if (userId) fetchedPosts();
  }, [userId])

  return (
    <Profile 
      name={name}
      desc={`Welcome to ${name}'s profile`}
      data={posts}
    />
  )
}

export default UserProfile;